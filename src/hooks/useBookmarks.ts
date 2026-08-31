import { useApp } from '../context/AppContext';

export function useBookmarks() {
  const { bookmarks, toggleBookmark, isBookmarked } = useApp();
  return { bookmarks, toggleBookmark, isBookmarked };
}
