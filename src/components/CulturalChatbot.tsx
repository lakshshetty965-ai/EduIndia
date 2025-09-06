import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot, User, Lightbulb, BookOpen, HelpCircle, Volume2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  language?: string;
}

const CulturalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: language === 'hi' 
        ? "नमस्ते! मैं आपका AI शिक्षा सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?"
        : language === 'raj'
        ? "खम्मा घणी! मैं आपका AI शिक्षा सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?"
        : "Namaste! I'm your AI learning assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Hardcoded AI responses based on language and input
  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Topic explanation responses
    if (input.includes('explain') || input.includes('समझाएं') || input.includes('समझावो')) {
      if (language === 'hi') {
        return "मैं आपको इस विषय को समझाता हूं। यह एक महत्वपूर्ण अवधारणा है जो आपकी पढ़ाई में बहुत उपयोगी होगी। क्या आप चाहते हैं कि मैं इसे और विस्तार से समझाऊं?";
      } else if (language === 'raj') {
        return "मैं आपको इस विषय को समझाता हूं। यो एक जरूरी बात है जो आपकी पढ़ाई में बहुत काम आवेगी। के आप चाहो हो कि मैं इसे और विस्तार से समझाऊं?";
      }
      return "I'll explain this topic for you. This is an important concept that will be very useful in your studies. Would you like me to explain it in more detail?";
    }
    
    // Lecture summary responses
    if (input.includes('summary') || input.includes('सारांश')) {
      if (language === 'hi') {
        return "यहां व्याख्यान का सारांश है: मुख्य बिंदु 1) बुनियादी अवधारणाएं 2) व्यावहारिक उदाहरण 3) अभ्यास के सुझाव। क्या आप किसी विशेष भाग के बारे में और जानना चाहते हैं?";
      } else if (language === 'raj') {
        return "यहां पाठ रो सारांश है: मुख्य बात 1) बुनियादी बातां 2) व्यावहारिक उदाहरण 3) अभ्यास के सुझाव। के आप कोई खास हिस्से के बारे में और जानना चाहो हो?";
      }
      return "Here's the lecture summary: Key points 1) Basic concepts 2) Practical examples 3) Practice suggestions. Would you like to know more about any specific part?";
    }
    
    // Quiz/Question responses
    if (input.includes('quiz') || input.includes('question') || input.includes('प्रश्न') || input.includes('सवाल')) {
      if (language === 'hi') {
        return "मैं आपके प्रश्न का उत्तर देने में खुश हूं। कृपया अपना प्रश्न स्पष्ट रूप से पूछें और मैं आपको सबसे अच्छा उत्तर देने की कोशिश करूंगा।";
      } else if (language === 'raj') {
        return "मैं आपके सवाल रो जवाब देने में खुश हूं। कृपया आपनो सवाल साफ-साफ पूछो अर मैं आपको सबसे बढ़िया जवाब देने री कोशिश करूंगा।";
      }
      return "I'm happy to answer your question. Please ask your question clearly and I'll try to give you the best answer.";
    }
    
    // Math/Science help
    if (input.includes('math') || input.includes('science') || input.includes('गणित') || input.includes('विज्ञान')) {
      if (language === 'hi') {
        return "गणित और विज्ञान में मैं आपकी मदद कर सकता हूं। कृपया अपनी समस्या बताएं और मैं इसे चरणबद्ध तरीके से हल करने में आपकी सहायता करूंगा।";
      } else if (language === 'raj') {
        return "गणित अर विज्ञान में मैं आपकी मदद कर सकता हूं। कृपया आपनी समस्या बताओ अर मैं इसे कदम-कदम हल करने में आपकी मदद करूंगा।";
      }
      return "I can help you with math and science. Please tell me your problem and I'll help you solve it step by step.";
    }
    
    // Default responses
    const defaultResponses: Record<string, string[]> = {
      hi: [
        "मैं आपका प्रश्न समझ गया हूं। मैं इसमें आपकी मदद करने की कोशिश करता हूं।",
        "यह एक अच्छा प्रश्न है। मुझे लगता है कि मैं इसका उत्तर दे सकता हूं।",
        "आपका सवाल दिलचस्प है। आइए इसे एक साथ हल करते हैं।"
      ],
      raj: [
        "मैं आपका सवाल समझ गया हूं। मैं इसमें आपकी मदद करने री कोशिश करता हूं।",
        "यो एक बढ़िया सवाल है। मुझे लागे है कि मैं इसका जवाब दे सकता हूं।",
        "आपका सवाल दिलचस्प है। आओ इसे एक साथ हल करते हैं।"
      ],
      en: [
        "I understand your question. Let me help you with that!",
        "That's a great question. I think I can help you with this.",
        "Your question is interesting. Let's solve this together."
      ]
    };
    
    const responses = defaultResponses[language] || defaultResponses.en;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickActions = [
    { 
      id: 1, 
      text: t('explainTopic'), 
      textHi: 'विषय समझाएं',
      textRaj: 'विषय समझावो',
      icon: Lightbulb 
    },
    { 
      id: 2, 
      text: t('summarizeLecture'), 
      textHi: 'व्याख्यान सारांश',
      textRaj: 'पाठ सारांश',
      icon: BookOpen 
    },
    { 
      id: 3, 
      text: t('answerQuiz'), 
      textHi: 'प्रश्न का उत्तर',
      textRaj: 'सवाल रो जवाब',
      icon: HelpCircle 
    },
  ];

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      const currentInput = inputText;
      setInputText('');
      setIsTyping(true);
      
      // Simulate AI response with realistic delay
      setTimeout(() => {
        setIsTyping(false);
        const aiResponseText = getAIResponse(currentInput);
        
        const aiResponse: Message = {
          id: messages.length + 2,
          text: aiResponseText,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
    }
  };

  const handleQuickAction = (actionText: string) => {
    setInputText(actionText);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getQuickActionText = (action: { id:number, text: string, textHi: string, textRaj: string, icon: React.ElementType }) => {
    switch (language) {
      case 'hi': return action.textHi;
      case 'raj': return action.textRaj;
      default: return action.text;
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-4 w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-xs">🤖</span>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white dark:bg-black rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Chat Header */}
          <div className="bg-black dark:bg-white text-white dark:text-black p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 dark:bg-black/20 rounded-full flex items-center justify-center mr-3">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">{t('aiAssistant')}</h3>
                  <p className="text-xs text-gray-300 dark:text-gray-700">Available 24/7</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 dark:hover:bg-black/20 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start max-w-xs">
                  {!message.isUser && (
                    <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <Bot className="text-white dark:text-black" size={12} />
                    </div>
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-gray-300 dark:text-gray-700' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                      <User className="text-white" size={12} />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start max-w-xs">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="text-white dark:text-black" size={12} />
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(getQuickActionText(action))}
                    className="flex items-center px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <Icon size={12} className="mr-1" />
                    {getQuickActionText(action)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('typeYourDoubt')}
                className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-black dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
              />
              <button className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Volume2 size={16} />
              </button>
              <button
                onClick={handleSendMessage}
                className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CulturalChatbot;