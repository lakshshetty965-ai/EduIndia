import React, { useState } from 'react';
import { Calendar, TrendingUp, BookOpen, Award, Bell, ChevronRight, Play, Users, Clock, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomePageProps {
  isOnline: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isOnline }) => {
  const { t, language } = useLanguage();
  const [selectedQuickAction, setSelectedQuickAction] = useState<string | null>(null);

  const quickActions = [
    { id: 'join-class', title: 'Join Live Class', titleHi: 'लाइव क्लास में शामिल हों', icon: Users, color: 'bg-blue-500' },
    { id: 'assignments', title: 'View Assignments', titleHi: 'असाइनमेंट देखें', icon: BookOpen, color: 'bg-green-500' },
    { id: 'practice', title: 'Practice Tests', titleHi: 'अभ्यास परीक्षा', icon: Award, color: 'bg-purple-500' },
    { id: 'materials', title: 'Study Materials', titleHi: 'अध्ययन सामग्री', icon: BookOpen, color: 'bg-orange-500' },
  ];

  const todaysSchedule = [
    { time: '10:00 AM', subject: 'Mathematics', teacher: 'Dr. Sharma', type: 'live' },
    { time: '2:00 PM', subject: 'Physics', teacher: 'Prof. Gupta', type: 'recorded' },
    { time: '4:00 PM', subject: 'Chemistry', teacher: 'Dr. Patel', type: 'live' },
  ];

  const recentActivity = [
    { action: 'Completed assignment', subject: 'Web Development', time: '2 hours ago', score: 95 },
    { action: 'Watched lecture', subject: 'React Basics', time: '1 day ago', duration: '45 min' },
    { action: 'Participated in discussion', subject: 'JavaScript Arrays', time: '2 days ago', replies: 3 },
  ];

  const achievements = [
    { title: 'Perfect Score', description: 'Scored 100% in assignment', icon: '🏆', earned: true },
    { title: 'Consistent Learner', description: '7 days streak', icon: '🔥', earned: true },
    { title: 'Discussion Master', description: 'Asked 10 questions', icon: '💬', earned: false },
  ];

  const getQuickActionTitle = (action: any) => {
    switch (language) {
      case 'hi': return action.titleHi;
      default: return action.title;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl p-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">{t('welcomeMessage')}</h1>
          <p className="text-orange-100 mb-4">{t('culturalGreeting')}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-orange-100">Ready to learn something new today?</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-orange-200">Learning Streak</p>
              <p className="text-xl font-bold">12 days 🔥</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-blue-600">24</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lectures</p>
            </div>
            <BookOpen className="text-blue-500" size={24} />
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-green-600">18</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assignments</p>
            </div>
            <Award className="text-green-500" size={24} />
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-purple-600">88%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Score</p>
            </div>
            <TrendingUp className="text-purple-500" size={24} />
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-orange-600">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Achievements</p>
            </div>
            <Star className="text-orange-500" size={24} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">{t('quickActions')}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => setSelectedQuickAction(action.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedQuickAction === action.id
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-950'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-sm font-medium text-black dark:text-white text-center">
                  {getQuickActionTitle(action)}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-black dark:text-white flex items-center">
            <Calendar className="mr-2" size={20} />
            {t('todaysLectures')}
          </h3>
          <button className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center">
            View All <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="space-y-3">
          {todaysSchedule.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mr-4">
                  {item.type === 'live' ? (
                    <Users className="text-orange-600" size={20} />
                  ) : (
                    <Play className="text-orange-600" size={20} />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-black dark:text-white">{item.subject}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.teacher}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-black dark:text-white">{item.time}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.type === 'live' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                }`}>
                  {item.type === 'live' ? 'Live' : 'Recorded'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">{t('recentActivity')}</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-black dark:text-white">{activity.action}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{activity.subject} • {activity.time}</p>
                  {activity.score && (
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full mt-1 inline-block">
                      Score: {activity.score}%
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">{t('achievements')}</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center p-3 rounded-xl ${
                achievement.earned 
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700'
                  : 'bg-gray-50 dark:bg-gray-900'
              }`}>
                <div className="text-2xl mr-3">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className={`font-medium text-sm ${
                    achievement.earned ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
                {achievement.earned && (
                  <div className="text-yellow-500">
                    <Award size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-xl border border-blue-200 dark:border-blue-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 flex items-center">
            <Bell className="mr-2" size={20} />
            {t('notifications')}
          </h3>
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">3 New</span>
        </div>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
            <p className="text-sm font-medium text-black dark:text-white">New assignment posted</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Mathematics - Due in 3 days</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
            <p className="text-sm font-medium text-black dark:text-white">Live class reminder</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Physics class starts in 30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;