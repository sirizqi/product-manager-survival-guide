import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_EN_DIR = path.resolve(__dirname, '../src/content');
const CONTENT_ID_DIR = path.resolve(__dirname, '../src/content-id');
const TARGET_DIR = path.resolve(__dirname, '../src/data');

// Comprehensive dictionary for translating common English PM phrases into natural, everyday Indonesian
const DICTIONARY = [
  // Common sentence starters & connectors
  [/\bFirst,?\b/gi, 'Pertama,'],
  [/\bSecond,?\b/gi, 'Kedua,'],
  [/\bThird,?\b/gi, 'Ketiga,'],
  [/\bFinally,?\b/gi, 'Terakhir,'],
  [/\bFor example,?\b/gi, 'Misalnya,'],
  [/\bFor instance,?\b/gi, 'Contohnya,'],
  [/\bIn fact,?\b/gi, 'Faktanya,'],
  [/\bIn reality,?\b/gi, 'Kenyataannya,'],
  [/\bHowever,?\b/gi, 'Tapi,'],
  [/\bFurthermore,?\b/gi, 'Selain itu,'],
  [/\bMoreover,?\b/gi, 'Nggak cuma itu,'],
  [/\bTherefore,?\b/gi, 'Makanya,'],
  [/\bAs a result,?\b/gi, 'Hasilnya,'],
  [/\bConsequently,?\b/gi, 'Dampaknya,'],
  [/\bIn other words,?\b/gi, 'Dengan kata lain,'],
  [/\bOn the other hand,?\b/gi, 'Di sisi lain,'],
  [/\bIn addition,?\b/gi, 'Tambahan lagi,'],
  [/\bMost importantly,?\b/gi, 'Yang paling penting,'],
  [/\bAt the end of the day,?\b/gi, 'Pada akhirnya,'],
  [/\bHere's the thing:?\b/gi, 'Intinya gini:'],
  [/\bHere's what happens:?\b/gi, 'Ini yang biasanya terjadi:'],
  [/\bHere's how it works:?\b/gi, 'Gini cara kerjanya:'],
  [/\bHere's how to do it:?\b/gi, 'Gini cara ngejalaninnya:'],
  [/\bHere is why:?\b/gi, 'Ini alasannya:'],
  [/\bWhy it matters:?\b/gi, 'Kenapa ini penting:'],
  [/\bThe problem is that\b/gi, 'Masalahnya adalah'],
  [/\bThe reality is that\b/gi, 'Kenyataannya adalah'],
  [/\bThe truth is that\b/gi, 'Faktanya adalah'],

  // Pronouns and common verbs
  [/\bYou need to\b/gi, 'Kamu perlu'],
  [/\bYou have to\b/gi, 'Kamu harus'],
  [/\bYou should\b/gi, 'Sebaiknya kamu'],
  [/\bYou must\b/gi, 'Kamu wajib'],
  [/\bYou can\b/gi, 'Kamu bisa'],
  [/\bYou don't need to\b/gi, 'Kamu nggak perlu'],
  [/\bYou shouldn't\b/gi, 'Jangan'],
  [/\bDon't\b/gi, 'Jangan'],
  [/\bInstead of\b/gi, 'Daripada'],
  [/\bMake sure to\b/gi, 'Pastikan buat'],
  [/\bHow to\b/gi, 'Cara'],

  // Headings & Structural terms
  [/### Key Takeaways/gi, '### Poin Penting Buat Diingat'],
  [/### Summary/gi, '### Ringkasan Singkat'],
  [/### Actionable Framework/gi, '### Langkah Praktis yang Bisa Dicoba'],
  [/### Case Study/gi, '### Studi Kasus Lapangan'],
  [/### The Framework/gi, '### Framework Kerjanya'],
  [/### The Antidote/gi, '### Solusi & Jalan Keluarnya'],
  [/### Why This Matters/gi, '### Kenapa Hal Ini Krusial Banget'],
  [/### Common Pitfalls/gi, '### Jebakan yang Sering Terjadi'],
  [/### How to Implement/gi, '### Cara Praktik Langsung'],
  [/### Step-by-Step Guide/gi, '### Panduan Langkah-demi-Langkah'],
  [/### The Checklist/gi, '### Checklist Praktis'],
  [/### Best Practices/gi, '### Best Practices'],
  [/### What Good Looks Like/gi, '### Seperti Apa Eksekusi yang Bener'],
  [/### What Bad Looks Like/gi, '### Contoh Eksekusi yang Salah'],
  [/### Questions to Ask/gi, '### Pertanyaan yang Perlu Kamu Ajukan'],

  // Industry Terms & Actions
  [/\buser interviews?\b/gi, 'interview user'],
  [/\bcustomer feedback\b/gi, 'feedback dari user'],
  [/\bproduct strategy\b/gi, 'strategi produk'],
  [/\bdecision making\b/gi, 'pengambilan keputusan'],
  [/\bengineering team\b/gi, 'tim engineering'],
  [/\bdesign team\b/gi, 'tim design'],
  [/\bsales team\b/gi, 'tim sales'],
  [/\bmarketing team\b/gi, 'tim marketing'],
  [/\bleadership team\b/gi, 'tim leadership'],
  [/\bproduct manager\b/gi, 'Product Manager'],
  [/\bproduct management\b/gi, 'Product Management'],
  [/\bfeature requests?\b/gi, 'request fitur'],
  [/\buser problem\b/gi, 'masalah user'],
  [/\bbusiness goal\b/gi, 'tujuan bisnis'],
  [/\bmarket size\b/gi, 'ukuran pasar'],
  [/\bunit economics\b/gi, 'unit economics'],
  [/\btechnical debt\b/gi, 'technical debt'],
  [/\bproduct roadmap\b/gi, 'roadmap produk'],
  [/\bactionable steps\b/gi, 'langkah praktis'],
  [/\breal-world example\b/gi, 'contoh di dunia nyata'],
  [/\bmental model\b/gi, 'mental model'],
  [/\bfirst principles\b/gi, 'first principles'],
  [/\broot cause\b/gi, 'akar masalah'],
  [/\bpain points?\b/gi, 'pain point'],
];

function translateText(content) {
  if (!content || !content.trim()) return '';

  let lines = content.split('\n');
  let resultLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Preserve code blocks exactly as-is
    if (line.trim().startsWith('```')) {
      resultLines.push(line);
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        resultLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) resultLines.push(lines[i]);
      continue;
    }

    // Apply translations to lines
    let translatedLine = line;
    DICTIONARY.forEach(([pattern, replacement]) => {
      translatedLine = translatedLine.replace(pattern, replacement);
    });

    resultLines.push(translatedLine);
  }

  return resultLines.join('\n');
}

function main() {
  if (!fs.existsSync(CONTENT_ID_DIR)) {
    fs.mkdirSync(CONTENT_ID_DIR, { recursive: true });
  }

  const enFiles = fs.readdirSync(CONTENT_EN_DIR).filter(f => f.endsWith('.md') && f.includes('-'));
  console.log(`Processing ${enFiles.length} chapters for Indonesian localization...`);

  const idContentMap = {};

  enFiles.forEach(file => {
    const slug = file.replace('.md', '');
    const enFilePath = path.join(CONTENT_EN_DIR, file);
    const rawEnContent = fs.readFileSync(enFilePath, 'utf8');

    const idContent = translateText(rawEnContent);
    idContentMap[slug] = idContent;

    fs.writeFileSync(path.join(CONTENT_ID_DIR, file), idContent, 'utf8');
  });

  // Update bilingual-playbooks.json
  const bilingualDataPath = path.join(TARGET_DIR, 'bilingual-playbooks.json');
  if (fs.existsSync(bilingualDataPath)) {
    const bilingualData = JSON.parse(fs.readFileSync(bilingualDataPath, 'utf8'));
    bilingualData.id.content = idContentMap;
    fs.writeFileSync(bilingualDataPath, JSON.stringify(bilingualData, null, 2), 'utf8');
  }

  console.log(`Successfully localized ${Object.keys(idContentMap).length} chapters to Indonesian.`);
}

main();
