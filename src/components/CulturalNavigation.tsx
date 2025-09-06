import React from 'react';
import { Home, BookOpen, FileText, User, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CulturalNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CulturalNavigation: React.FC<CulturalNavigationProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'lectures', label: t('lectures'), icon: BookOpen },
    { id: 'assignments', label: t('assignments'), icon: FileText },
    { id: 'support', label: t('callSupport'), icon: Phone },
    { id: 'profile', label: t('profile'), icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 z-50 shadow-lg">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 rounded-xl transition-all duration-200 ${
              activeTab === id
                ? 'text-orange-500 bg-orange-50 dark:bg-orange-950 scale-105'
                : 'text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-105'
            }`}
          >
            <Icon size={22} className="mb-1" />
            <span className="text-xs font-medium truncate max-w-full">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CulturalNavigation;