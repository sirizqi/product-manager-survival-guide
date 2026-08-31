import fs from 'fs';
import path from 'path';

// Comprehensive localization dictionary for the playbook chapters
const PARAGRAPH_TRANSLATIONS = [
  // Chapter 1.1 Translations
  [
    'Sarah was crushing it as a software engineer at a solid tech company. Great salary, clear career path, respected by her team. Then one day, she saw _that_ LinkedIn post—you know the one. Some PM influencer talking about how they "don\'t code anymore but make $200K doing strategy" and "set vision without getting stuck in the details." The post had 47,000 likes and comments like "PM is the dream job!" and "Finally escaped the code mines!"',
    'Karier Sarah sebagai software engineer di perusahaan tech awalnya lagi mulus-mulusnya. Gajinya mantap, jenjang kariernya jelas, dan dia disegani sama timnya. Sampai suatu hari, dia ngeliat postingan viral di LinkedIn—pasti kamu tau jenis postingan kayak gini. Ada influencer PM yang pamer gimana dia "udah nggak perlu ngoding lagi tapi dapet $200K cuma buat mikir strategi" dan "nentuin visi produk tanpa pusing mikirin detail teknis." Postingan itu dapet 47 ribu likes dan banjir komentar kayak "PM itu beneran dream job!" dan "Akhirnya bebas dari tambang kodingan!"'
  ],
  [
    'Six months later, Sarah had successfully transitioned into a PM role.',
    'Enam bulan kemudian, Sarah berhasil transisi jadi Product Manager.'
  ],
  [
    'Twelve months later, she was back to engineering.',
    'Dua belas bulan kemudian, dia mutusin balik lagi jadi engineer.'
  ],
  [
    '"Nobody told me," she said over our exit interview coffee, "that I\'d spend 60% of my time in meetings I can\'t control, 30% managing people\'s feelings, and 10% actually thinking about product. I just wanted to solve problems. Now I _am_ the problem—at least that\'s what the Slack threads suggest."',
    '"Nggak ada yang ngasih tau saya," curhat Sarah pas ngopi di sesi exit interview, "kalo ternyata 60% waktu saya bakal habis buat meeting yang nggak bisa saya kontrol, 30% buat ngurusin perasaan orang lain, dan cuma 10% yang beneran dipake buat mikirin produk. Saya awalnya cuma pengen nyelesaiin masalah. Sekarang saya yang _jadi_ masalahnya—setidaknya itu yang keliatan dari rame-ramenya thread Slack."'
  ],
  [
    'Sarah isn\'t alone. According to my very scientific poll (aka conversations with hundreds of PMs over whiskey), about 40% of people who transition into Product Management either switch back or burn out within two years.',
    'Sarah nggak sendirian. Berdasarkan obrolan saya bareng ratusan PM, sekitar 40% orang yang pindah ke Product Management akhirnya balik lagi ke role asal atau kena burnout dalam waktu dua tahun.'
  ],
  [
    'Here\'s the truth bomb nobody wants to say out loud: **Product Management is a fantastic career for the right person, and an absolute nightmare for everyone else.**',
    'Ini kenyataan pahit yang jarang ada orang berani omongin terang-terangan: **Product Management itu karier yang luar biasa seru buat orang yang tepat, tapi bakal jadi mimpi buruk buat yang salah ekspektasi.**'
  ],
  [
    'This chapter isn\'t here to scare you away. It\'s here to save you from making a $50K mistake and two years of your life you\'ll never get back.',
    'Bab ini bukan buat nakut-nakutin kamu. Tujuannya adalah nyelametin kamu dari buang-buang waktu dua tahun hidupmu yang nggak bakal bisa balik lagi.'
  ],
  [
    '_"As a PM, you\'re the CEO of the product! You set strategy, everyone reports to you, and you make all the decisions. Plus, you don\'t have to code anymore but still work in tech. Best of both worlds!"_',
    '_"Sebagai PM, kamu itu CEO-nya produk! Kamu yang nentuin strategi, semua orang nurut sama kamu, dan kamu yang ambil semua keputusan. Plus, nggak perlu ngoding lagi tapi tetep kerja di industri tech. Enak banget kan!"_'
  ],
  [
    '**8:00 AM** - You wake up to 47 Slack messages. Engineering says the feature you promised for next week is "technically impossible" (spoiler: it\'s not, they just don\'t want to do it). Design says your solution is "uninspired" (they\'re not wrong). Sales says a client wants a custom feature or they\'ll churn (they\'re bluffing, probably).',
    '**08:00 Pagi** - Kamu bangun tidur dan udah disambut 47 chat di Slack. Tim engineering bilang fitur yang kamu janjiin minggu depan "secara teknis mustahil dibuat" (spoiler: sebenernya bisa, mereka lagi males aja). Tim design bilang solusimu "kurang berjiwa" (mereka nggak salah sih). Tim sales panik bilang ada klien minta fitur custom kalo nggak mereka bakal cabut/churn (kemungkinan cuma gertak sambal).'
  ],
  [
    '**9:00 AM** - Standup. You\'re not allowed to talk about the product roadmap because "this isn\'t the forum for that," but somehow you need to know why the login bug from three months ago is still in the backlog.',
    '**09:00 Pagi** - Daily standup. Kamu nggak dibolehin ngomongin roadmap produk karena "bukan forumnya", tapi entah kenapa kamu tetep dituntut tau kenapa bug login dari tiga bulan lalu masih ngegantung di backlog.'
  ],
  [
    '**10:00 AM** - Strategy meeting with your VP. You spent 14 hours preparing a beautiful deck about expanding into a new market segment. They spend 2 minutes looking at it and say, "Yeah, but what does the CEO think?" You don\'t know what the CEO thinks because you haven\'t talked to them in three months.',
    '**10:00 Pagi** - Meeting strategi bareng VP. Kamu udah begadang 14 jam nyiapin slide presentasi cakep buat ekspansi ke segmen pasar baru. VP cuma ngeliat slidenya 2 menit terus nanya, "Oke, tapi menurut CEO gimana?" Kamu nggak tau CEO mikir apa karena udah tiga bulan nggak ngobrol sama dia.'
  ],
  [
    '**11:00 AM** - The CEO Slacks you directly: "Why don\'t we have this feature that competitor X just launched?" You resist the urge to reply with the PRD you sent six months ago that they never read.',
    '**11:00 Siang** - Tiba-tiba CEO nge-chat kamu langsung di Slack: "Kok kita belum punya fitur kayak yang baru dirilis kompetitor X?" Kamu nahan diri sekuat tenaga biar nggak ngirim ulang dokumen PRD yang udah kamu kirim 6 bulan lalu tapi nggak pernah dia buka.'
  ],
  [
    '**12:00 PM** - Lunch at your desk while writing SQL queries to figure out why the activation rate dropped 3% last week. Nobody taught you SQL in that Reforge course.',
    '**12:00 Siang** - Makan siang di depan laptop sambil pusing nulis query SQL buat nyari tau kenapa conversion rate turun 3% minggu lalu. Nggak ada yang ngajarin nulis SQL sekompleks ini di bootcamp kursus.'
  ],
  [
    '**1:00 PM** - User interview. The user spends 45 minutes telling you about their dog and 5 minutes giving you useful feedback. You smile and nod because "building empathy."',
    '**13:00 Siang** - Sesi user interview. User curhat 45 menit ngomongin anjing peliharaannya dan cuma 5 menit ngasih feedback yang ada gunanya. Kamu senyum-senyum aja sambil ngangguk demi "membangun empati".'
  ],
  [
    '**2:00 PM** - Engineering wants to refactor the entire backend. It\'ll take 6 weeks. You have zero idea if this is necessary or if they\'re just bored. You went to business school, not computer science.',
    '**14:00 Siang** - Tim engineer minta waktu 6 minggu buat refactor seluruh backend. Kamu nggak punya bayangan apakah ini beneran urgen atau mereka cuma lagi bosen aja sama codebase lama.'
  ],
  [
    '**3:00 PM** - Marketing is mad because you didn\'t tell them about the feature launch next week. You definitely did. Twice. In writing. With screenshots.',
    '**15:00 Sore** - Tim marketing ngambek karena ngerasa nggak dikabarin soal rilis fitur minggu depan. Padahal kamu udah ngabarin dua kali. Tertulis. Lengkap pake screenshot.'
  ],
  [
    '**4:00 PM** - The designer presents a beautiful mockup that completely ignores the technical constraints you discussed yesterday. You\'re now the bad guy who "doesn\'t understand good UX."',
    '**16:00 Sore** - Designer nunjukin mockup animasi yang super estetik tapi sama sekali ngabaikan batasan teknis yang kemarin udah disepakati. Sekarang kamu jadi sosok antagonis yang dicap "nggak ngerti estetika UX".'
  ],
  [
    '**5:00 PM** - Sales has brought another "quick win" custom request that will take 200 engineering hours. They\'ve already promised it to the client. Without asking you. Again.',
    '**17:00 Sore** - Tim sales bawa titipan fitur "quick win" yang sebenernya butuh 200 jam kerja engineer. Parahnya, mereka udah keburu janjiin fitur itu ke klien tanpa nanya kamu dulu.'
  ],
  [
    '**6:00 PM** - You finally have time to think about actual product strategy. Your brain is mush. You watch TikTok instead.',
    '**18:00 Petang** - Kamu akhirnya punya waktu hening buat mikirin strategi produk. Tapi otakmu udah keburu lelah. Akhirnya kamu cuma scrolling media sosial.'
  ],
  [
    '**9:00 PM** - You remember you forgot to update the roadmap. Again.',
    '**21:00 Malam** - Kamu baru inget kalo lupa nge-update status di roadmap. Lagi dan lagi.'
  ],
  [
    'Sound like CEO of the product to you? Yeah, didn\'t think so.',
    'Kedengeran kayak "CEO produk" nggak? Ya jelas nggak lah.'
  ],

  // Chapter 2.3 Prioritization
  [
    'I once built what I considered a masterpiece: a prioritization spreadsheet with RICE scores for 47 different feature requests. Reach, Impact, Confidence, Effort—all meticulously scored, weighted, and ranked. I was so proud of this spreadsheet. It had conditional formatting. It had a summary tab. It practically glowed with data-driven objectivity.',
    'Dulu saya pernah bikin apa yang saya anggap sebagai sebuah karya agung: spreadsheet prioritisasi pake skor RICE buat 47 request fitur berbeda. Reach, Impact, Confidence, Effort—semuanya dihitung detail, dikasih bobot, dan diurutkan. Saya bangga banget sama spreadsheet itu. Ada conditional formatting warna-warni, ada tab summary, bener-bener keliatan canggih dan data-driven banget.'
  ],
  [
    'I presented it in our planning meeting like I was unveiling scientific proof of what we should build next.',
    'Saya bawa spreadsheet itu ke meeting planning seolah-olah lagi nunjukin bukti ilmiah mutlak tentang apa yang wajib tim bangun selanjutnya.'
  ],
  [
    'The Head of Engineering took one look at it and said: "So why is the feature the CEO asked for ranked #34?"',
    'Head of Engineering ngeliat spreadsheet itu sebentar terus nanya santai: "Terus kenapa fitur yang kemarin diminta langsung sama CEO malah ada di urutan #34?"'
  ],
  [
    'Silence. The spreadsheet didn\'t have an answer for that. Because prioritization is never purely a math problem—it is fundamentally a political, strategic, and human problem.',
    'Ruangan langsung hening. Spreadsheet rumus itu nggak punya jawaban buat realita politik. Karena prioritisasi itu bukan sekadar soal hitungan matematika—tapi soal seni menyeimbangkan strategi, politik organisasi, dan keyakinan manusia.'
  ],

  // Chapter 2.5 Metrics
  [
    'Years ago, our company adopted "Daily Active Users" (DAU) as our North Star Metric. Simple, trackable, universally understood. Every team rallied around growing DAU. We celebrated when it went up. We panicked when it dipped.',
    'Bertahun-tahun lalu, perusahaan tempat saya kerja netapin "Daily Active Users" (DAU) sebagai North Star Metric. Keliatannya simpel, gampang dilacak, dan semua orang paham. Tiap tim kerja keras naikin angka DAU. Pas naik kita selebrasi, pas turun kita panik.'
  ],
  [
    'Then one quarter, DAU hit an all-time high. Champagne emoji reactions in Slack. A congratulatory all-hands announcement. Six weeks later, our actual revenue-generating conversions had dropped 15%, and churn among our paying customers had quietly ticked upward.',
    'Sampai suatu kuartal, DAU nembus rekor tertinggi sepanjang sejarah. Slack rame sama reaksi emoji pesta. Pengumuman apresiasi di all-hands. Enam minggu kemudian, konversi penjualan kita malah anjlok 15%, dan churn pelanggan berbayar diam-diam naik drastis.'
  ],
  [
    'We were driving traffic through vanity push notifications that inflated active sessions without delivering core value.',
    'Ternyata kita cuma nge-spam push notification yang bikin orang buka aplikasi sekilas doang, tapi nggak ngasih value nyata buat bisnis.'
  ],

  // Chapter 3.3 Influence Without Authority
  [
    'Early in my PM career, I walked into a meeting with a clear plan: convince the engineering team to prioritize a refactor I believed was critical. I\'d prepared my case. I had data. I had conviction. I said, "I need this done by end of quarter."',
    'Di awal karier saya sebagai PM, saya masuk ke ruang rapat dengan rencana yang menurut saya udah matang: ngeyakinin tim engineering buat ngerjain refactor yang menurut saya penting banget. Saya siapin datanya, punya argumen kuat, terus dengan pede saya bilang: "Saya butuh ini beres sebelum akhir kuartal."'
  ],
  [
    'The engineering lead looked at me, not unkindly, and said, "You need it, or the business needs it? And either way, that\'s not really how this works—we don\'t report to you."',
    'Tech Lead-nya natap saya dengan tenang, lalu bilang: "Kamu yang butuh, atau bisnis yang butuh? Dan lagian, cara kerjanya bukan gitu—kita nggak report ke kamu."'
  ],
  [
    'That single sentence reshaped my entire understanding of the product management craft.',
    'Kalimat sederhana itu bener-bener ngebongkar pemahaman saya soal cara kerja Product Management selamanya.'
  ],

  // Chapter 4.2 Critical Thinking
  [
    'Most product decisions are made by analogy: "Competitor X does this, so we should too" or "Spotify has squads, so we need squads."',
    'Kebanyakan keputusan produk diambil cuma berdasarkan analogi dangkal: "Kompetitor X bikin fitur ini, jadi kita harus ikutan bikin" atau "Spotify pake sistem squad, jadi kantor kita wajib pake squad juga."'
  ],
  [
    'First-principles thinking requires you to strip away all the assumptions, get down to the bedrock physics of the problem, and rebuild the solution from ground zero.',
    'Berpikir dengan First Principles nuntut kamu buat buang semua asumsi dangkal, gali sampai ke fakta paling mendasar dari masalah tersebut, dan rancang solusinya dari nol.'
  ],
];

export function translateToIndonesian(text) {
  if (!text || text.trim().length === 0) return '';

  let output = text;

  // 1. Replace exact long paragraphs and stories
  PARAGRAPH_TRANSLATIONS.forEach(([english, indonesian]) => {
    output = output.split(english).join(indonesian);
  });

  // 2. Translate common structural phrases and words
  const replacements = [
    [/\bHowever,\b/g, 'Namun,'],
    [/\bFurthermore,\b/g, 'Selain itu,'],
    [/\bIn reality,\b/g, 'Kenyataannya,'],
    [/\bFor example,\b/g, 'Contohnya,'],
    [/\bIn other words,\b/g, 'Dengan kata lain,'],
    [/\bAs a result,\b/g, 'Hasilnya,'],
    [/\bConsequently,\b/g, 'Dampaknya,'],
    [/\bTherefore,\b/g, 'Makanya,'],
    [/\bOn the other hand,\b/g, 'Di sisi lain,'],
    [/\bFirst of all,\b/g, 'Pertama-tama,'],
    [/\bIn conclusion,\b/g, 'Kesimpulannya,'],
    [/\bUltimately,\b/g, 'Pada akhirnya,'],
    [/\bLet me tell you about\b/gi, 'Kenalin, ini cerita tentang'],
    [/\bHere are the key takeaways:\b/gi, 'Ini poin-poin pentingnya:'],
    [/\bKey Takeaways\b/gi, 'Poin Penting Buat Diingat'],
    [/\bSummary\b/gi, 'Ringkasan Singkat'],
    [/\bActionable Framework\b/gi, 'Framework Praktis'],
    [/\bStep 1:\b/gi, 'Langkah 1:'],
    [/\bStep 2:\b/gi, 'Langkah 2:'],
    [/\bStep 3:\b/gi, 'Langkah 3:'],
    [/\bStep 4:\b/gi, 'Langkah 4:'],
    [/\bStep 5:\b/gi, 'Langkah 5:'],
    [/\bWhat to do:\b/gi, 'Yang perlu kamu lakuin:'],
    [/\bWhat to avoid:\b/gi, 'Yang harus kamu hindari:'],
    [/\bPro Tip:\b/gi, 'Tips Pro:'],
    [/\bRule of thumb:\b/gi, 'Aturan praktis:'],
    [/\bThe Problem:\b/gi, 'Masalahnya:'],
    [/\bThe Solution:\b/gi, 'Solusinya:'],
    [/\bWhy it matters:\b/gi, 'Kenapa ini penting:'],
    [/\bThe Reality:\b/gi, 'Realitanya:'],
    [/\bThe Myth:\b/gi, 'Mitosnya:'],
  ];

  replacements.forEach(([regex, replacement]) => {
    output = output.replace(regex, replacement);
  });

  return output;
}
