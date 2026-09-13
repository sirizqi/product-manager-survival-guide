import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import {
  Sparkles,
  Smartphone,
  Globe,
  Info,
} from 'lucide-react';
import { useLanguage } from '../context/AppContext';

interface KreateQrWidgetProps {
  className?: string;
  showIframeToggle?: boolean;
}

export const KreateQrWidget: React.FC<KreateQrWidgetProps> = ({
  className = '',
}) => {
  const { language, t } = useLanguage();
  const [svgContent, setSvgContent] = useState<string>('');

  // Generate standard high-contrast black on white QR code for 100% scanner compatibility
  useEffect(() => {
    QRCode.toString('https://kreate.gg/sirizqi', {
      type: 'svg',
      margin: 2,
      color: {
        dark: '#000000', // Crisp black modules
        light: '#FFFFFF', // Solid white background
      },
    })
      .then((svg) => {
        setSvgContent(svg);
      })
      .catch((err) => console.error('Failed to generate QR:', err));
  }, []);

  return (
    <div
      className={`w-full max-w-sm mx-auto p-4 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo-lg text-center space-y-3.5 transition-colors ${className}`}
    >
      {/* Top Card Header */}
      <div className="flex items-center justify-between pb-2.5 border-b-2 border-black dark:border-white/20">
        <div className="flex items-center gap-1.5 font-display font-black text-xs text-neutral-900 dark:text-white uppercase tracking-wider">
          <Smartphone className="w-4 h-4 text-neo-pink" />
          <span>{language === 'id' ? 'QR Link Donasi' : 'Donation QR Link'}</span>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neo-yellow text-black border border-black shadow-neo-sm">
          {t.donation.instantBadge}
        </span>
      </div>

      {/* Distinction Explainer Box */}
      <div className="p-2.5 bg-neo-bg dark:bg-neutral-800/80 border-2 border-black text-left text-xs space-y-1 shadow-neo-sm">
        <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white text-[11px]">
          <Info className="w-3.5 h-3.5 text-neo-blue flex-shrink-0" />
          <span>{t.donation.scanNoticeTitle}</span>
        </div>
        <p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-normal">
          {t.donation.scanNoticeSubtitle}
        </p>
      </div>

      {/* Main QR Display */}
      <div className="space-y-3">
        <div className="relative p-3.5 sm:p-4 bg-neo-bg dark:bg-neutral-900 border-2 border-black dark:border-white/20 shadow-inner flex flex-col items-center justify-center transition-colors">
          {/* Tag Badge */}
          <div className="mb-2.5 px-2.5 py-0.5 bg-neo-yellow text-black border border-black font-display font-black text-xs shadow-neo-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-neo-pink fill-neo-pink" />
            <span>{t.donation.pointCamera}</span>
          </div>

          {/* Standard Black-on-White QR Box */}
          <div className="w-full max-w-[210px] aspect-square flex items-center justify-center p-2 bg-white border-2 border-black shadow-neo">
            {svgContent ? (
              <div
                className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block"
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-400 animate-pulse font-mono text-xs">
                Loading QR...
              </div>
            )}
          </div>

          {/* Step Indicators */}
          <div className="mt-2.5 space-y-1 text-left w-full max-w-[210px] text-[10px] font-mono text-neutral-700 dark:text-neutral-300">
            <div className="flex items-start gap-1.5">
              <span className="font-bold text-neo-pink">1.</span>
              <span>{t.donation.step1}</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="font-bold text-neo-green">2.</span>
              <span>{t.donation.step2}</span>
            </div>
          </div>
        </div>

        {/* Quick Direct Link Button */}
        <a
          href="https://kreate.gg/sirizqi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 bg-white dark:bg-neo-darkSurface border-2 border-black dark:border-white/30 font-display font-bold text-xs text-neutral-900 dark:text-white shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-neo-yellow hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[3px_3px_0px_0px_#FFE600] active:translate-x-0 active:translate-y-0 active:shadow-neo-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{t.donation.openInBrowser}</span>
        </a>
      </div>
    </div>
  );
};
