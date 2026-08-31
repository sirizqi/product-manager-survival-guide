export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FFFDF5',
          darkBg: '#121316',
          surface: '#FFFFFF',
          darkSurface: '#1C1D22',
          yellow: '#FFE600',
          pink: '#FF5C93',
          purple: '#A78BFA',
          cyan: '#38BDF8',
          green: '#4ADE80',
          lime: '#CCFF00',
          orange: '#FF8A00',
          blue: '#3B82F6',
          red: '#EF4444',
          muted: '#E8E5DD',
          darkMuted: '#2B2D35',
          black: '#000000',
        }
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo': '4px 4px 0px 0px #000000',
        'neo-md': '6px 6px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
        'neo-xl': '12px 12px 0px 0px #000000',
        'neo-white-sm': '2px 2px 0px 0px #FFFFFF',
        'neo-white': '4px 4px 0px 0px #FFFFFF',
        'neo-white-md': '6px 6px 0px 0px #FFFFFF',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
