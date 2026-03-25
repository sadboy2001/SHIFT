import React from 'react';

const RecordScreen: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <h1 className="text-3xl font-bold text-black px-4 pt-4 pb-3">Разбор от ИИ</h1>

      {/* Video area with AI tracking overlay */}
      <div className="mx-4 rounded-2xl overflow-hidden relative bg-gray-800 shadow-video">
        <img
          src="/images/tennis-player-tracking.jpg"
          alt="Tennis player"
          className="w-full h-[420px] object-cover grayscale"
        />

        {/* AI Tracking badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
            <span className="text-xs font-bold text-yellow-500 border border-yellow-500 rounded px-1">AI</span>
            <span className="text-sm font-medium text-gray-800">AI Трекинг</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
            <span className="text-base">🎾</span>
            <span className="text-sm font-medium text-gray-800">Определение ударов</span>
          </div>
        </div>

        {/* Skeleton tracking overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 430 420">
          {/* Head */}
          <circle cx="240" cy="65" r="25" fill="none" stroke="#9333EA" strokeWidth="2.5" />
          
          {/* Neck */}
          <line x1="240" y1="90" x2="235" y2="110" stroke="#9333EA" strokeWidth="3" />
          
          {/* Shoulders */}
          <line x1="195" y1="120" x2="275" y2="110" stroke="#9333EA" strokeWidth="3" />
          
          {/* Right arm to grip */}
          <line x1="275" y1="110" x2="310" y2="155" stroke="#9333EA" strokeWidth="3" />
          <line x1="310" y1="155" x2="325" y2="185" stroke="#9333EA" strokeWidth="3" />
          
          {/* Left arm to grip */}
          <line x1="195" y1="120" x2="185" y2="155" stroke="#AAFF00" strokeWidth="3" />
          <line x1="185" y1="155" x2="320" y2="180" stroke="#AAFF00" strokeWidth="3" />
          
          {/* Torso/spine */}
          <line x1="235" y1="110" x2="225" y2="190" stroke="#9333EA" strokeWidth="3" />
          
          {/* Hips */}
          <line x1="200" y1="200" x2="255" y2="195" stroke="#9333EA" strokeWidth="3" />
          
          {/* Left leg */}
          <line x1="200" y1="200" x2="185" y2="275" stroke="#9333EA" strokeWidth="3" />
          <line x1="185" y1="275" x2="165" y2="340" stroke="#9333EA" strokeWidth="3" />
          <line x1="165" y1="340" x2="155" y2="370" stroke="#AAFF00" strokeWidth="3" />
          
          {/* Right leg */}
          <line x1="255" y1="195" x2="310" y2="265" stroke="#AAFF00" strokeWidth="3" />
          <line x1="310" y1="265" x2="350" y2="335" stroke="#AAFF00" strokeWidth="3" />
          <line x1="350" y1="335" x2="370" y2="355" stroke="#AAFF00" strokeWidth="3" />

          {/* Joint dots */}
          <circle cx="240" cy="65" r="5" fill="#9333EA" />
          <circle cx="235" cy="110" r="4" fill="#9333EA" />
          <circle cx="195" cy="120" r="6" fill="#9333EA" />
          <circle cx="275" cy="110" r="6" fill="#9333EA" />
          <circle cx="310" cy="155" r="6" fill="#9333EA" />
          <circle cx="185" cy="155" r="6" fill="#AAFF00" />
          <circle cx="325" cy="185" r="6" fill="#9333EA" />
          <circle cx="320" cy="180" r="5" fill="#AAFF00" />
          <circle cx="225" cy="190" r="5" fill="#9333EA" />
          <circle cx="200" cy="200" r="6" fill="#9333EA" />
          <circle cx="255" cy="195" r="6" fill="#9333EA" />
          <circle cx="185" cy="275" r="6" fill="#9333EA" />
          <circle cx="310" cy="265" r="6" fill="#AAFF00" />
          <circle cx="165" cy="340" r="6" fill="#9333EA" />
          <circle cx="350" cy="335" r="6" fill="#AAFF00" />
          <circle cx="155" cy="370" r="7" fill="#AAFF00" stroke="#AAFF00" strokeWidth="2" />
          <circle cx="370" cy="355" r="7" fill="#AAFF00" stroke="#AAFF00" strokeWidth="2" />
        </svg>

        {/* Record button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-16 h-16 rounded-full border-4 border-[#AAFF00] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-purple-600"></div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-button hover:shadow-button-hover">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Загрузить видео
        </button>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-button hover:shadow-button-hover">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          Отправить на разбор
        </button>
      </div>
    </div>
  );
};

export default RecordScreen;
