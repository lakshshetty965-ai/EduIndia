import React, { useState } from 'react';
import { Download, WifiOff, HardDrive, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SAMPLE_LECTURES } from '../utils/constants';

const OfflineMode: React.FC = () => {
  const [downloadQueue, setDownloadQueue] = useState<string[]>([]);
  const { t, language } = useLanguage();

  // Use sample lectures for offline content
  const availableContent = SAMPLE_LECTURES.map((lecture, index) => ({
    id: lecture.id.toString(),
    title: lecture.title,
    titleHi: lecture.titleHi,
    titleRaj: lecture.titleRaj,
    size: '45 MB',
    duration: lecture.duration,
    downloaded: index === 1, // Second lecture is downloaded
    essential: true
  }));

  const toggleDownload = (contentId: string) => {
    const isAlreadyInQueue = downloadQueue.includes(contentId);
    
    setDownloadQueue(prev => 
      prev.includes(contentId) 
        ? prev.filter(id => id !== contentId)
        : [...prev, contentId]
    );
    
    // Simulate download start
    if (!isAlreadyInQueue) {
      setTimeout(() => {
        alert(language === 'hi' 
          ? 'डाउनलोड शुरू हो गया है। यह बैकग्राउंड में चलेगा।'
          : language === 'raj'
          ? 'डाउनलोड शुरू हो गया है। यो बैकग्राउंड में चलेगा।'
          : 'Download started. It will continue in the background.'
        );
      }, 500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Offline Status Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <WifiOff className="text-orange-500 mr-3" size={24} />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t('offlineMode')}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn without internet connection</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Storage Used</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">156 MB / 500 MB</p>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '31%' }}></div>
        </div>
      </div>

      {/* Download Recommendations */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2">Smart Download Suggestions</h3>
        <p className="text-blue-100 text-sm mb-4">
          Based on your subjects and upcoming classes
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Essential Content Pack</p>
            <p className="text-xs text-blue-100">3 lectures • 115 MB total</p>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Download All
          </button>
        </div>
      </div>

      {/* Available Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <HardDrive className="mr-2" size={20} />
          Available for Download
        </h3>
        <div className="space-y-4">
          {availableContent.map((content) => (
            <div key={content.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {language === 'hi' ? content.titleHi : language === 'raj' ? content.titleRaj : content.title}
                  </h4>
                  {content.essential && (
                    <span className="ml-2 px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-medium rounded">
                      Essential
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span>{content.size}</span>
                  <span>{content.duration}</span>
                </div>
              </div>
              
              <div className="ml-4">
                {content.downloaded ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="text-sm font-medium">Downloaded</span>
                  </div>
                ) : downloadQueue.includes(content.id) ? (
                  <div className="flex items-center text-blue-600">
                    <Clock size={20} className="mr-2" />
                    <span className="text-sm font-medium">Queued</span>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleDownload(content.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Features */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          What works offline?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <CheckCircle className="text-green-600 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-900 dark:text-white text-sm">Watch Downloaded Videos</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Full quality playback</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <CheckCircle className="text-green-600 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-900 dark:text-white text-sm">Take Notes</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sync when online</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <CheckCircle className="text-green-600 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-900 dark:text-white text-sm">Practice Quizzes</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Offline assessment</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <CheckCircle className="text-green-600 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-900 dark:text-white text-sm">Read Materials</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Text-based content</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Saving Tips */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Data Saving Tips</h3>
        <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Download content during off-peak hours (late night/early morning)</li>
          <li>• Use WiFi when available for large downloads</li>
          <li>• Enable "Low Bandwidth Mode" in settings</li>
          <li>• Share downloaded content with classmates to save data</li>
        </ul>
      </div>
    </div>
  );
};

export default OfflineMode;