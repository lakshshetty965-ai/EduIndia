import React, { useState } from 'react';
import { MessageSquare, Users, ThumbsUp, Reply, Search, Plus } from 'lucide-react';

const DiscussionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newDiscussion, setNewDiscussion] = useState(false);

  const discussions = [
    {
      id: 1,
      title: 'How to center a div in CSS?',
      author: 'Priya Sharma',
      timestamp: '2 hours ago',
      replies: 12,
      likes: 8,
      subject: 'Web Development',
      lastReply: 'Just now',
      isAnswered: true,
    },
    {
      id: 2,
      title: 'JavaScript array methods explanation needed',
      author: 'Rahul Meena',
      timestamp: '4 hours ago',
      replies: 7,
      likes: 15,
      subject: 'Web Development',
      lastReply: '30 min ago',
      isAnswered: false,
    },
    {
      id: 3,
      title: 'HTML form validation techniques',
      author: 'Kavita Rajput',
      timestamp: '1 day ago',
      replies: 23,
      likes: 31,
      subject: 'Web Development',
      lastReply: '2 hours ago',
      isAnswered: true,
    },
    {
      id: 4,
      title: 'CSS Grid vs Flexbox - when to use what?',
      author: 'Amit Choudhary',
      timestamp: '2 days ago',
      replies: 18,
      likes: 25,
      subject: 'Web Development',
      lastReply: '5 hours ago',
      isAnswered: false,
    },
  ];

  const trendingTopics = [
    { name: 'CSS Basics', count: 45 },
    { name: 'JavaScript', count: 32 },
    { name: 'HTML Forms', count: 28 },
    { name: 'Web Design', count: 21 },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Discussions</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Connect with classmates and get help
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="mr-2" size={16} />
            New Discussion
          </button>
          <button 
            onClick={() => setNewDiscussion(!newDiscussion)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus className="mr-2" size={16} />
            New Discussion
          </button>
        </div>
        
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-2xl font-bold text-blue-600">127</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Discussions</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-2xl font-bold text-green-600">89</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Questions Answered</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-2xl font-bold text-purple-600">45</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Contributors</p>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Trending Topics</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {topic.name} ({topic.count})
            </button>
          ))}
        </div>
      </div>

      {/* Discussion List */}
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded mr-3">
                    {discussion.subject}
                  </span>
                  {discussion.isAnswered && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded">
                      Answered
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {discussion.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span>by {discussion.author}</span>
                  <span>{discussion.timestamp}</span>
                  <span>Last reply: {discussion.lastReply}</span>
                </div>
              </div>
              <div className="ml-4 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Reply size={16} className="mr-1" />
                  {discussion.replies}
                </div>
                <div className="flex items-center">
                  <ThumbsUp size={16} className="mr-1" />
                  {discussion.likes}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Load More Discussions
        </button>
      </div>
    </div>
  );
};

export default DiscussionPage;