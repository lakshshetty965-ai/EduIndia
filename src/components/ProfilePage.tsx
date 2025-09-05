import React from 'react';
import { User, Settings, Award, BarChart3, Bell, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const achievements = [
    { id: 1, title: 'First Assignment', description: 'Completed your first assignment', earned: true },
    { id: 2, title: 'Perfect Score', description: 'Achieved 100% on an assignment', earned: true },
    { id: 3, title: 'Consistent Learner', description: 'Completed 7 days in a row', earned: false },
    { id: 4, title: 'Question Master', description: 'Asked 50 questions in AI chat', earned: true },
  ];

  const stats = [
    { label: 'Lectures Completed', value: '24', color: 'text-blue-600' },
    { label: 'Assignments Submitted', value: '18', color: 'text-green-600' },
    { label: 'Average Score', value: '88%', color: 'text-purple-600' },
    { label: 'Learning Streak', value: '12 days', color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <User className="text-white" size={32} />
          </div>
          <div className="ml-6 flex-1">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-400">Computer Science Student</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Joined January 2024 • Active Learner
            </p>
          </div>
          <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Award className="mr-2" size={20} />
          Achievements
        </h3>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`flex items-center p-3 rounded-lg ${
              achievement.earned 
                ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700' 
                : 'bg-gray-50 dark:bg-gray-700'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                achievement.earned 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
              }`}>
                <Award size={20} />
              </div>
              <div className="ml-4">
                <h4 className={`font-medium ${
                  achievement.earned 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
              {achievement.earned && (
                <div className="ml-auto text-yellow-500">
                  <Award size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <BarChart3 className="mr-3 text-gray-500" size={20} />
            <span className="text-gray-900 dark:text-white">View Progress Report</span>
          </button>
          <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Bell className="mr-3 text-gray-500" size={20} />
            <span className="text-gray-900 dark:text-white">Notification Settings</span>
          </button>
          <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Settings className="mr-3 text-gray-500" size={20} />
            <span className="text-gray-900 dark:text-white">Account Settings</span>
          </button>
          <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-red-600 dark:text-red-400">
            <LogOut className="mr-3" size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;