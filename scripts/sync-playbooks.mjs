import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_DIR = process.env.VAULT_PATH || '/Users/rizqisarasajati/Documents/Obsidian Vault/PM Playbooks';
const TARGET_DIR = path.resolve(__dirname, '../src/data');
const CONTENT_DIR = path.resolve(__dirname, '../src/content');

const MODULE_CONFIG = {
  '1. Foundations and Realities of The PM Profession': {
    id: 1,
    title: 'Foundations and Realities of The PM Profession',
    shortTitle: 'Foundations & Realities',
    description: 'Deconstruct the PM myth, understand true role anatomy, and map realistic career trajectories.',
    color: 'yellow',
    badgeColor: 'bg-neo-yellow',
    textColor: 'text-black',
    accentColor: '#FFE600',
    icon: 'Compass',
  },
  '2. Hard Skills - Fundamental Toolkit': {
    id: 2,
    title: 'Hard Skills - Fundamental Toolkit',
    shortTitle: 'Hard Skills & Toolkits',
    description: 'Master discovery, high-conviction prioritization, PMF frameworks, roadmaps, data literacy, and delivery.',
    color: 'cyan',
    badgeColor: 'bg-neo-cyan',
    textColor: 'text-black',
    accentColor: '#38BDF8',
    icon: 'Wrench',
  },
  '3. Soft Skills - The Invisible Game': {
    id: 3,
    title: 'Soft Skills - The Invisible Game',
    shortTitle: 'Soft Skills & Influence',
    description: 'Navigate politics, influence without authority, bridge engineering/design/business, and lead without fear.',
    color: 'pink',
    badgeColor: 'bg-neo-pink',
    textColor: 'text-black',
    accentColor: '#FF5C93',
    icon: 'MessageSquareText',
  },
  '4. Mindset and Mental Models': {
    id: 4,
    title: 'Mindset and Mental Models',
    shortTitle: 'Mindsets & Mental Models',
    description: 'Cultivate product intuition, first-principles decision making under extreme uncertainty, and customer obsession.',
    color: 'purple',
    badgeColor: 'bg-neo-purple',
    textColor: 'text-black',
    accentColor: '#A78BFA',
    icon: 'Brain',
  },
  '5. Context Matters - PM in Different Environments': {
    id: 5,
    title: 'Context Matters - PM in Different Environments',
    shortTitle: 'Context & Environments',
    description: 'Scale playbooks across Early-Stage Startups, Growth Stage, Enterprise, B2B, B2C, Marketplaces, and Hardware.',
    color: 'green',
    badgeColor: 'bg-neo-green',
    textColor: 'text-black',
    accentColor: '#4ADE80',
    icon: 'Building2',
  },
  '6. Special Topics and Advanced Concepts': {
    id: 6,
    title: 'Special Topics and Advanced Concepts',
    shortTitle: 'Advanced Concepts',
    description: 'Platform ecosystems, AI/ML product management, Monetization & Pricing strategy, ProdOps, and PLG.',
    color: 'orange',
    badgeColor: 'bg-neo-orange',
    textColor: 'text-black',
    accentColor: '#FF8A00',
    icon: 'Zap',
  },
  '7. Dark Side and Pitfalls': {
    id: 7,
    title: 'Dark Side and Pitfalls',
    shortTitle: 'Dark Side & Pitfalls',
    description: 'Prevent burnout, diagnose toxic environments, recover from failed products, navigate ethics, and dodge fatal traps.',
    color: 'red',
    badgeColor: 'bg-neo-red',
    textColor: 'text-black',
    accentColor: '#EF4444',
    icon: 'AlertTriangle',
  },
  '8. Practice and Implementation': {
    id: 8,
    title: 'Practice and Implementation',
    shortTitle: 'Practice & Implementation',
    description: 'First 90 days playbook, productive rituals, battle-tested templates, interview mastery, and portfolio building.',
    color: 'lime',
    badgeColor: 'bg-neo-lime',
    textColor: 'text-black',
    accentColor: '#CCFF00',
    icon: 'CheckSquare',
  },
  '9. Future and Evolution': {
    id: 9,
    title: 'Future and Evolution',
    shortTitle: 'Future & Evolution',
    description: 'The shifting role of PMs in an automated era, alternative career transitions, and sustainable leadership philosophy.',
    color: 'blue',
    badgeColor: 'bg-neo-blue',
    textColor: 'text-white',
    accentColor: '#3B82F6',
    icon: 'Sparkles',
  },
};

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
      return trimmed.replace(/\*\*/g, '').replace(/__/g, '').replace(/\*/g, '').replace(/_/g, '').slice(0, 220) + '...';
    }
  }
  return 'In-depth Product Management playbook and actionable frameworks.';
}

function extractKeyTakeaways(markdown) {
  const lines = markdown.split('\n');
  const takeaways = [];
  let capture = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (
      line.toLowerCase().includes('takeaway') ||
      line.toLowerCase().includes('key point') ||
      line.toLowerCase().includes('core principle') ||
      line.toLowerCase().includes('summary')
    ) {
      capture = true;
      continue;
    }
    if (capture && line.startsWith('###')) {
      break;
    }
    if (capture && (line.startsWith('- ') || line.startsWith('* ') || /^\d+\.\s/.test(line))) {
      const clean = line.replace(/^[-*]|\d+\.\s/, '').trim().replace(/\*\*/g, '');
      if (clean.length > 10 && clean.length < 200) {
        takeaways.push(clean);
        if (takeaways.length >= 4) break;
      }
    }
  }
  return takeaways;
}

function main() {
  const dataExists = fs.existsSync(path.join(TARGET_DIR, 'playbooks.json'));

  if (!fs.existsSync(VAULT_DIR)) {
    if (dataExists) {
      console.log(`Vault directory not found at ${VAULT_DIR}, using existing synced data.`);
      return;
    }
    console.error(`Vault directory not found at ${VAULT_DIR} and no cached data exists.`);
    process.exit(1);
  }

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const folderNames = fs
    .readdirSync(VAULT_DIR)
    .filter((f) => fs.statSync(path.join(VAULT_DIR, f)).isDirectory())
    .sort();

  const modules = [];
  const allDocs = [];
  const contentMap = {};
  const searchIndex = [];

  let globalOrder = 0;

  folderNames.forEach((folderName) => {
    const config = MODULE_CONFIG[folderName] || {
      id: parseInt(folderName.split('.')[0], 10) || 1,
      title: folderName.replace(/^\d+\.\s*/, ''),
      shortTitle: folderName.replace(/^\d+\.\s*/, ''),
      description: 'Comprehensive Product Management guide.',
      color: 'yellow',
      badgeColor: 'bg-neo-yellow',
      textColor: 'text-black',
      accentColor: '#FFE600',
      icon: 'BookOpen',
    };

    const moduleSlug = slugify(config.title);
    const folderPath = path.join(VAULT_DIR, folderName);
    const fileNames = fs
      .readdirSync(folderPath)
      .filter((file) => file.endsWith('.md'))
      .sort((a, b) => {
        const numA = parseFloat(a.split(' ')[0]) || 0;
        const numB = parseFloat(b.split(' ')[0]) || 0;
        return numA - numB;
      });

    const docs = [];

    fileNames.forEach((fileName) => {
      globalOrder++;
      const fullPath = path.join(folderPath, fileName);
      const rawContent = fs.readFileSync(fullPath, 'utf8');

      const matchNum = fileName.match(/^([\d.]+)\s+(.+)\.md$/);
      const chapterNumber = matchNum ? matchNum[1] : `${config.id}.${docs.length + 1}`;
      const title = matchNum ? matchNum[2] : fileName.replace('.md', '');
      const docSlug = `${slugify(chapterNumber)}-${slugify(title)}`;
      const docId = `doc-${chapterNumber.replace(/\./g, '-')}`;

      const words = rawContent.trim().split(/\s+/).filter(Boolean).length;
      const readingTimeMinutes = Math.max(2, Math.ceil(words / 200));

      const headings = extractHeadings(rawContent);
      const summary = extractSummary(rawContent);
      const takeaways = extractKeyTakeaways(rawContent);

      const docMeta = {
        id: docId,
        order: globalOrder,
        chapterNumber,
        title,
        docSlug,
        moduleSlug,
        moduleId: config.id,
        moduleTitle: config.title,
        moduleShortTitle: config.shortTitle,
        moduleColor: config.color,
        moduleBadgeColor: config.badgeColor,
        moduleAccentColor: config.accentColor,
        wordCount: words,
        readingTime: `${readingTimeMinutes} min read`,
        readingTimeMinutes,
        summary,
        takeaways,
        headings,
      };

      docs.push(docMeta);
      allDocs.push(docMeta);
      contentMap[docSlug] = rawContent;

      fs.writeFileSync(path.join(CONTENT_DIR, `${docSlug}.md`), rawContent, 'utf8');

      searchIndex.push({
        id: `${docSlug}-main`,
        docSlug,
        moduleSlug,
        chapterNumber,
        title,
        sectionTitle: title,
        sectionId: '',
        moduleTitle: config.title,
        moduleColor: config.color,
        type: 'chapter',
        contentSnippet: summary,
        keywords: `${chapterNumber} ${title} ${config.title} ${summary}`,
      });

      headings.forEach((heading) => {
        searchIndex.push({
          id: `${docSlug}-${heading.id}`,
          docSlug,
          moduleSlug,
          chapterNumber,
          title,
          sectionTitle: heading.title,
          sectionId: heading.id,
          moduleTitle: config.title,
          moduleColor: config.color,
          type: 'heading',
          contentSnippet: `Section in ${chapterNumber}: ${title}`,
          keywords: `${heading.title} ${title} ${chapterNumber}`,
        });
      });
    });

    modules.push({
      ...config,
      slug: moduleSlug,
      folderName,
      totalDocs: docs.length,
      totalWords: docs.reduce((acc, d) => acc + d.wordCount, 0),
      docs,
    });
  });

  allDocs.forEach((doc, idx) => {
    doc.prev = idx > 0 ? { title: allDocs[idx - 1].title, docSlug: allDocs[idx - 1].docSlug, chapterNumber: allDocs[idx - 1].chapterNumber } : null;
    doc.next = idx < allDocs.length - 1 ? { title: allDocs[idx + 1].title, docSlug: allDocs[idx + 1].docSlug, chapterNumber: allDocs[idx + 1].chapterNumber } : null;
  });

  const totalWords = allDocs.reduce((acc, d) => acc + d.wordCount, 0);
  const totalReadingTime = Math.ceil(totalWords / 200);

  const metaSummary = {
    totalModules: modules.length,
    totalChapters: allDocs.length,
    totalWords,
    totalReadingTimeHours: (totalReadingTime / 60).toFixed(1),
    lastUpdated: 'August 2026',
    modules,
    allDocs,
  };

  fs.writeFileSync(path.join(TARGET_DIR, 'playbooks.json'), JSON.stringify(metaSummary, null, 2), 'utf8');
  fs.writeFileSync(path.join(TARGET_DIR, 'content.json'), JSON.stringify(contentMap, null, 2), 'utf8');
  fs.writeFileSync(path.join(TARGET_DIR, 'search-index.json'), JSON.stringify(searchIndex, null, 2), 'utf8');

  // Also write the typed TS helper
  const tsHelper = `// Auto-generated Playbooks dataset
import playbooksData from './playbooks.json';
import contentData from './content.json';
import searchIndexData from './search-index.json';

export interface HeadingItem {
  level: number;
  title: string;
  id: string;
}

export interface NavDocRef {
  title: string;
  docSlug: string;
  chapterNumber: string;
}

export interface DocMetadata {
  id: string;
  order: number;
  chapterNumber: string;
  title: string;
  docSlug: string;
  moduleSlug: string;
  moduleId: number;
  moduleTitle: string;
  moduleShortTitle: string;
  moduleColor: string;
  moduleBadgeColor: string;
  moduleAccentColor: string;
  wordCount: number;
  readingTime: string;
  readingTimeMinutes: number;
  summary: string;
  takeaways: string[];
  headings: HeadingItem[];
  prev: NavDocRef | null;
  next: NavDocRef | null;
}

export interface ModuleItem {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  color: string;
  badgeColor: string;
  textColor: string;
  accentColor: string;
  icon: string;
  slug: string;
  folderName: string;
  totalDocs: number;
  totalWords: number;
  docs: DocMetadata[];
}

export interface SearchIndexItem {
  id: string;
  docSlug: string;
  moduleSlug: string;
  chapterNumber: string;
  title: string;
  sectionTitle: string;
  sectionId: string;
  moduleTitle: string;
  moduleColor: string;
  type: 'chapter' | 'heading';
  contentSnippet: string;
  keywords: string;
}

export interface PlaybooksOverview {
  totalModules: number;
  totalChapters: number;
  totalWords: number;
  totalReadingTimeHours: string;
  lastUpdated: string;
  modules: ModuleItem[];
  allDocs: DocMetadata[];
}

export const playbooks = playbooksData as PlaybooksOverview;
export const allDocs = playbooksData.allDocs as DocMetadata[];
export const modules = playbooksData.modules as ModuleItem[];
export const contentBySlug = contentData as Record<string, string>;
export const searchIndex = searchIndexData as SearchIndexItem[];

export function getDocBySlug(slug: string): { meta: DocMetadata; content: string } | null {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const normalizedSlug = cleanSlug.replace(/(\\d+)\\.(\\d+)/g, '$1-$2');

  const meta = allDocs.find((d) => {
    return (
      d.docSlug === cleanSlug ||
      d.docSlug === normalizedSlug ||
      d.docSlug.replace(/-/g, '') === cleanSlug.replace(/-/g, '') ||
      d.chapterNumber === cleanSlug ||
      d.chapterNumber.replace(/\\./g, '-') === cleanSlug ||
      d.id === cleanSlug
    );
  });

  if (!meta) return null;
  const content = contentBySlug[meta.docSlug] || '';
  return { meta, content };
}

export function getModuleBySlug(slug: string): ModuleItem | null {
  return modules.find(m => m.slug === slug || String(m.id) === slug) || null;
}
`;

  fs.writeFileSync(path.join(TARGET_DIR, 'playbooks.ts'), tsHelper, 'utf8');

  console.log(`Synced ${allDocs.length} chapters across ${modules.length} modules.`);
}

main();
