import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0);
  const { translations } = useLanguage();

  useEffect(() => {
    const hasVisitedToday = localStorage.getItem('visitedToday');
    const today = new Date().toDateString();
    const storedCount = localStorage.getItem('visitorCount');
    
    let currentCount = storedCount ? parseInt(storedCount, 10) : Math.floor(Math.random() * 1000) + 100;
    
    if (!hasVisitedToday || hasVisitedToday !== today) {
      currentCount = currentCount + 1;
      localStorage.setItem('visitorCount', currentCount.toString());
      localStorage.setItem('visitedToday', today);
    }
    
    setCount(currentCount);
  }, []);

  return (
    <div className="flex items-center gap-2 text-base-content/60">
      <Eye className="w-4 h-4" />
      <span className="text-sm font-medium">{count.toLocaleString()} {translations.visitorCounter.visits}</span>
    </div>
  );
}
