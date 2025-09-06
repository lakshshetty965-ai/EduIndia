import React, { useState } from 'react';
import { Download, Phone, ChevronRight, ChevronLeft, Volume2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowToUsePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { t, language } = useLanguage();

  const tutorialSteps = [
    {
      id: 1,
      title: 'Welcome to EduRajasthan',
      titleHi: 'एडुराजस्थान में आपका स्वागत है',
      titleRaj: 'एडुराजस्थान में खम्मा घणी',
      description: 'Learn from anywhere, anytime with our mobile-friendly platform',
      descriptionHi: 'हमारे मोबाइल-फ्रेंडली प्लेटफॉर्म के साथ कहीं भी, कभी भी सीखें',
      descriptionRaj: 'म्हारे मोबाइल-फ्रेंडली प्लेटफॉर्म के साथ कठै भी, कदै भी सीखो',
      icon: '🏛️',
      visual: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Watch Lectures',
      titleHi: 'व्याख्यान देखें',
      titleRaj: 'पाठ देखो',
      description: 'Tap on any lecture to start learning. Videos work even on slow internet.',
      descriptionHi: 'सीखना शुरू करने के लिए किसी भी व्याख्यान पर टैप करें। धीमे इंटरनेट पर भी वीडियो काम करते हैं।',
      descriptionRaj: 'सीखना शुरू करने के लिए कोई भी पाठ पर टैप करो। धीमे इंटरनेट पर भी वीडियो काम करते हैं।',
      icon: '📹',
      visual: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Submit Assignments',
      titleHi: 'असाइनमेंट जमा करें',
      titleRaj: 'काम जमा करो',
      description: 'Take a photo of your work or upload files. AI will check and give feedback.',
      descriptionHi: 'अपने काम की फोटो लें या फाइलें अपलोड करें। AI जांच करेगा और फीडबैक देगा।',
      descriptionRaj: 'आपने काम री फोटो लो या फाइलां अपलोड करो। AI जांच करेगा अर फीडबैक देगा।',
      icon: '📝',
      visual: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Ask AI for Help',
      titleHi: 'AI से मदद मांगें',
      titleRaj: 'AI सूं मदद मांगो',
      description: 'Use the chat button to ask questions in your language. AI understands Hindi and Rajasthani.',
      descriptionHi: 'अपनी भाषा में प्रश्न पूछने के लिए चैट बटन का उपयोग करें। AI हिंदी और राजस्थानी समझता है।',
      descriptionRaj: 'आपनी भाषा में सवाल पूछने के लिए चैट बटन रो इस्तेमाल करो। AI हिंदी अर राजस्थानी समझता है।',
      icon: '🤖',
      visual: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Call for Support',
      titleHi: 'सहायता के लिए कॉल करें',
      titleRaj: 'मदद के लिए कॉल करो',
      description: 'Need help? Call our toll-free number. Support available in Hindi and Rajasthani.',
      descriptionHi: 'मदद चाहिए? हमारे टोल-फ्री नंबर पर कॉल करें। हिंदी और राजस्थानी में सहायता उपलब्ध है।',
      descriptionRaj: 'मदद चाहिए? म्हारे टोल-फ्री नंबर पर कॉल करो। हिंदी अर राजस्थानी में मदद मिलेगी।',
      icon: '📞',
      visual: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % tutorialSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + tutorialSteps.length) % tutorialSteps.length);
  };

  const currentTutorial = tutorialSteps[currentStep];
  const getTitle = () => {
    switch (language) {
      case 'hi': return currentTutorial.titleHi;
      case 'raj': return currentTutorial.titleRaj;
      default: return currentTutorial.title;
    }
  };

  const getDescription = () => {
    switch (language) {
      case 'hi': return currentTutorial.descriptionHi;
      case 'raj': return currentTutorial.descriptionRaj;
      default: return currentTutorial.description;
    }
  };

  // Hardcoded audio simulation
  const playAudioInstructions = () => {
    // Simulate audio playback with language-specific message
    const message = language === 'hi' 
      ? `${getTitle()} के लिए ऑडियो निर्देश चला रहे हैं...`
      : language === 'raj'
      ? `${getTitle()} के लिए ऑडियो निर्देश चला रहे हैं...`
      : `Playing audio instructions for: ${getTitle()}`;
    
    alert(message);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Tutorial Header */}
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">{t('howToUse')}</h2>
        <p className="text-gray-300 dark:text-gray-700 text-sm">Step-by-step guide for new users</p>
      </div>

      {/* Main Tutorial Card */}
      <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Visual */}
        <div className="relative">
          <img
            src={currentTutorial.visual}
            alt={getTitle()}
            className="w-full h-48 md:h-72 object-cover"
          />
          <div className="absolute top-4 left-4 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
            <span className="text-2xl">{currentTutorial.icon}</span>
          </div>
          <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-sm font-medium">
            {currentStep + 1} / {tutorialSteps.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            {getTitle()}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
            {getDescription()}
          </p>

          {/* Audio Button for Accessibility */}
          <button 
            onClick={playAudioInstructions}
            className="flex items-center justify-center w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-3 rounded-lg mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Volume2 className="mr-2" size={18} />
            Listen to Instructions (Audio)
          </button>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Previous
            </button>

            <div className="flex space-x-2">
              {tutorialSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep
                      ? 'bg-black dark:bg-white'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Next
              <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Offline Mode Card */}
        <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center mb-3">
            <Download className="text-green-600 mr-2" size={20} />
            <h3 className="font-semibold text-black dark:text-white">{t('offlineMode')}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {t('downloadForOffline')}
          </p>
          <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Learn How
          </button>
        </div>

        {/* Call Support Card */}
        <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center mb-3">
            <Phone className="text-blue-600 mr-2" size={20} />
            <h3 className="font-semibold text-black dark:text-white">{t('callSupport')}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Free support in your language
          </p>
          <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Call Now
          </button>
        </div>
      </div>

      {/* Common Issues */}
      <div className="bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Common Questions</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="font-medium text-black dark:text-white text-sm">Video not loading?</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Try switching to low bandwidth mode or download for offline viewing
            </p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="font-medium text-black dark:text-white text-sm">How to submit assignments?</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Take a clear photo of your work or upload a file from your device
            </p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="font-medium text-black dark:text-white text-sm">Need help in Rajasthani?</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Call our toll-free number for support in your local language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUsePage;