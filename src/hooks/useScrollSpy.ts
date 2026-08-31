import { useState, useEffect } from 'react';

export function useScrollSpy(headingIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!headingIds || headingIds.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentActive = '';

      for (const id of headingIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (top - offset <= scrollY) {
            currentActive = id;
          }
        }
      }

      if (currentActive) {
        setActiveId(currentActive);
      } else if (headingIds.length > 0) {
        setActiveId(headingIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headingIds, offset]);

  return activeId;
}
