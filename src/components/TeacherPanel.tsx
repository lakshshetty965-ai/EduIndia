import React, { useState } from 'react';
import { Upload, Video, FileText, Settings, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TeacherPanel: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { language } = useLanguage();
  const [lectureForm, setLectureForm] = useState({
    title: '',
    subject: '',
    description: '',
    optimizeForLowBandwidth: true,
  });

  const uploadedLectures = [
    { id: 1, title: 'Introduction to React', subject: 'Web Development', status: 'published', date: '2024-01-15' },
    { id: 2, title: 'State Management', subject: 'Web Development', status: 'processing', date: '2024-01-16' },
    { id: 3, title: 'Component Lifecycle', subject: 'Web Development', status: 'published', date: '2024-01-17' },
  ];

  // Simulate lecture upload with progress
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Show success message and reset form
          setTimeout(() => {
            alert(language === 'hi' 
              ? 'व्याख्यान सफलतापूर्वक अपलोड हो गया! प्रसंस्करण शुरू हो गया है।'
              : language === 'raj'
              ? 'पाठ सफलतापूर्वक अपलोड हो गया! प्रसंस्करण शुरू हो गया है।'
              : 'Lecture uploaded successfully! Processing has started.'
            );
          }, 500);
          setLectureForm({
            title: '',
            subject: '',
            description: '',
            optimizeForLowBandwidth: true,
          });
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 300);
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

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Upload Lecture Card */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-lg font-semibold text-black dark:text-white mb-6 flex items-center">
          <Video className="mr-2" size={20} />
          Upload Lecture
        </h2>
        
        {/* Drag and Drop Area */}
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
          <Upload className="mx-auto mb-4 text-gray-400 dark:text-gray-600" size={48} />
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Drag and drop your video file here, or
          </p>
          <button 
            onClick={simulateUpload}
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
          >
            Choose File
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Supports MP4, MOV, AVI (Max 500MB)
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
                Processing video... {Math.round(uploadProgress)}%
              </p>
              {lectureForm.optimizeForLowBandwidth && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  ✓ Optimizing for low bandwidth devices
                </p>
              )}
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Lecture Title
            </label>
            <input
              type="text"
              value={lectureForm.title}
              onChange={(e) => setLectureForm(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              placeholder="Enter lecture title"
              disabled={isUploading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Subject
            </label>
            <select 
              value={lectureForm.subject}
              onChange={(e) => setLectureForm(prev => ({ ...prev, subject: e.target.value }))}
              disabled={isUploading}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
            >
              <option value="">Select Subject</option>
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>Data Science</option>
              <option>Machine Learning</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Description
            </label>
            <textarea
              value={lectureForm.description}
              onChange={(e) => setLectureForm(prev => ({ ...prev, description: e.target.value }))}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-black dark:text-white h-24 resize-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              placeholder="Brief description of the lecture content"
              disabled={isUploading}
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={lectureForm.optimizeForLowBandwidth}
              onChange={(e) => setLectureForm(prev => ({ ...prev, optimizeForLowBandwidth: e.target.checked }))}
              className="mr-3 w-4 h-4 text-black dark:text-white bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-black dark:focus:ring-white"
              disabled={isUploading}
            />
            <label className="text-sm text-black dark:text-white">
              Optimize for Low Bandwidth
            </label>
          </div>
          
          <button 
            onClick={simulateUpload}
            disabled={isUploading || !lectureForm.title || !lectureForm.subject}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Processing...' : 'Upload Lecture'}
          </button>
        </div>
      </div>

      {/* Uploaded Lectures List */}
      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
          Recent Uploads
        </h3>
        <div className="space-y-3">
          {uploadedLectures.map((lecture) => (
            <div key={lecture.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
              <div className="flex-1">
                <h4 className="font-medium text-black dark:text-white">{lecture.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{lecture.subject} • {lecture.date}</p>
              </div>
              <div className="flex items-center">
                {lecture.status === 'published' ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <Clock className="text-yellow-500" size={20} />
                )}
                <span className={`ml-2 text-sm font-medium ${
                  lecture.status === 'published' ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {lecture.status === 'published' ? 'Published' : 'Processing'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;