import React, { useState } from 'react';
import { Play, Download, Calendar, Clock, Users, Search, Filter, CheckCircle, Star, Wifi, WifiOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SAMPLE_LECTURES } from '../utils/constants';

interface LecturesPageProps {
  isOnline: boolean;
}

const LecturesPage: React.FC<LecturesPageProps> = ({ isOnline }) => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [bandwidthMode, setBandwidthMode] = useState<'high' | 'low'>('low');
  const [downloadingLecture, setDownloadingLecture] = useState<number | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Enhanced sample lectures with more variety
  const lectures = [
    ...SAMPLE_LECTURES.map(lecture => ({
      ...lecture,
      date: '15 Jan',
      size: bandwidthMode === 'low' ? '25 MB' : '120 MB',
      downloaded: lecture.id === 2,
      essential: true,
      views: Math.floor(Math.random() * 1000) + 100,
      rating: (Math.random() * 2 + 3).toFixed(1),
      instructor: 'Dr. Sharma'
    })),
    {
      id: 3,
      title: 'CSS Grid Layout',
      titleHi: 'CSS ग्रिड लेआउट',
      titleRaj: 'CSS ग्रिड लेआउट',
      subject: 'Web Development',
      duration: '52 min',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Master CSS Grid for modern web layouts',
      descriptionHi: 'आधुनिक वेब लेआउट के लिए CSS ग्रिड में महारत हासिल करें',
      descriptionRaj: 'आधुनिक वेब लेआउट के लिए CSS ग्रिड में महारत हासिल करें',
      date: '14 Jan',
      size: bandwidthMode === 'low' ? '30 MB' : '140 MB',
      downloaded: false,
      essential: false,
      views: 856,
      rating: '4.7',
      instructor: 'Prof. Gupta'
    },
    {
      id: 4,
      title: 'JavaScript ES6 Features',
      titleHi: 'JavaScript ES6 विशेषताएं',
      titleRaj: 'JavaScript ES6 विशेषताएं',
      subject: 'Programming',
      duration: '48 min',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Learn modern JavaScript features and syntax',
      descriptionHi: 'आधुनिक JavaScript सुविधाओं और सिंटैक्स को सीखें',
      descriptionRaj: 'आधुनिक JavaScript सुविधाओं और सिंटैक्स को सीखें',
      date: '13 Jan',
      size: bandwidthMode === 'low' ? '28 MB' : '135 MB',
      downloaded: true,
      essential: true,
      views: 1243,
      rating: '4.9',
      instructor: 'Dr. Patel'
    }
  ];

  const subjects = ['all', 'Web Development', 'Programming', 'Computer Science', 'Mathematics'];

  const filteredLectures = lectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.titleHi.includes(searchTerm) ||
                         lecture.titleRaj.includes(searchTerm);
    const matchesSubject = selectedSubject === 'all' || lecture.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  // Simulate download with progress
  const simulateDownload = (lectureId: number) => {
    setDownloadingLecture(lectureId);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadingLecture(null);
          setTimeout(() => {
            alert(language === 'hi' 
              ? 'व्याख्यान सफलतापूर्वक डाउनलोड हो गया!'
              : 'Lecture downloaded successfully!'
            );
          }, 500);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 250);
  };

  const getTitle = (lecture: any) => {
    switch (language) {
      case 'hi': return lecture.titleHi;
      case 'raj': return lecture.titleRaj;
      default: return lecture.title;
    }
  };

  const getDescription = (lecture: any) => {
    switch (language) {
      case 'hi': return lecture.descriptionHi;
      case 'raj': return lecture.descriptionRaj;
      default: return lecture.description;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header with Search and Filters */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">{t('recordedLectures')}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filteredLectures.length} lectures available
            </p>
          </div>
          
          {/* Bandwidth Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Quality:</span>
            <button
              onClick={() => setBandwidthMode(prev => prev === 'low' ? 'high' : 'low')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                bandwidthMode === 'low'
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {bandwidthMode === 'low' ? '💾 Data Saver' : '🎥 High Quality'}
            </button>
          </div>
        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search lectures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400" size={18} />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject === 'all' ? 'All Subjects' : subject}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Connection Status Banner */}
      {!isOnline && (
        <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
          <div className="flex items-center">
            <WifiOff className="text-orange-600 mr-3" size={20} />
            <div>
              <p className="font-medium text-orange-800 dark:text-orange-200">Offline Mode</p>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Only downloaded lectures are available. Connect to internet to access all content.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lectures Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLectures.map((lecture) => (
          <div key={lecture.id} className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 group">
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={lecture.thumbnail}
                alt={getTitle(lecture)}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay Icons */}
              <div className="absolute top-3 left-3 flex space-x-2">
                {lecture.essential && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star size={12} className="mr-1" />
                    Essential
                  </span>
                )}
                {lecture.downloaded && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <CheckCircle size={12} className="mr-1" />
                    Downloaded
                  </span>
                )}
              </div>
              
              <div className="absolute top-3 right-3">
                {isOnline ? (
                  <Wifi className="text-white bg-black/50 rounded-full p-1" size={24} />
                ) : (
                  <WifiOff className="text-white bg-red-500/80 rounded-full p-1" size={24} />
                )}
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 text-black rounded-full p-4 hover:bg-white transition-colors">
                  <Play size={24} />
                </button>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                {lecture.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-black dark:text-white text-lg mb-1 line-clamp-2">
                    {getTitle(lecture)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {getDescription(lecture)}
                  </p>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {lecture.date}
                  </span>
                  <span className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {lecture.views} views
                  </span>
                  <span className="flex items-center">
                    <Star size={14} className="mr-1 text-yellow-500" />
                    {lecture.rating}
                  </span>
                </div>
              </div>

              {/* Instructor and Subject */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-black dark:text-white">{lecture.instructor}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{lecture.subject}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  bandwidthMode === 'low' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                }`}>
                  {lecture.size}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                  disabled={!isOnline && !lecture.downloaded}
                >
                  <Play size={18} className="mr-2" />
                  {!isOnline && !lecture.downloaded ? 'Offline' : 'Watch'}
                </button>
                
                {!lecture.downloaded && isOnline && (
                  <button 
                    onClick={() => simulateDownload(lecture.id)}
                    disabled={downloadingLecture === lecture.id}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    {downloadingLecture === lecture.id ? (
                      <div className="w-5 h-5 border-2 border-gray-700 dark:border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Download size={18} />
                    )}
                  </button>
                )}
              </div>

              {/* Download Progress */}
              {downloadingLecture === lecture.id && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Downloading...</span>
                    <span>{Math.round(downloadProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredLectures.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">No lectures found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default LecturesPage;