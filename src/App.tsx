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
          {/* База знаний */}
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'knowledge' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[10px] font-medium">База</span>
          </button>

          {/* Тренировки */}
          <button
            onClick={() => setActiveTab('training')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'training' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16M18 4v16M9 8h6M9 12h6M9 16h6" />
            </svg>
            <span className="text-[10px] font-medium">Тренировки</span>
          </button>

          {/* AI Button - Center, Elevated */}
          <div className="relative -mt-5">
            <button
              onClick={() => setActiveTab('ai')}
              className="relative flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                activeTab === 'ai' 
                  ? 'bg-gradient-to-br from-[#AAFF00] to-purple-500 animate-pulse-glow' 
                  : 'bg-gray-200'
              }`}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <span className={`text-[10px] font-medium mt-1 ${activeTab === 'ai' ? 'text-purple-600' : 'text-gray-400'}`}>
                ИИ
              </span>
            </button>
          </div>

          {/* Профиль */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'profile' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-medium">Профиль</span>
          </button>

          {/* План тренировок (Ещё) */}
          <button
            onClick={() => setActiveTab('more')}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px] transition-colors ${
              activeTab === 'more' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium">План</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
