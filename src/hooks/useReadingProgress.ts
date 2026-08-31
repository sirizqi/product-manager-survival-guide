import { useApp } from '../context/AppContext';

export function useReadingProgress() {
  const { completedDocs, toggleCompleted, isCompleted, totalCompleted } = useApp();
  return { completedDocs, toggleCompleted, isCompleted, totalCompleted };
}
