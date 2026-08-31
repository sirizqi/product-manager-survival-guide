export type Language = 'en' | 'id';

export interface Translations {
  navbar: {
    brandSubtitle: string;
    home: string;
    readDocs: string;
    nineModules: string;
    tracks: string;
    searchPlaybooks: string;
    readCount: string;
  };
  landing: {
    heroBadge: string;
    heroTitlePre: string;
    heroTitleHighlight: string;
    heroTitlePost: string;
    heroSubtitle: string;
    startReading: string;
    searchTopics: string;
    statsModules: string;
    statsChapters: string;
    statsWords: string;
    statsPractical: string;
    realityMatrixBadge: string;
    realityMatrixTitle: string;
    realityMatrixSubtitle: string;
    fantasyLabel: string;
    realityLabel: string;
    readDeepDive: string;
    debunked: string;
    pathwaysBadge: string;
    pathwaysTitle: string;
    pathwaysSubtitle: string;
    total: string;
    startPathway: string;
    frameworksBadge: string;
    frameworksTitle: string;
    frameworksSubtitle: string;
    curriculumBadge: string;
    curriculumTitle: string;
    curriculumSubtitle: string;
    filterAll: string;
    filterCore: string;
    filterScale: string;
    filterPractice: string;
    includedChapters: string;
    moreChapters: string;
    explore: string;
    bottomCtaTitle: string;
    bottomCtaSubtitle: string;
    bottomCtaStart: string;
    bottomCtaSearch: string;
  };
  docs: {
    home: string;
    chapter: string;
    module: string;
    chaptersMenu: string;
    markAsRead: string;
    markReadShort: string;
    readDone: string;
    completedBadge: string;
    keyPrinciples: string;
    finishedPlaybookPrompt: string;
    finishedPlaybookSub: string;
    previousChapter: string;
    nextChapter: string;
    firstChapterNote: string;
    finalChapterNote: string;
    chapterNotFound: string;
    chapterNotFoundDesc: string;
    goToFirstChapter: string;
    comingSoonTitle: string;
    comingSoonBadge: string;
    comingSoonText: string;
    savedToBookmarks: string;
    bookmarkThisChapter: string;
    onThisPage: string;
    noSubheadings: string;
    backToTop: string;
    textSize: string;
    shareLink: string;
    copied: string;
    saved: string;
    bookmark: string;
    minRead: string;
    words: string;
  };
  sidebar: {
    tableOfContents: string;
    expand: string;
    collapse: string;
    filterPlaceholder: string;
    matchingChapters: string;
    clear: string;
    noChaptersFound: string;
    noResultsMatching: string;
    clearSearch: string;
    authorBadge: string;
    yourBelovedPm: string;
  };
  search: {
    searchPlaceholder: string;
    filterLabel: string;
    allModules: string;
    noPlaybooksFound: string;
    noPlaybooksSuggestion: string;
    navigateTip: string;
    selectTip: string;
    closeTip: string;
    indexedCount: string;
    sectionTag: string;
    jump: string;
  };
  bookmarks: {
    title: string;
    savedCount: string;
    noBookmarksYet: string;
    noBookmarksSub: string;
    readChapter: string;
    clearAll: string;
    storedLocally: string;
  };
  footer: {
    compendiumBanner: string;
    playbooksCount: string;
    modulesCount: string;
    hoursTotal: string;
    manifesto: string;
    shortcutTip: string;
    shortcutPress: string;
    corePlaybooks: string;
    advancedPractice: string;
    quickActions: string;
    startFromBeginning: string;
    backToTop: string;
    authorPrefix: string;
  };
  notFound: {
    badge: string;
    title: string;
    description: string;
    backHome: string;
    searchAll: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      brandSubtitle: 'Product Reading Hub',
      home: 'Home',
      readDocs: 'Read Docs',
      nineModules: '9 Modules',
      tracks: 'Tracks',
      searchPlaybooks: 'Search Playbooks',
      readCount: 'Read',
    },
    landing: {
      heroBadge: '47 Real-World Playbooks for Builders & PMs',
      heroTitlePre: 'THE NO-BULLSHIT',
      heroTitleHighlight: 'PRODUCT MANAGER',
      heroTitlePost: 'SURVIVAL GUIDE.',
      heroSubtitle:
        "Everything influencers don't tell you on LinkedIn. Honest field notes on running discovery, cutting through politics, managing engineering respect, and shipping stuff users actually care about.",
      startReading: 'Start Reading',
      searchTopics: 'Search Topics (⌘K)',
      statsModules: 'Core Modules',
      statsChapters: 'Deep Chapters',
      statsWords: 'Zero Fluff Words',
      statsPractical: '100% Battle-Tested',
      realityMatrixBadge: 'Reality Check',
      realityMatrixTitle: 'Bootcamp Fluff vs. Monday Morning Reality',
      realityMatrixSubtitle:
        "Before you buy into the hype, let's unpack how product management actually works in the trenches.",
      fantasyLabel: '✕ What You Hear in Bootcamps',
      realityLabel: '✓ What Actually Happens',
      readDeepDive: 'Read the Deep Dive',
      debunked: 'Real Talk',
      pathwaysBadge: 'Curated Tracks',
      pathwaysTitle: "Pick a Track Based on Where You're At",
      pathwaysSubtitle:
        'Follow a step-by-step reading roadmap tailored to your current career stage and challenges.',
      total: 'Estimated Read',
      startPathway: 'Start This Track',
      frameworksBadge: 'Tactical Cheatsheets',
      frameworksTitle: 'Jump Directly to Any PM Framework',
      frameworksSubtitle:
        'Need a specific framework right now? Jump straight into the playbook without sifting through noise.',
      curriculumBadge: 'Full Library',
      curriculumTitle: 'The 9 Core Modules',
      curriculumSubtitle:
        'All 47 chapters covering the entire product lifecycle from day 1 to leadership.',
      filterAll: 'All Modules (9)',
      filterCore: 'Core Craft (M1 – M4)',
      filterScale: 'Work Contexts (M5 – M6)',
      filterPractice: 'Career & Playbooks (M7 – M9)',
      includedChapters: 'Chapters in this module:',
      moreChapters: 'more chapters',
      explore: 'Open Module',
      bottomCtaTitle: 'READY TO LEVEL UP YOUR PRODUCT CRAFT?',
      bottomCtaSubtitle:
        'Dive into 47 deep-dive field notes, take notes, track your progress, and master the real games of Product Management.',
      bottomCtaStart: 'Start Reading Now',
      bottomCtaSearch: 'Search Topics (⌘K)',
    },
    docs: {
      home: 'Home',
      chapter: 'CHAPTER',
      module: 'MODULE',
      chaptersMenu: 'Chapters Menu',
      markAsRead: 'Mark as Read',
      markReadShort: 'Mark Read',
      readDone: '✓ Read',
      completedBadge: 'Completed Playbook! 🎉',
      keyPrinciples: 'Key Takeaways at a Glance',
      finishedPlaybookPrompt: 'Finished this playbook?',
      finishedPlaybookSub:
        'Mark it as read to track your progress across all 47 chapters.',
      previousChapter: 'PREVIOUS CHAPTER',
      nextChapter: 'NEXT CHAPTER',
      firstChapterNote: 'First chapter of the playbook.',
      finalChapterNote: 'Awesome! You reached the final chapter.',
      chapterNotFound: 'Chapter Not Found',
      chapterNotFoundDesc:
        'The requested playbook chapter does not exist or has been moved.',
      goToFirstChapter: 'Go to Chapter 1.1',
      comingSoonTitle: 'Coming Soon',
      comingSoonBadge: 'In The Writing Lab',
      comingSoonText: 'is currently being drafted and synthesized by',
      savedToBookmarks: 'Saved to Bookmarks',
      bookmarkThisChapter: 'Bookmark This Chapter',
      onThisPage: 'On This Page',
      noSubheadings: 'No subheadings',
      backToTop: 'Back to top',
      textSize: 'Text Size',
      shareLink: 'Share Link',
      copied: 'Copied!',
      saved: 'Saved',
      bookmark: 'Bookmark',
      minRead: 'min read',
      words: 'words',
    },
    sidebar: {
      tableOfContents: 'Table of Contents',
      expand: 'Expand',
      collapse: 'Collapse',
      filterPlaceholder: 'Search concepts, frameworks, chapters...',
      matchingChapters: 'matching chapters',
      clear: 'Clear',
      noChaptersFound: 'No chapters found',
      noResultsMatching: 'No results matching',
      clearSearch: 'Clear Search',
      authorBadge: 'Author',
      yourBelovedPm: 'Your beloved PM',
    },
    search: {
      searchPlaceholder: 'Search any concept, framework, or chapter...',
      filterLabel: 'Filter Module:',
      allModules: 'All Modules',
      noPlaybooksFound: 'No playbooks found in this selection',
      noPlaybooksSuggestion:
        'Try picking another module filter or change your search query.',
      navigateTip: 'Navigate',
      selectTip: 'Open',
      closeTip: 'Close',
      indexedCount: '47 Playbooks Indexed',
      sectionTag: 'Section',
      jump: 'Jump',
    },
    bookmarks: {
      title: 'Your Bookmarks',
      savedCount: 'saved playbooks',
      noBookmarksYet: 'No bookmarks yet',
      noBookmarksSub:
        'Click the bookmark icon on any chapter or table of contents to save it for later reading.',
      readChapter: 'Read chapter',
      clearAll: 'Clear All',
      storedLocally: 'Stored locally in your browser',
    },
    footer: {
      compendiumBanner: 'REAL-WORLD PRODUCT MANAGEMENT PLAYBOOK',
      playbooksCount: 'PLAYBOOKS',
      modulesCount: 'MODULES',
      hoursTotal: 'HOURS TOTAL',
      manifesto:
        'Synthesized directly from real software battles, organizational politics, brutal failures, and zero-to-one product craft. Zero fluff, zero theoretical lectures.',
      shortcutTip: 'Quick Tip:',
      shortcutPress: 'anywhere to jump into spotlight search.',
      corePlaybooks: 'Core Playbooks',
      advancedPractice: 'Advanced & Practice',
      quickActions: 'Quick Actions',
      startFromBeginning: 'Start from Chapter 1.1',
      backToTop: 'Back to Top',
      authorPrefix: 'Author: ',
    },
    notFound: {
      badge: 'Error 404',
      title: 'PAGE NOT FOUND',
      description: 'The page or chapter you are looking for does not exist in this library.',
      backHome: 'Back to Home',
      searchAll: 'Search Topics (⌘K)',
    },
  },
  id: {
    navbar: {
      brandSubtitle: 'Bacaan & Playbook PM',
      home: 'Home',
      readDocs: 'Baca Materi',
      nineModules: '9 Modul',
      tracks: 'Pilihan Track',
      searchPlaybooks: 'Cari Topik / Bab',
      readCount: 'Selesai',
    },
    landing: {
      heroBadge: '47 Playbook & Realita Lapangan Product Manager',
      heroTitlePre: 'PANDUAN TANPA BASA-BASI',
      heroTitleHighlight: 'PRODUCT MANAGER',
      heroTitlePost: 'REALITA DUNIA KERJA.',
      heroSubtitle:
        'Semua hal yang nggak pernah dibocorin di LinkedIn. Dari cara discovery yang bener, bikin roadmap, ngadepin politik stakeholder, beda kerja di startup vs korporat, sampai tips biar nggak gampang burnout.',
      startReading: 'Mulai Baca',
      searchTopics: 'Cari Topik (⌘K)',
      statsModules: 'Modul Utama',
      statsChapters: 'Bab Lengkap',
      statsWords: 'Total Kata (Daging Semua)',
      statsPractical: '100% Realita Kerja',
      realityMatrixBadge: 'Realita vs Ekspektasi',
      realityMatrixTitle: 'Ekspektasi Manis Bootcamp vs. Realita Lapangan',
      realityMatrixSubtitle:
        'Biar kamu nggak kaget pas beneran kerja jadi PM, yuk bedah bedanya teori di kelas sama kenyataan di kantor.',
      fantasyLabel: '✕ Mitos Manis di Bootcamp',
      realityLabel: '✓ Realita Sebenarnya',
      readDeepDive: 'Cek Pembahasannya',
      debunked: 'Realitanya',
      pathwaysBadge: 'Pilihan Track Belajar',
      pathwaysTitle: 'Pilih Track Sesuai Level Karirmu',
      pathwaysSubtitle:
        'Urutan bacaan yang udah disusun biar pas sama tantangan yang lagi kamu hadapi sekarang.',
      total: 'Total Waktu',
      startPathway: 'Mulai Track Ini',
      frameworksBadge: 'Toolkit & Cheatsheet PM',
      frameworksTitle: 'Kumpulan Framework & Tools Siap Pake',
      frameworksSubtitle:
        'Lagi butuh framework tertentu sekarang juga? Langsung loncat ke bab pembahasannya.',
      curriculumBadge: 'Daftar Modul Lengkap',
      curriculumTitle: '9 Modul Utama',
      curriculumSubtitle:
        'Koleksi lengkap 47 bab mencakup semua fase siklus produk.',
      filterAll: 'Semua Modul (9)',
      filterCore: 'Skill Inti PM (M1 – M4)',
      filterScale: 'Konteks Tempat Kerja (M5 – M6)',
      filterPractice: 'Praktek & Leadership (M7 – M9)',
      includedChapters: 'Bab di modul ini:',
      moreChapters: 'bab lainnya',
      explore: 'Buka Modul',
      bottomCtaTitle: 'SIAP NAIKIN LEVEL SKILL PM KAMU?',
      bottomCtaSubtitle:
        'Baca 47 bab playbook praktis, catat poin-poin pentingnya, dan kuasai permainan nyata dunia Product Management.',
      bottomCtaStart: 'Mulai Baca Sekarang',
      bottomCtaSearch: 'Cari Topik (⌘K)',
    },
    docs: {
      home: 'Home',
      chapter: 'BAB',
      module: 'MODUL',
      chaptersMenu: 'Daftar Bab',
      markAsRead: 'Tandai Udah Dibaca',
      markReadShort: 'Tandai Baca',
      readDone: '✓ Udah Dibaca',
      completedBadge: 'Bab Ini Beres Dibaca! 🎉',
      keyPrinciples: 'Poin Penting Buat Diingat',
      finishedPlaybookPrompt: 'Udah beres baca bab ini?',
      finishedPlaybookSub:
        'Tandai beres biar progress belajarmu tercatat dari total 47 bab.',
      previousChapter: 'BAB SEBELUMNYA',
      nextChapter: 'BAB SELANJUTNYA',
      firstChapterNote: 'Ini bab pertama dari playbook.',
      finalChapterNote: 'Keren! Kamu udah sampai di bab terakhir.',
      chapterNotFound: 'Bab Nggak Ditemukan',
      chapterNotFoundDesc:
        'Halaman atau bab yang kamu cari nggak ada atau udah dipindahin.',
      goToFirstChapter: 'Mulai dari Bab 1.1',
      comingSoonTitle: 'Coming Soon',
      comingSoonBadge: 'Lagi Digodok di Lab',
      comingSoonText: 'lagi disiapin dan ditulis materinya sama',
      savedToBookmarks: 'Udah di-Bookmark',
      bookmarkThisChapter: 'Simpan ke Bookmark',
      onThisPage: 'Daftar Isi',
      noSubheadings: 'Nggak ada sub-bagian',
      backToTop: 'Balik ke atas',
      textSize: 'Ukuran Teks',
      shareLink: 'Copy Link',
      copied: 'Link Dicopy!',
      saved: 'Tersimpan',
      bookmark: 'Bookmark',
      minRead: 'menit baca',
      words: 'kata',
    },
    sidebar: {
      tableOfContents: 'Daftar Isi',
      expand: 'Buka Semua',
      collapse: 'Tutup Semua',
      filterPlaceholder: 'Cari konsep, framework, bab...',
      matchingChapters: 'bab cocok',
      clear: 'Reset',
      noChaptersFound: 'Nggak ada bab yang cocok',
      noResultsMatching: 'Nggak nemu hasil pencarian untuk',
      clearSearch: 'Reset Pencarian',
      authorBadge: 'Penulis',
      yourBelovedPm: 'Your beloved PM',
    },
    search: {
      searchPlaceholder: 'Cari topik, framework, atau bab apa aja...',
      filterLabel: 'Filter Modul:',
      allModules: 'Semua Modul',
      noPlaybooksFound: 'Nggak ada materi yang cocok di filter ini',
      noPlaybooksSuggestion:
        'Coba ganti filter modul atau ketik kata kunci lain.',
      navigateTip: 'Geser',
      selectTip: 'Buka',
      closeTip: 'Tutup',
      indexedCount: '47 Bab Terindeks',
      sectionTag: 'Bagian',
      jump: 'Buka',
    },
    bookmarks: {
      title: 'Bookmark Kamu',
      savedCount: 'bab tersimpan',
      noBookmarksYet: 'Belum ada bookmark',
      noBookmarksSub:
        'Klik ikon bookmark di bab mana aja biar gampang kamu baca lagi nanti.',
      readChapter: 'Baca bab ini',
      clearAll: 'Hapus Semua',
      storedLocally: 'Tersimpan aman di browser kamu',
    },
    footer: {
      compendiumBanner: 'PLAYBOOK & PANDUAN NYATA PRODUCT MANAGER',
      playbooksCount: 'BAB MATERI',
      modulesCount: 'MODUL',
      hoursTotal: 'JAM BACA TOTAL',
      manifesto:
        'Disarikan langsung dari asam garam dunia produk, politik kantor, jatuh bangun rilis fitur, dan seni nge-build produk dari nol. Semuanya daging, tanpa teori bertele-tele.',
      shortcutTip: 'Tips:',
      shortcutPress: 'di mana aja buat cari topik instan.',
      corePlaybooks: 'Playbook Inti',
      advancedPractice: 'Lanjutan & Praktik',
      quickActions: 'Aksi Cepat',
      startFromBeginning: 'Mulai Baca Dari Bab Pertama',
      backToTop: 'Balik ke Atas',
      authorPrefix: 'Penulis: ',
    },
    notFound: {
      badge: 'Error 404',
      title: 'HALAMAN NGGAK DITEMUKAN',
      description: 'Halaman atau bab yang kamu cari nggak ada di sini.',
      backHome: 'Balik ke Home',
      searchAll: 'Cari Topik (⌘K)',
    },
  },
};
