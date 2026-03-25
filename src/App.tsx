import React, { useState } from 'react';
import RecordScreen from './screens/RecordScreen';
import TrainerScreen from './screens/TrainerScreen';
import CommunityScreen from './screens/CommunityScreen';
import MoreMenuScreen from './screens/MoreMenuScreen';
import TrainingPlanScreen from './screens/TrainingPlanScreen';
import KnowledgeBaseScreen from './screens/KnowledgeBaseScreen';

type Tab = 'ai' | 'training' | 'knowledge' | 'profile' | 'more';
type MoreScreen = 'menu' | 'training';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('ai');
  const [moreScreen, setMoreScreen] = useState<MoreScreen>('menu');

  const handleMoreNavigate = (screen: MoreScreen) => {
    setMoreScreen(screen);
  };

  const handleBack = () => {
    setMoreScreen('menu');
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'ai':
        return <RecordScreen />;
      case 'training':
        return <TrainerScreen />;
      case 'knowledge':
        return <KnowledgeBaseScreen />;
      case 'profile':
        return <CommunityScreen />;
      case 'more':
        return renderMoreScreen();
      default:
        return <RecordScreen />;
    }
  };

  const renderMoreScreen = () => {
    switch (moreScreen) {
      case 'training':
        return <TrainingPlanScreen />;
      default:
        return <MoreMenuScreen onNavigate={handleMoreNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Mobile container */}
      <div className="w-full max-w-[430px] bg-white min-h-screen flex flex-col relative shadow-xl">
        {/* Screen content */}
        <div className="flex-1 flex flex-col overflow-y-auto pb-24">
          {activeTab === 'more' && moreScreen !== 'menu' ? (
            <div>
              <div className="px-4 pt-4 pb-2 flex items-center gap-3">
                <button 
                  onClick={handleBack}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              {renderScreen()}
            </div>
          ) : (
            renderScreen()
          )}
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white shadow-nav flex items-end justify-around py-1.5 px-2 z-50">
          {/* База знаний - Теннисная ракетка */}
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'knowledge' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <ellipse cx="12" cy="12" rx="4" ry="9" />
              <line x1="5" y1="8" x2="19" y2="8" />
              <line x1="5" y1="16" x2="19" y2="16" />
            </svg>
            <span className="text-[10px] font-medium">База</span>
          </button>

          {/* Тренировки - Мяч с волной движения */}
          <button
            onClick={() => setActiveTab('training')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'training' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="14" r="5" />
              <path d="M12 9 Q8 7 8 3" />
              <path d="M12 9 Q16 7 16 3" />
              <circle cx="12" cy="14" r="2" />
            </svg>
            <span className="text-[10px] font-medium">Тренировки</span>
          </button>

          {/* AI Button - Center, Elevated - Искра ИИ */}
          <div className="relative -mt-5">
            <button
              onClick={() => setActiveTab('ai')}
              className="relative flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#AAFF00] via-purple-400 to-purple-600 animate-siri-glow animate-siri-gradient">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className={`text-[10px] font-medium mt-1 ${activeTab === 'ai' ? 'text-purple-600' : 'text-gray-400'}`}>
                ИИ
              </span>
            </button>
          </div>

          {/* Профиль - Теннисист */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'profile' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="3" />
              <path d="M12 10v3" />
              <path d="M8 21v-2a4 4 0 018 0v2" />
              <path d="M18 17l3-3" />
              <circle cx="21" cy="14" r="2" />
            </svg>
            <span className="text-[10px] font-medium">Профиль</span>
          </button>

          {/* План - Календарь с мячом */}
          <button
            onClick={() => setActiveTab('more')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'more' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="4" y="5" width="16" height="16" rx="2" />
              <line x1="4" y1="10" x2="20" y2="10" />
              <line x1="9" y1="5" x2="9" y2="3" />
              <line x1="15" y1="5" x2="15" y2="3" />
              <circle cx="12" cy="15" r="2" />
            </svg>
            <span className="text-[10px] font-medium">План</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
