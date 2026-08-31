import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_EN_DIR = process.env.VAULT_PATH || '/Users/rizqisarasajati/Documents/Obsidian Vault/PM Playbooks';
const VAULT_ID_DIR = process.env.VAULT_ID_PATH || '/Users/rizqisarasajati/Documents/Obsidian Vault/PM Playbooks ID';

const TARGET_DIR = path.resolve(__dirname, '../src/data');
const CONTENT_EN_DIR = path.resolve(__dirname, '../src/content');
const CONTENT_ID_DIR = path.resolve(__dirname, '../src/content-id');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\./g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

function extractHeadings(markdown) {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    let title = match[2].trim();
    title = title.replace(/\*\*/g, '').replace(/__/g, '').replace(/\*/g, '').replace(/_/g, '');
    const id = slugify(title);
    headings.push({ level, title, id });
  }
  return headings;
}

function extractSummary(markdown) {
  const lines = markdown.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('---') &&
      !trimmed.startsWith('>') &&
      !trimmed.startsWith('|') &&
      !trimmed.startsWith('```') &&
      trimmed.length > 40
    ) {
      return (
        trimmed
          .replace(/\*\*/g, '')
          .replace(/__/g, '')
          .replace(/\*/g, '')
          .replace(/_/g, '')
          .slice(0, 220) + '...'
      );
    }
  }
  return 'In-depth Product Management playbook and actionable frameworks.';
}

function extractTakeaways(markdown) {
  const lines = markdown.split('\n');
  const takeaways = [];
  let capture = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (
      line.toLowerCase().includes('takeaway') ||
      line.toLowerCase().includes('poin penting') ||
      line.toLowerCase().includes('prinsip') ||
      line.toLowerCase().includes('key point')
    ) {
      capture = true;
      continue;
    }
    if (capture && line.startsWith('###')) {
      break;
    }
    if (capture && (line.startsWith('- ') || line.startsWith('* ') || /^\d+\.\s/.test(line))) {
      const clean = line.replace(/^[-*]|\d+\.\s/, '').trim().replace(/\*\*/g, '');
      if (clean.length > 10 && clean.length < 250) {
        takeaways.push(clean);
        if (takeaways.length >= 4) break;
      }
    }
  }
  return takeaways;
}

function main() {
  const enExists = fs.existsSync(VAULT_EN_DIR);
  const idExists = fs.existsSync(VAULT_ID_DIR);
  const cachedDataExists = fs.existsSync(path.join(TARGET_DIR, 'bilingual-playbooks.json'));

  if (!enExists) {
    if (cachedDataExists) {
      console.log('Vault directory not found in this environment. Using existing checked-in bilingual data.');
      return;
    }
    console.error(`Vault directories not found and no cached data exists.`);
    process.exit(1);
  }

  if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });
  if (!fs.existsSync(CONTENT_EN_DIR)) fs.mkdirSync(CONTENT_EN_DIR, { recursive: true });
  if (!fs.existsSync(CONTENT_ID_DIR)) fs.mkdirSync(CONTENT_ID_DIR, { recursive: true });

  const foldersEn = fs.readdirSync(VAULT_EN_DIR).filter((f) => fs.statSync(path.join(VAULT_EN_DIR, f)).isDirectory()).sort();
  const foldersId = idExists
    ? fs.readdirSync(VAULT_ID_DIR).filter((f) => fs.statSync(path.join(VAULT_ID_DIR, f)).isDirectory()).sort()
    : [];

  const modulesEn = [];
  const modulesId = [];
  const allDocsEn = [];
  const allDocsId = [];
  const contentEnMap = {};
  const contentIdMap = {};
  const searchIndexEn = [];
  const searchIndexId = [];

  const colorConfig = {
    1: { color: 'yellow', badgeColor: 'bg-neo-yellow', accentColor: '#FFE600', icon: 'Compass' },
    2: { color: 'cyan', badgeColor: 'bg-neo-cyan', accentColor: '#38BDF8', icon: 'Wrench' },
    3: { color: 'pink', badgeColor: 'bg-neo-pink', accentColor: '#FF5C93', icon: 'MessageSquareText' },
    4: { color: 'purple', badgeColor: 'bg-neo-purple', accentColor: '#A78BFA', icon: 'Brain' },
    5: { color: 'green', badgeColor: 'bg-neo-green', accentColor: '#4ADE80', icon: 'Building2' },
    6: { color: 'orange', badgeColor: 'bg-neo-orange', accentColor: '#FF8A00', icon: 'Zap' },
    7: { color: 'red', badgeColor: 'bg-neo-red', accentColor: '#EF4444', icon: 'AlertTriangle' },
    8: { color: 'lime', badgeColor: 'bg-neo-lime', accentColor: '#CCFF00', icon: 'CheckSquare' },
    9: { color: 'blue', badgeColor: 'bg-neo-blue', accentColor: '#3B82F6', icon: 'Sparkles' },
  };

  let globalOrder = 0;

  for (let i = 0; i < foldersEn.length; i++) {
    const fEn = foldersEn[i];
    const fId = foldersId[i] || fEn;
    const modNum = parseInt(fEn.split('.')[0], 10) || (i + 1);

    const folderPathEn = path.join(VAULT_EN_DIR, fEn);
    const folderPathId = idExists ? path.join(VAULT_ID_DIR, fId) : folderPathEn;

    const filesEn = fs.readdirSync(folderPathEn).filter((file) => file.endsWith('.md')).sort();
    const filesId = idExists && fs.existsSync(folderPathId)
      ? fs.readdirSync(folderPathId).filter((file) => file.endsWith('.md')).sort()
      : filesEn;

    const titleEn = fEn.replace(/^\d+\.\s*/, '');
    const titleId = fId.replace(/^\d+\.\s*/, '');
    const moduleSlug = slugify(titleEn);

    const colors = colorConfig[modNum] || { color: 'yellow', badgeColor: 'bg-neo-yellow', accentColor: '#FFE600', icon: 'BookOpen' };

    const docsEn = [];
    const docsId = [];

    for (let j = 0; j < filesEn.length; j++) {
      globalOrder++;
      const fileEn = filesEn[j];
      const fileId = filesId[j] || fileEn;

      const rawContentEn = fs.readFileSync(path.join(folderPathEn, fileEn), 'utf8');
      const rawContentId = idExists && fs.existsSync(path.join(folderPathId, fileId))
        ? fs.readFileSync(path.join(folderPathId, fileId), 'utf8')
        : rawContentEn;

      const matchNumEn = fileEn.match(/^([\d.]+)\s+(.+)\.md$/);
      const matchNumId = fileId.match(/^([\d.]+)\s+(.+)\.md$/);

      const chapterNumber = matchNumEn ? matchNumEn[1] : `${modNum}.${j + 1}`;
      const docTitleEn = matchNumEn ? matchNumEn[2] : fileEn.replace('.md', '');
      const docTitleId = matchNumId ? matchNumId[2] : docTitleEn;

      const docSlug = `${slugify(chapterNumber)}-${slugify(docTitleEn)}`;
      const docId = `doc-${chapterNumber.replace(/\./g, '-')}`;

      const wordsEn = rawContentEn.trim().split(/\s+/).filter(Boolean).length;
      const wordsId = rawContentId.trim().split(/\s+/).filter(Boolean).length;

      const readingTimeMinutesEn = Math.max(2, Math.ceil(wordsEn / 200));
      const readingTimeMinutesId = Math.max(2, Math.ceil(wordsId / 200));

      const headingsEn = extractHeadings(rawContentEn);
      const headingsId = extractHeadings(rawContentId);

      const summaryEn = extractSummary(rawContentEn);
      const summaryId = extractSummary(rawContentId);

      const takeawaysEn = extractTakeaways(rawContentEn);
      const takeawaysId = extractTakeaways(rawContentId);

      const metaEn = {
        id: docId,
        order: globalOrder,
        chapterNumber,
        title: docTitleEn,
        docSlug,
        moduleSlug,
        moduleId: modNum,
        moduleTitle: titleEn,
        moduleShortTitle: titleEn,
        moduleColor: colors.color,
        moduleBadgeColor: colors.badgeColor,
        moduleAccentColor: colors.accentColor,
        wordCount: wordsEn,
        readingTime: `${readingTimeMinutesEn} min read`,
        readingTimeMinutes: readingTimeMinutesEn,
        summary: summaryEn,
        takeaways: takeawaysEn,
        headings: headingsEn,
      };

      const metaId = {
        id: docId,
        order: globalOrder,
        chapterNumber,
        title: docTitleId,
        docSlug,
        moduleSlug,
        moduleId: modNum,
        moduleTitle: titleId,
        moduleShortTitle: titleId,
        moduleColor: colors.color,
        moduleBadgeColor: colors.badgeColor,
        moduleAccentColor: colors.accentColor,
        wordCount: wordsId,
        readingTime: `${readingTimeMinutesId} menit baca`,
        readingTimeMinutes: readingTimeMinutesId,
        summary: summaryId,
        takeaways: takeawaysId,
        headings: headingsId,
      };

      docsEn.push(metaEn);
      docsId.push(metaId);
      allDocsEn.push(metaEn);
      allDocsId.push(metaId);

      contentEnMap[docSlug] = rawContentEn;
      contentIdMap[docSlug] = rawContentId;

      fs.writeFileSync(path.join(CONTENT_EN_DIR, `${docSlug}.md`), rawContentEn, 'utf8');
      fs.writeFileSync(path.join(CONTENT_ID_DIR, `${docSlug}.md`), rawContentId, 'utf8');

      // Search indices
      searchIndexEn.push({
        id: `${docSlug}-main-en`,
        docSlug,
        moduleSlug,
        chapterNumber,
        title: docTitleEn,
        sectionTitle: docTitleEn,
        sectionId: '',
        moduleTitle: titleEn,
        moduleColor: colors.color,
        type: 'chapter',
        contentSnippet: summaryEn,
        keywords: `${chapterNumber} ${docTitleEn} ${titleEn} ${summaryEn}`,
      });

      searchIndexId.push({
        id: `${docSlug}-main-id`,
        docSlug,
        moduleSlug,
        chapterNumber,
        title: docTitleId,
        sectionTitle: docTitleId,
        sectionId: '',
        moduleTitle: titleId,
        moduleColor: colors.color,
        type: 'chapter',
        contentSnippet: summaryId,
        keywords: `${chapterNumber} ${docTitleId} ${titleId} ${summaryId}`,
      });

      headingsEn.forEach((heading) => {
        searchIndexEn.push({
          id: `${docSlug}-${heading.id}-en`,
          docSlug,
          moduleSlug,
          chapterNumber,
          title: docTitleEn,
          sectionTitle: heading.title,
          sectionId: heading.id,
          moduleTitle: titleEn,
          moduleColor: colors.color,
          type: 'heading',
          contentSnippet: `Section in ${chapterNumber}: ${docTitleEn}`,
          keywords: `${heading.title} ${docTitleEn} ${chapterNumber}`,
        });
      });

      headingsId.forEach((heading) => {
        searchIndexId.push({
          id: `${docSlug}-${heading.id}-id`,
          docSlug,
          moduleSlug,
          chapterNumber,
          title: docTitleId,
          sectionTitle: heading.title,
          sectionId: heading.id,
          moduleTitle: titleId,
          moduleColor: colors.color,
          type: 'heading',
          contentSnippet: `Bagian di Bab ${chapterNumber}: ${docTitleId}`,
          keywords: `${heading.title} ${docTitleId} ${chapterNumber}`,
        });
      });
    }

    modulesEn.push({
      id: modNum,
      title: titleEn,
      shortTitle: titleEn,
      description: `In-depth Product Management guide and actionable frameworks for ${titleEn}.`,
      ...colors,
      slug: moduleSlug,
      folderName: fEn,
      totalDocs: docsEn.length,
      totalWords: docsEn.reduce((acc, d) => acc + d.wordCount, 0),
      docs: docsEn,
    });

    modulesId.push({
      id: modNum,
      title: titleId,
      shortTitle: titleId,
      description: `Panduan mendalam dan playbook praktis Product Management untuk ${titleId}.`,
      ...colors,
      slug: moduleSlug,
      folderName: fId,
      totalDocs: docsId.length,
      totalWords: docsId.reduce((acc, d) => acc + d.wordCount, 0),
      docs: docsId,
    });
  }

  // Calculate prev/next
  allDocsEn.forEach((doc, idx) => {
    doc.prev = idx > 0 ? { title: allDocsEn[idx - 1].title, docSlug: allDocsEn[idx - 1].docSlug, chapterNumber: allDocsEn[idx - 1].chapterNumber } : null;
    doc.next = idx < allDocsEn.length - 1 ? { title: allDocsEn[idx + 1].title, docSlug: allDocsEn[idx + 1].docSlug, chapterNumber: allDocsEn[idx + 1].chapterNumber } : null;
  });

  allDocsId.forEach((doc, idx) => {
    doc.prev = idx > 0 ? { title: allDocsId[idx - 1].title, docSlug: allDocsId[idx - 1].docSlug, chapterNumber: allDocsId[idx - 1].chapterNumber } : null;
    doc.next = idx < allDocsId.length - 1 ? { title: allDocsId[idx + 1].title, docSlug: allDocsId[idx + 1].docSlug, chapterNumber: allDocsId[idx + 1].chapterNumber } : null;
  });

  const totalWords = allDocsEn.reduce((acc, d) => acc + d.wordCount, 0);
  const totalReadingTime = Math.ceil(totalWords / 200);

  const payload = {
    totalModules: modulesEn.length,
    totalChapters: allDocsEn.length,
    totalWords,
    totalReadingTimeHours: (totalReadingTime / 60).toFixed(1),
    lastUpdated: 'August 2026',
    en: {
      modules: modulesEn,
      allDocs: allDocsEn,
      content: contentEnMap,
      searchIndex: searchIndexEn,
    },
    id: {
      modules: modulesId,
      allDocs: allDocsId,
      content: contentIdMap,
      searchIndex: searchIndexId,
    },
  };

  fs.writeFileSync(path.join(TARGET_DIR, 'bilingual-playbooks.json'), JSON.stringify(payload, null, 2), 'utf8');
  fs.writeFileSync(path.join(TARGET_DIR, 'playbooks.json'), JSON.stringify({ ...payload, modules: modulesEn, allDocs: allDocsEn }, null, 2), 'utf8');
  fs.writeFileSync(path.join(TARGET_DIR, 'content.json'), JSON.stringify(contentEnMap, null, 2), 'utf8');
  fs.writeFileSync(path.join(TARGET_DIR, 'search-index.json'), JSON.stringify(searchIndexEn, null, 2), 'utf8');

  console.log(`Successfully generated bilingual dataset from both Obsidian vaults for all ${allDocsEn.length} chapters.`);
}

main();
