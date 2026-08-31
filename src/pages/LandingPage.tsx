import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Search,
  ArrowRight,
  Flame,
  Zap,
  Compass,
  Wrench,
  MessageSquareText,
  Brain,
  Building2,
  AlertTriangle,
  CheckSquare,
  Sparkles,
  Clock,
} from 'lucide-react';
import { getPlaybooksData } from '../data/playbooks';
import { useLanguage } from '../context/AppContext';

interface LandingPageProps {
  onOpenSearch: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  CheckSquare: <CheckSquare className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenSearch }) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [selectedPathway, setSelectedPathway] = useState('transition');
  const [moduleCategoryFilter, setModuleCategoryFilter] = useState<'all' | 'core' | 'scale' | 'practice'>('all');

  const { modules, allDocs, totalModules, totalChapters } = useMemo(
    () => getPlaybooksData(language),
    [language]
  );

  // Smoothly scroll to section when redirected with a hash or scroll to top for home
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // Reality Matrix localized (modern & conversational)
  const realityMatrix = useMemo(() => [
    {
      id: 'ceo-myth',
      tag: language === 'id' ? 'Realita Peran' : 'Role Reality',
      tagColor: 'bg-neo-yellow',
      myth: language === 'id'
        ? "Kamu dikira 'CEO produk' yang bisa nyuruh-nyuruh semua tim sesuka hati."
        : "You're the 'CEO of the product' and everyone executes your master plan.",
      reality: language === 'id'
        ? "Kamu megang 100% tanggung jawab hasil akhir, tapi punya 0% bawahan langsung. Modal utamamu cuma trust tim, kejelasan arah, dan skill memengaruhi orang."
        : "You own 100% of the outcome with exactly 0% direct authority. Your real leverage comes from building trust, clear framing, and influence.",
      docSlug: '1-1-why-product-management-is-not-for-everyone',
      docTitle: language === 'id' ? 'Bab 1.1 — Kenapa Jadi PM Nggak Cocok Buat Semua Orang' : 'Ch 1.1 — Why PM is Not For Everyone',
    },
    {
      id: 'prioritization-myth',
      tag: language === 'id' ? 'Prioritisasi' : 'Prioritization',
      tagColor: 'bg-neo-pink',
      myth: language === 'id'
        ? "Spreadsheet rumus RICE yang ribet bakal otomatis nentuin apa yang harus dibikin."
        : "A complex RICE formula spreadsheet will make roadmap prioritization easy.",
      reality: language === 'id'
        ? "Rumus angka sering cuma jadi pelarian. Prioritisasi itu seni berani nolak 9 dari 10 ide bagus pake alasan yang kuat dan masuk akal."
        : "Formulas are comfort blankets. Real prioritization is having the courage to say 'No' to 9 great ideas with conviction so the team can ship the 1 that moves the needle.",
      docSlug: '2-3-prioritization-the-art-of-saying-no',
      docTitle: language === 'id' ? 'Bab 2.3 — Seni Berani Berkata Tidak' : 'Ch 2.3 — The Art of Saying No',
    },
    {
      id: 'research-myth',
      tag: language === 'id' ? 'Discovery User' : 'Customer Discovery',
      tagColor: 'bg-neo-cyan',
      myth: language === 'id'
        ? "Discovery user itu sesimpel nanya ke user mereka pengen dibikinin fitur apa."
        : "Customer discovery is asking users what features they want built.",
      reality: language === 'id'
        ? "User itu jago banget nyeritain masalah hariannya, tapi bukan perancang solusi. Tugasmu adalah ngulik dan mahamin problem space sedalam mungkin."
        : "Users are experts in their daily pain, but terrible solution designers. Your job is obsessing over the problem space, not taking feature orders.",
      docSlug: '2-1-discovery-and-problem-space-mastery',
      docTitle: language === 'id' ? 'Bab 2.1 — Discovery & Nemu Masalah Asli' : 'Ch 2.1 — Problem Space Mastery',
    },
    {
      id: 'engineering-myth',
      tag: language === 'id' ? 'Kerja Bareng Engineer' : 'Engineering Alignment',
      tagColor: 'bg-neo-lime',
      myth: language === 'id'
        ? "Ngempar dokumen PRD tebel 40 halaman ke engineer adalah cara kerja PM profesional."
        : "Throwing a 40-page PRD over the fence is how features get delivered.",
      reality: language === 'id'
        ? "Engineer nggak butuh baca novel. Mereka respek sama PM yang ngerti batasan teknis dan ngajak mereka diskusi dari awal soal 'Why'-nya."
        : "Engineers don't read novels. They respect PMs who understand technical trade-offs and loop them in early on the 'Why'.",
      docSlug: '3-4-collaborating-with-engineering',
      docTitle: language === 'id' ? 'Bab 3.4 — Kolaborasi Bareng Tim Engineering' : 'Ch 3.4 — Collaborating with Engineering',
    },
  ], [language]);

  // Pathways localized (modern & conversational)
  const learningPathways = useMemo(() => [
    {
      id: 'transition',
      title: language === 'id' ? 'Fondasi & Skill Wajib PM' : 'Foundational PM Craft',
      target: language === 'id' ? 'Buat yang Baru Mulai / Associate PM' : 'For Aspiring PMs & Associate PMs',
      badge: language === 'id' ? 'Level 1: Fondasi' : 'Track 1: Fundamentals',
      badgeColor: 'bg-neo-yellow',
      description: language === 'id'
        ? 'Bongkar mitos peran PM, pahami ritme kerja harian, kuasai teknik discovery masalah user, dan jalani 90 hari pertamamu dengan percaya diri.'
        : 'Deconstruct illusions, understand true role anatomy, master problem-space discovery, and nail your first 90 days on the job.',
      estimatedHours: '2.5 hrs',
      docSlugs: [
        '1-1-why-product-management-is-not-for-everyone',
        '1-2-anatomy-of-the-product-manager-role',
        '2-1-discovery-and-problem-space-mastery',
        '8-1-first-90-days-as-a-new-pm',
      ],
    },
    {
      id: 'hard-skills',
      title: language === 'id' ? 'Strategi & Eksekusi Produk' : 'Strategy & Hard Skills Mastery',
      target: language === 'id' ? 'Buat Mid-Level Product Manager' : 'For Mid-Level Product Managers',
      badge: language === 'id' ? 'Level 2: Toolkit' : 'Track 2: Toolkits',
      badgeColor: 'bg-neo-cyan',
      description: language === 'id'
        ? 'Kuasai prioritisasi berkeyakinan tinggi, framework validasi PMF, roadmapping berbasis outcome, dan delivery sprint yang terprediksi.'
        : 'Master high-conviction prioritization, PMF validation signals, outcome-driven roadmaps, and predictable delivery cadence.',
      estimatedHours: '3.0 hrs',
      docSlugs: [
        '2-2-product-strategy-and-vision',
        '2-3-prioritization-the-art-of-saying-no',
        '2-5-metrics-analytics-and-data-literacy',
        '2-7-product-market-fit',
      ],
    },
    {
      id: 'politics',
      title: language === 'id' ? 'Pengaruh & Politik Kantor' : 'Influence & Stakeholder Politics',
      target: language === 'id' ? 'Buat Senior PM & Product Lead' : 'For Senior PMs & Product Leads',
      badge: language === 'id' ? 'Level 3: Influence' : 'Track 3: Influence',
      badgeColor: 'bg-neo-pink',
      description: language === 'id'
        ? 'Navigasi dinamika politik kantor, bangun modal kepercayaan lintas divisi, dan pimpin tim solid tanpa perlu modal pangkat jabatan.'
        : 'Cut through corporate politics, build cross-functional trust, lead without authority, and manage high-stakes executive pushback.',
      estimatedHours: '2.5 hrs',
      docSlugs: [
        '3-1-communication-and-storytelling',
        '3-2-stakeholder-management-navigating-organizational-politics',
        '3-3-influence-without-authority',
        '7-2-office-politics-and-toxic-environments',
      ],
    },
    {
      id: 'environments',
      title: language === 'id' ? 'Startup vs Korporat & Skala' : 'Startup vs. Enterprise Scaling',
      target: language === 'id' ? 'Buat PM yang Menavigasi Skala' : 'For PMs Scaling Across Domains',
      badge: language === 'id' ? 'Level 4: Konteks' : 'Track 4: Contexts',
      badgeColor: 'bg-neo-purple',
      description: language === 'id'
        ? 'Hadapi fase serba gerilya di startup pre-PMF, birokrasi enterprise, perbedaan produk B2B vs B2C, hingga strategi ekosistem platform.'
        : 'Navigate chaotic pre-PMF startups, enterprise red tape, B2B vs B2C nuances, and platform ecosystem growth.',
      estimatedHours: '3.5 hrs',
      docSlugs: [
        '5-1-pm-in-early-stage-startups-pre-pmf',
        '5-3-pm-in-enterprise-and-corporate-environments',
        '5-4-pm-for-b2b-vs-b2c-vs-b2b2c',
        '6-1-platform-strategy-and-ecosystems',
      ],
    },
  ], [language]);

  // Tactical Frameworks localized
  const tacticalFrameworks = useMemo(() => [
    {
      category: language === 'id' ? 'Discovery & Visi' : 'Discovery & Vision',
      icon: <Compass className="w-4 h-4 text-neo-pink" />,
      items: [
        { name: language === 'id' ? 'Problem vs Solution Space' : 'Problem vs Solution Space', chapter: 'Ch 2.1', slug: '2-1-discovery-and-problem-space-mastery' },
        { name: language === 'id' ? 'Kernel Strategi & Visi' : 'Strategy Kernel & Vision', chapter: 'Ch 2.2', slug: '2-2-product-strategy-and-vision' },
        { name: language === 'id' ? 'Sinyal Validasi PMF' : 'Validating PMF Signals', chapter: 'Ch 2.7', slug: '2-7-product-market-fit' },
      ],
    },
    {
      category: language === 'id' ? 'Prioritisasi & Data' : 'Prioritization & Data',
      icon: <Wrench className="w-4 h-4 text-neo-cyan" />,
      items: [
        { name: language === 'id' ? 'Seni Berani Berkata Tidak' : 'The Art of Saying No', chapter: 'Ch 2.3', slug: '2-3-prioritization-the-art-of-saying-no' },
        { name: language === 'id' ? 'Roadmap Berbasis Outcome' : 'Outcome-Based Roadmaps', chapter: 'Ch 2.4', slug: '2-4-roadmapping-and-planning' },
        { name: language === 'id' ? 'North Star & Input Metrics' : 'North Star & Input Metrics', chapter: 'Ch 2.5', slug: '2-5-metrics-analytics-and-data-literacy' },
      ],
    },
    {
      category: language === 'id' ? 'Pengaruh & Komunikasi' : 'Influence & Politics',
      icon: <MessageSquareText className="w-4 h-4 text-neo-yellow" />,
      items: [
        { name: language === 'id' ? 'Executive Storytelling' : 'Executive Storytelling', chapter: 'Ch 3.1', slug: '3-1-communication-and-storytelling' },
        { name: language === 'id' ? 'Matriks Politik Stakeholder' : 'Stakeholder Politics Matrix', chapter: 'Ch 3.2', slug: '3-2-stakeholder-management-navigating-organizational-politics' },
        { name: language === 'id' ? 'Memimpin Tanpa Otoritas' : 'Leading Without Authority', chapter: 'Ch 3.3', slug: '3-3-influence-without-authority' },
      ],
    },
    {
      category: language === 'id' ? 'Praktek & Survival' : 'Survival & Playbooks',
      icon: <AlertTriangle className="w-4 h-4 text-neo-green" />,
      items: [
        { name: language === 'id' ? 'Cetak Biru 90 Hari Pertama' : 'First 90 Days Blueprint', chapter: 'Ch 8.1', slug: '8-1-first-90-days-as-a-new-pm' },
        { name: language === 'id' ? 'Kolaborasi Engineering' : 'Engineering Alignment', chapter: 'Ch 3.4', slug: '3-4-collaborating-with-engineering' },
        { name: language === 'id' ? 'Ritual & Irama Produk' : 'Product Rituals & Cadence', chapter: 'Ch 8.2', slug: '8-2-running-effective-product-rituals' },
      ],
    },
  ], [language]);

  const activePathway = learningPathways.find((p) => p.id === selectedPathway) || learningPathways[0];

  const filteredCurriculumModules = modules.filter((mod) => {
    if (moduleCategoryFilter === 'core') return mod.id >= 1 && mod.id <= 4;
    if (moduleCategoryFilter === 'scale') return mod.id === 5 || mod.id === 6;
    if (moduleCategoryFilter === 'practice') return mod.id >= 7 && mod.id <= 9;
    return true;
  });

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b-3 border-black bg-neo-bg dark:bg-neo-darkBg overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-neo-yellow border-3 border-black rotate-12 opacity-40 pointer-events-none hidden md:block" />
        <div className="absolute top-1/2 -left-12 w-36 h-36 bg-neo-pink border-3 border-black -rotate-6 opacity-30 pointer-events-none hidden md:block" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neo-yellow text-black border-2 border-black shadow-neo-sm font-mono font-bold text-xs sm:text-sm uppercase tracking-wider mb-6 animate-bounce duration-1000">
            <Flame className="w-4 h-4 fill-black" />
            <span>{t.landing.heroBadge}</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-neutral-900 dark:text-white leading-[1.02] mb-6">
            {t.landing.heroTitlePre} <br />
            <span className="bg-neo-yellow px-3 py-0.5 border-3 border-black text-black inline-block shadow-neo rotate-[-1deg] my-1">
              {t.landing.heroTitleHighlight}
            </span> <br />
            {t.landing.heroTitlePost}
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-200 leading-relaxed mb-10">
            {t.landing.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            {/* Start Reading Button */}
            <Link
              to="/docs/1-1-why-product-management-is-not-for-everyone"
              className="w-full sm:w-auto inline-flex items-center justify-center font-display font-black text-base py-3.5 px-8 bg-neo-yellow text-black border-2 border-black shadow-neo hover:bg-black hover:text-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[4px_4px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all select-none group"
            >
              <BookOpen className="w-5 h-5 text-current" />
              <span>{t.landing.startReading}</span>
              <ArrowRight className="w-4 h-4 text-current group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Search Topics Button */}
            <button
              onClick={onOpenSearch}
              className="w-full sm:w-auto inline-flex items-center justify-center font-display font-black text-base py-3.5 px-6 bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white border-2 border-black dark:border-white/30 shadow-neo hover:bg-neo-yellow hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[4px_4px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none group"
            >
              <Search className="w-5 h-5 text-current" />
              <span>{t.landing.searchTopics}</span>
              <kbd className="px-2 py-0.5 bg-neo-yellow text-black border border-black font-mono font-bold text-xs group-hover:bg-black group-hover:text-neo-yellow dark:group-hover:bg-neo-yellow dark:group-hover:text-black">
                ⌘K
              </kbd>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-neo-pink">
                {totalModules}
              </div>
              <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-1">
                {t.landing.statsModules}
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-neo-yellow">
                {totalChapters}
              </div>
              <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-1">
                {t.landing.statsChapters}
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-neo-cyan">
                89k+
              </div>
              <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-1">
                {t.landing.statsWords}
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo text-center">
              <div className="font-display font-black text-3xl sm:text-4xl text-neo-green">
                100%
              </div>
              <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-1">
                {t.landing.statsPractical}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reality Matrix */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-black bg-white dark:bg-neo-darkSurface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-neo-pink text-black border-2 border-black shadow-neo-sm font-bold text-xs uppercase tracking-wider mb-2">
              {t.landing.realityMatrixBadge}
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 dark:text-white">
              {t.landing.realityMatrixTitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto mt-2">
              {t.landing.realityMatrixSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realityMatrix.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-neo-bg dark:bg-neo-darkBg border-3 border-black shadow-neo flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 border border-black ${item.tagColor} text-black`}>
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                      {t.landing.debunked}
                    </span>
                  </div>

                  <div className="mb-4 p-3.5 bg-red-50 dark:bg-red-950/30 border-2 border-neo-red text-xs">
                    <div className="font-bold text-neo-red uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span>{t.landing.fantasyLabel}</span>
                    </div>
                    <p className="text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
                      "{item.myth}"
                    </p>
                  </div>

                  <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 border-2 border-neo-green text-xs">
                    <div className="font-bold text-emerald-800 dark:text-neo-green uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span>{t.landing.realityLabel}</span>
                    </div>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400 truncate">
                    {item.docTitle}
                  </span>
                  <Link
                    to={`/docs/${item.docSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 dark:text-white hover:text-neo-blue dark:hover:text-neo-cyan hover:underline flex-shrink-0"
                  >
                    <span>{t.landing.readDeepDive}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Progressive Pathways */}
      <section id="learning-tracks" className="py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-black bg-neo-bg dark:bg-neo-darkBg scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 bg-neo-cyan text-black border-2 border-black shadow-neo-sm font-bold text-xs uppercase tracking-wider mb-2">
              {t.landing.pathwaysBadge}
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 dark:text-white">
              {t.landing.pathwaysTitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto mt-2">
              {t.landing.pathwaysSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {learningPathways.map((pathway) => (
              <button
                key={pathway.id}
                onClick={() => setSelectedPathway(pathway.id)}
                className={`px-4 py-2.5 border-2 font-display font-bold text-xs sm:text-sm transition-all cursor-pointer select-none ${
                  selectedPathway === pathway.id
                    ? `${pathway.badgeColor} text-black border-black shadow-neo -translate-x-0.5 -translate-y-0.5 font-black`
                    : 'bg-white text-neutral-900 border-black shadow-neo-sm hover:bg-neo-yellow hover:text-black hover:border-black hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 dark:bg-neo-darkSurface dark:text-neutral-200 dark:border-white/30 dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600]'
                }`}
              >
                {pathway.title}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-black dark:border-white/20">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-bold px-2.5 py-0.5 border border-black ${activePathway.badgeColor} text-black`}>
                    {activePathway.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
                    {activePathway.target}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-900 dark:text-white">
                  {activePathway.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 max-w-2xl">
                  {activePathway.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1.5 bg-neo-bg dark:bg-neo-darkBg text-neutral-800 dark:text-neutral-200 border-2 border-black flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neo-pink" />
                  {activePathway.estimatedHours} {t.landing.total}
                </span>
                <Link
                  to={`/docs/${activePathway.docSlugs[0]}`}
                  className="inline-flex items-center justify-center font-display font-bold text-xs py-2 px-4 bg-neo-yellow text-black border-2 border-black shadow-neo-sm hover:bg-black hover:text-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer select-none"
                >
                  <span>{t.landing.startPathway}</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activePathway.docSlugs.map((slug, idx) => {
                const doc = allDocs.find((d) => d.docSlug === slug);
                if (!doc) return null;

                return (
                  <Link
                    key={doc.id}
                    to={`/docs/${doc.docSlug}`}
                    className="p-4 bg-neo-bg dark:bg-neo-darkBg border-2 border-black shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="flex flex-col items-center">
                      <span className="w-6 h-6 rounded-full bg-black text-neo-yellow text-xs font-mono font-black flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 mt-1">
                        Ch {doc.chapterNumber}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white group-hover:text-neo-blue dark:group-hover:text-neo-cyan transition-colors leading-snug truncate">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-1 mt-1">
                        {doc.summary}
                      </p>
                      <div className="mt-2 text-[10px] font-mono text-neutral-500 flex items-center gap-2">
                        <span>{doc.readingTime}</span>
                        <span>•</span>
                        <span>{doc.moduleShortTitle}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-900 dark:text-neutral-100 flex-shrink-0 group-hover:translate-x-1 transition-transform self-center" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tactical Frameworks Index */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-black bg-white dark:bg-neo-darkSurface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-neo-lime text-black border-2 border-black shadow-neo-sm font-bold text-xs uppercase tracking-wider mb-2">
              {t.landing.frameworksBadge}
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 dark:text-white">
              {t.landing.frameworksTitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto mt-2">
              {t.landing.frameworksSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tacticalFrameworks.map((group, idx) => (
              <div
                key={idx}
                className="p-5 bg-neo-bg dark:bg-neo-darkBg border-2 border-black shadow-neo flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b-2 border-black dark:border-white/20">
                    <div className="p-1.5 bg-white dark:bg-neo-darkSurface border border-black shadow-neo-sm">
                      {group.icon}
                    </div>
                    <h3 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          to={`/docs/${item.slug}`}
                          className="group block p-2 bg-white dark:bg-neo-darkSurface border border-black hover:border-black shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                        >
                          <div className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-neo-blue dark:group-hover:text-neo-cyan transition-colors leading-snug">
                            {item.name}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 mt-1 flex items-center justify-between">
                            <span>{item.chapter}</span>
                            <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Complete Curriculum with Interactive Category Pills */}
      <section id="modules-section" className="py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-black bg-neo-bg dark:bg-neo-darkBg scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 bg-neo-yellow text-black border-2 border-black shadow-neo-sm font-bold text-xs uppercase tracking-wider mb-2">
              {t.landing.curriculumBadge}
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-900 dark:text-white">
              {t.landing.curriculumTitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mt-2">
              {t.landing.curriculumSubtitle}
            </p>

            {/* Category Filter Pills (Ultra-Responsive Light & Dark Hover) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: 'all', label: t.landing.filterAll },
                { id: 'core', label: t.landing.filterCore },
                { id: 'scale', label: t.landing.filterScale },
                { id: 'practice', label: t.landing.filterPractice },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setModuleCategoryFilter(pill.id as any)}
                  className={`px-3.5 py-2 text-xs font-bold border-2 transition-all cursor-pointer select-none ${
                    moduleCategoryFilter === pill.id
                      ? 'bg-neo-yellow text-black border-black shadow-neo font-black -translate-x-0.5 -translate-y-0.5'
                      : 'bg-white text-neutral-900 border-black shadow-neo-sm hover:bg-neo-yellow hover:text-black hover:border-black hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 dark:bg-neo-darkSurface dark:text-neutral-200 dark:border-white/30 dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600]'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCurriculumModules.map((mod) => (
              <div
                key={mod.id}
                className="p-6 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo flex flex-col justify-between hover:shadow-neo-lg hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 border-2 border-black ${mod.badgeColor} text-black shadow-neo-sm`}>
                      {ICON_MAP[mod.icon] || <BookOpen className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono font-black px-2 py-1 bg-black text-white">
                      {language === 'id' ? 'MODUL' : 'MODULE'} {mod.id}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl mb-2 text-neutral-900 dark:text-white leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="space-y-1.5 mb-6 pt-3 border-t-2 border-black/10 dark:border-white/10">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      {t.landing.includedChapters}
                    </div>
                    {mod.docs.slice(0, 3).map((d) => (
                      <Link
                        key={d.id}
                        to={`/docs/${d.docSlug}`}
                        className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neo-blue dark:hover:text-neo-cyan truncate group/link"
                      >
                        <span className="font-mono font-bold mr-1 text-neutral-500 dark:text-neutral-400">
                          {d.chapterNumber}
                        </span>
                        <span className="group-hover/link:underline">{d.title}</span>
                      </Link>
                    ))}
                    {mod.docs.length > 3 && (
                      <span className="block text-[11px] font-bold text-neutral-500 dark:text-neutral-400 italic">
                        + {mod.docs.length - 3} {t.landing.moreChapters}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-black flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400">
                    {mod.docs.length} {language === 'id' ? 'bab' : 'chapters'} • {Math.round(mod.totalWords / 200)}m
                  </span>
                  <Link
                    to={`/docs/${mod.docs[0]?.docSlug}`}
                    className={`px-3 py-1.5 text-xs font-bold border-2 border-black ${mod.badgeColor} text-black shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1 cursor-pointer`}
                  >
                    <span className="text-black font-extrabold">{t.landing.explore}</span>
                    <ArrowRight className="w-3 h-3 text-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neo-yellow text-black border-b-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-2 bg-black text-neo-yellow border-2 border-black shadow-neo-sm mb-4">
            <Sparkles className="w-6 h-6 text-neo-yellow" />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-4 text-black">
            {t.landing.bottomCtaTitle}
          </h2>
          <p className="text-base sm:text-lg font-medium text-black max-w-2xl mx-auto mb-8">
            {t.landing.bottomCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/docs/1-1-why-product-management-is-not-for-everyone"
              className="bottom-cta-btn-primary"
            >
              {t.landing.bottomCtaStart}
            </Link>
            <button
              onClick={onOpenSearch}
              className="bottom-cta-btn-secondary"
            >
              {t.landing.bottomCtaSearch}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
