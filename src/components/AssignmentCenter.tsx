import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Clock, AlertCircle, Star } from 'lucide-react';
import { AI_RESPONSES } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const AssignmentCenter: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { language } = useLanguage();

  const assignments = [
    {
      id: 1,
      title: 'React Hooks Implementation',
      subject: 'Web Development',
      submittedDate: '2024-01-15',
      status: 'graded',
      grade: 'A',
      aiScore: 92,
      feedback: AI_RESPONSES.ASSIGNMENT_FEEDBACK.EXCELLENT[language as keyof typeof AI_RESPONSES.ASSIGNMENT_FEEDBACK.EXCELLENT] || AI_RESPONSES.ASSIGNMENT_FEEDBACK.EXCELLENT.en
    },
    {
      id: 2,
      title: 'Component Design Patterns',
      subject: 'Web Development',
      submittedDate: '2024-01-16',
      status: 'reviewing',
      grade: null,
      aiScore: null,
      feedback: null
    },
    {
      id: 3,
      title: 'State Management Analysis',
      subject: 'Web Development',
      submittedDate: '2024-01-17',
      status: 'pending',
      grade: null,
      aiScore: null,
      feedback: null
    }
  ];

  // Simulate file upload with progress
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Simulate AI review completion
          setTimeout(() => {
            alert(language === 'hi' 
              ? 'असाइनमेंट सफलतापूर्वक अपलोड हो गया! AI समीक्षा शुरू हो गई है।'
              : language === 'raj'
              ? 'काम सफलतापूर्वक अपलोड हो गया! AI समीक्षा शुरू हो गई है।'
              : 'Assignment uploaded successfully! AI review has started.'
            );
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    simulateUpload();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'reviewing':
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return <AlertCircle className="text-gray-400" size={20} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'graded':
        return 'Completed';
      case 'reviewing':
        return 'AI Reviewing...';
      default:
        return 'Not Submitted';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Upload Assignment */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-lg font-semibold text-black dark:text-white mb-6 flex items-center">
          <Upload className="mr-2" size={20} />
          Upload Assignment
        </h2>
        
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
            dragActive
              ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900'
              : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <FileText className="mx-auto mb-4 text-gray-400 dark:text-gray-600" size={48} />
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Drop your assignment file here, or
          </p>
          <button 
            onClick={simulateUpload}
            disabled={isUploading}
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 font-medium"
          >
            {isUploading ? 'Uploading...' : 'Browse Files'}
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
          
          {/* Upload Progress */}
          {isUploading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-black dark:bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Uploading... {Math.round(uploadProgress)}%
              </p>
            </div>
          )}
        </div>

        {/* AI Review Status */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black dark:text-white">AI Review System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get instant feedback and grading within minutes
              </p>
            </div>
            <div className="text-black dark:text-white">
              <Star size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Assignment History */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
          Assignment History
        </h3>
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-medium text-black dark:text-white">{assignment.title}</h4>
                    {assignment.grade && (
                      <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                        Grade: {assignment.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {assignment.subject} • Submitted on {assignment.submittedDate}
                  </p>
                  
                  {assignment.aiScore && (
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">AI Score:</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${assignment.aiScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-black dark:text-white">
                          {assignment.aiScore}/100
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {assignment.feedback && (
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>AI Feedback:</strong> {assignment.feedback}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center ml-4">
                  {getStatusIcon(assignment.status)}
                  <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {getStatusText(assignment.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentCenter;