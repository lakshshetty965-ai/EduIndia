// Hardcoded configuration values for production deployment
export const APP_CONFIG = {
  // Support contact information
  SUPPORT_PHONE: '1800-123-4567',
  EMERGENCY_PHONE: '1800-URGENT-1',
  SUPPORT_EMAIL: 'support@eduindia.in',
  
  // App metadata
  APP_NAME: 'EduIndia',
  VERSION: '1.0.0',
  
  // Feature flags
  FEATURES: {
    OFFLINE_MODE: true,
    AI_CHATBOT: true,
    VOICE_SUPPORT: true,
    MULTILINGUAL: true,
  },
  
  // Bandwidth optimization settings
  BANDWIDTH: {
    LOW_QUALITY_VIDEO_SIZE_REDUCTION: 0.2, // 20% of original size
    IMAGE_COMPRESSION_QUALITY: 0.7,
    MAX_UPLOAD_SIZE_MB: 10,
  },
  
  // Supported file types
  SUPPORTED_FORMATS: {
    VIDEO: ['mp4', 'mov', 'avi'],
    DOCUMENT: ['pdf', 'doc', 'docx'],
    IMAGE: ['jpg', 'jpeg', 'png'],
  },
  
  // Default settings for rural users
  DEFAULTS: {
    LANGUAGE: 'hi', // Default to Hindi
    THEME: 'light',
    BANDWIDTH_MODE: 'low',
    NOTIFICATIONS: true,
  }
};

// Hardcoded AI responses for different scenarios
export const AI_RESPONSES = {
  GREETINGS: {
    en: "Namaste! I'm your AI learning assistant. How can I help you today?",
    hi: "नमस्ते! मैं आपका AI शिक्षा सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    raj: "खम्मा घणी! मैं आपका AI शिक्षा सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    ta: "வணக்கம்! நான் உங்கள் AI கற்றல் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    te: "నమస్కారం! నేను మీ AI అభ్యాస సహాయకుడిని. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    bn: "নমস্কার! আমি আপনার AI শেখার সহায়ক। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
    mr: "नमस्कार! मी तुमचा AI शिक्षण सहाय्यक आहे. आज मी तुम्हाला कशी मदत करू शकतो?",
    gu: "નમસ્તે! હું તમારો AI શીખવાનો સહાયક છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?",
    kn: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ AI ಕಲಿಕೆಯ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    ml: "നമസ്കാരം! ഞാൻ നിങ്ങളുടെ AI പഠന സഹായിയാണ്. ഇന്ന് എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
    pa: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ AI ਸਿੱਖਣ ਸਹਾਇਕ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
    or: "ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କର AI ଶିକ୍ଷା ସହାୟକ। ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?",
    as: "নমস্কাৰ! মই আপোনাৰ AI শিক্ষা সহায়ক। আজি মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?"
  },
  
  ASSIGNMENT_FEEDBACK: {
    EXCELLENT: {
      en: "Excellent work! Your solution demonstrates a clear understanding of the concepts. Grade: A",
      hi: "उत्कृष्ट काम! आपका समाधान अवधारणाओं की स्पष्ट समझ दर्शाता है। ग्रेड: A",
      raj: "बहुत बढ़िया काम! आपका हल अवधारणाओं री साफ समझ दिखाता है। ग्रेड: A"
    },
    GOOD: {
      en: "Good effort! Your work shows understanding but could use some improvements. Grade: B",
      hi: "अच्छा प्रयास! आपका काम समझ दिखाता है लेकिन कुछ सुधार की जरूरत है। ग्रेड: B",
      raj: "बढ़िया कोशिश! आपका काम समझ दिखाता है पर कुछ सुधार री जरूरत है। ग्रेड: B"
    },
    NEEDS_WORK: {
      en: "Keep trying! Review the lecture materials and practice more. Grade: C",
      hi: "कोशिश करते रहें! व्याख्यान सामग्री की समीक्षा करें और अधिक अभ्यास करें। ग्रेड: C",
      raj: "कोशिश करते रहो! पाठ री सामग्री देखो अर ज्यादा अभ्यास करो। ग्रेड: C"
    }
  }
};

// Sample lecture data for demo
export const SAMPLE_LECTURES = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    titleHi: 'वेब डेवलपमेंट का परिचय',
    titleRaj: 'वेब डेवलपमेंट रो परिचय',
    subject: 'Computer Science',
    duration: '45 min',
    thumbnail: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    description: 'Learn the basics of creating websites and web applications',
    descriptionHi: 'वेबसाइट और वेब एप्लिकेशन बनाने की मूल बातें सीखें',
    descriptionRaj: 'वेबसाइट अर वेब एप्लिकेशन बनाने री मूल बातां सीखो'
  },
  {
    id: 2,
    title: 'HTML Fundamentals',
    titleHi: 'HTML की बुनियादी बातें',
    titleRaj: 'HTML री बुनियादी बातां',
    subject: 'Computer Science',
    duration: '38 min',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    description: 'Understanding HTML structure and basic tags',
    descriptionHi: 'HTML संरचना और बुनियादी टैग को समझना',
    descriptionRaj: 'HTML संरचना अर बुनियादी टैग को समझना'
  }
];