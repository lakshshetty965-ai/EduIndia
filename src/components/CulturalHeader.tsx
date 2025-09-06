import React from 'react';
import { Moon, Sun, Phone, Wifi, WifiOff } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface CulturalHeaderProps {
  isOnline: boolean;
}

const CulturalHeader: React.FC<CulturalHeaderProps> = ({ isOnline }) => {
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
    { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
    { code: 'raj', name: 'राजस्थानी', flag: '🏛️' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-sm">
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white dark:text-black text-sm font-bold">E</span>
            </div>
            <div className='hidden sm:block'>
              <h1 className="text-lg font-semibold text-black dark:text-white">{t('appName')}</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('culturalGreeting')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Connection Status */}
            <div className="flex items-center">
              {isOnline ? (
                <Wifi size={16} className="text-green-500" />
              ) : (
                <WifiOff size={16} className="text-red-500" />
              )}
            </div>

            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs rounded-lg px-3 py-2 border-none outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-white dark:bg-gray-800">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              {isDark ? (
                <Sun size={16} className="text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon size={16} className="text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Call Support */}
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105">
              <Phone size={16} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="mt-2 flex items-center justify-center">
          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <span>•</span>
            <span>{t('tollFreeNumber')}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CulturalHeader;