import React, { useState } from 'react';
import { Phone, Clock, Users, PhoneCall } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type SupportHour = {
  day: string;
  time: string;
  timeHi: string;
  timeRaj: string;
};

type CommonIssue = {
  id: string;
  title: string;
  titleHi: string;
  titleRaj: string;
  description: string;
  descriptionHi: string;
  descriptionRaj: string;
};

const CallSupportPage: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const { t, language } = useLanguage();

  const supportHours:SupportHour[] = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', timeHi: 'सुबह 9:00 - शाम 6:00', timeRaj: 'सुबह 9:00 - सांझ 6:00' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM', timeHi: 'सुबह 10:00 - शाम 4:00', timeRaj: 'सुबह 10:00 - सांझ 4:00' },
    { day: 'Sunday', time: 'Closed', timeHi: 'बंद', timeRaj: 'बंद' },
  ];

  const commonIssues:CommonIssue[] = [
    {
      id: 'video',
      title: 'Video Problems',
      titleHi: 'वीडियो की समस्या',
      titleRaj: 'वीडियो री समस्या',
      description: 'Videos not loading or buffering issues',
      descriptionHi: 'वीडियो लोड नहीं हो रहे या बफरिंग की समस्या',
      descriptionRaj: 'वीडियो लोड नहीं हो रहे या बफरिंग री समस्या'
    },
    {
      id: 'assignment',
      title: 'Assignment Upload',
      titleHi: 'असाइनमेंट अपलोड',
      titleRaj: 'काम अपलोड',
      description: 'Cannot upload assignments or photos',
      descriptionHi: 'असाइनमेंट या फोटो अपलोड नहीं कर सकते',
      descriptionRaj: 'काम या फोटो अपलोड नहीं कर सकते'
    },
    {
      id: 'login',
      title: 'Login Issues',
      titleHi: 'लॉगिन की समस्या',
      titleRaj: 'लॉगिन री समस्या',
      description: 'Forgot password or cannot access account',
      descriptionHi: 'पासवर्ड भूल गए या खाता एक्सेस नहीं कर सकते',
      descriptionRaj: 'पासवर्ड भूल गए या खाता एक्सेस नहीं कर सकते'
    },
    {
      id: 'general',
      title: 'General Help',
      titleHi: 'सामान्य सहायता',
      titleRaj: 'सामान्य मदद',
      description: 'Other questions about using the platform',
      descriptionHi: 'प्लेटफॉर्म के उपयोग के बारे में अन्य प्रश्न',
      descriptionRaj: 'प्लेटफॉर्म के इस्तेमाल के बारे में दूसरे सवाल'
    }
  ];

  const getTime = (schedule: SupportHour) => {
    switch (language) {
      case 'hi': return schedule.timeHi;
      case 'raj': return schedule.timeRaj;
      default: return schedule.time;
    }
  };

  const getIssueTitle = (issue: CommonIssue) => {
    switch (language) {
      case 'hi': return issue.titleHi;
      case 'raj': return issue.titleRaj;
      default: return issue.title;
    }
  };

  const getIssueDescription = (issue: CommonIssue) => {
    switch (language) {
      case 'hi': return issue.descriptionHi;
      case 'raj': return issue.descriptionRaj;
      default: return issue.description;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Main Call Support Card */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone size={32} />
        </div>
        <h2 className="text-xl font-bold mb-2">{t('callSupport')}</h2>
        <p className="text-gray-300 dark:text-gray-700 mb-4">Free support in Hindi, Rajasthani & English</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
          <p className="text-2xl font-bold">1800-123-4567</p>
          <p className="text-sm text-gray-300 dark:text-gray-700">Toll-Free Number</p>
        </div>
        <a 
          href="tel:+918001234567"
          className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors flex items-center mx-auto"
        >
          <PhoneCall className="mr-2" size={20} />
          Call Now
        </a>
      </div>

      {/* Support Hours */}
      <div className="bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Clock className="mr-2" size={20} />
          Support Hours
        </h3>
        <div className="space-y-3">
          {supportHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span className="font-medium text-black dark:text-white">{schedule.day}</span>
              <span className="text-gray-600 dark:text-gray-400">{getTime(schedule)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Issue Selection */}
      <div className="bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
          What do you need help with?
        </h3>
        <div className="space-y-3">
          {commonIssues.map((issue) => (
            <button
              key={issue.id}
              onClick={() => setSelectedIssue(issue.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedIssue === issue.id
                  ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              <h4 className="font-medium text-black dark:text-white mb-1">
                {getIssueTitle(issue)}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {getIssueDescription(issue)}
              </p>
            </button>
          ))}
        </div>

        {selectedIssue && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <p className="text-sm text-black dark:text-white mb-3">
              When you call, mention: "{selectedIssue.toUpperCase()}" to get faster help
            </p>
            <a 
              href="tel:+918001234567"
              className="block w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-center"
            >
              Call About This Issue
            </a>
          </div>
        )}
      </div>

      {/* Language Support */}
      <div className="bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center">
          <Users className="mr-2" size={20} />
          Language Support
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <span className="text-2xl mb-2 block">🇬🇧</span>
            <p className="font-medium text-black dark:text-white">English</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Available</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <span className="text-2xl mb-2 block">🇮🇳</span>
            <p className="font-medium text-black dark:text-white">हिंदी</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">उपलब्ध</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <span className="text-2xl mb-2 block">🏛️</span>
            <p className="font-medium text-black dark:text-white">राजस्थानी</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">उपलब्ध</p>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-4">
        <div className="flex items-center mb-2">
          <Phone className="text-red-600 mr-2" size={18} />
          <h3 className="font-semibold text-red-800 dark:text-red-200">Emergency Technical Support</h3>
        </div>
        <p className="text-sm text-red-700 dark:text-red-300 mb-3">
          For urgent technical issues during exams or important deadlines
        </p>
        <a 
          href="tel:+918001234568"
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors inline-block"
        >
          Emergency Call: 1800-URGENT-1
        </a>
      </div>
    </div>
  );
};

export default CallSupportPage;