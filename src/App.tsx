import React, { useState } from 'react';
import RecordScreen from './screens/RecordScreen';
import TrainerScreen from './screens/TrainerScreen';
import CommunityScreen from './screens/CommunityScreen';
import MoreMenuScreen from './screens/MoreMenuScreen';
import TrainingPlanScreen from './screens/TrainingPlanScreen';
import AnalysisScreen from './screens/AnalysisScreen';

type Tab = 'home' | 'training' | 'profile' | 'more';
type MoreScreen = 'menu' | 'training' | 'analysis';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [moreScreen, setMoreScreen] = useState<MoreScreen>('menu');

  const handleMoreNavigate = (screen: MoreScreen) => {
    setMoreScreen(screen);
  };

  const handleBack = () => {
    setMoreScreen('menu');
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <RecordScreen />;
      case 'training':
        return <TrainerScreen />;
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
      case 'analysis':
        return <AnalysisScreen />;
      default:
        return <MoreMenuScreen onNavigate={handleMoreNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Mobile container */}
      <div className="w-full max-w-[430px] bg-white min-h-screen flex flex-col relative shadow-xl">
        {/* Screen content */}
        <div className="flex-1 flex flex-col overflow-y-auto pb-20">
          {activeTab === 'more' && moreScreen !== 'menu' ? (
            <div>
              {/* Back button header */}
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
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-200 flex items-center justify-around py-2 px-2 z-50">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 min-w-[60px] transition-colors ${
              activeTab === 'home' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="text-xs font-medium">Главная</span>
          </button>

          <button
            onClick={() => setActiveTab('training')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 min-w-[60px] transition-colors ${
              activeTab === 'training' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16M18 4v16M9 8h6M9 12h6M9 16h6" />
            </svg>
            <span className="text-xs font-medium">Тренировки</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 min-w-[60px] transition-colors ${
              activeTab === 'profile' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Профиль</span>
          </button>

          <button
            onClick={() => setActiveTab('more')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 min-w-[60px] transition-colors ${
              activeTab === 'more' ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
            <span className="text-xs font-medium">Ещё</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
