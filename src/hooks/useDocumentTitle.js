import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} — TripNest Travel` : 'TripNest — Discover & Book Unforgettable Journeys';

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;
