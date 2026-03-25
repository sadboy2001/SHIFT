import React from 'react';

const RecordScreen: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <h1 className="text-3xl font-bold text-black px-4 pt-4 pb-3">Разбор от ИИ</h1>

      {/* Video area with AI tracking overlay — MAIN */}
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
            <span className="text-sm font-medium text-gray-800">Сканирование скелета</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
            <span className="text-base">⏸️</span>
            <span className="text-sm font-medium text-gray-800">Ключевые кадры</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-800">Эталон: 87%</span>
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

        {/* Scanning status */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-white font-medium">Скелет построен — 17 точек</span>
          </div>
        </div>
      </div>

      {/* Buttons — RIGHT AFTER VIDEO */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-button hover:shadow-button-hover">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Загрузить видео
        </button>
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Записать прямо сейчас
        </button>
      </div>

      {/* How it works — BELOW */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-4 border border-purple-100 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900">Как работает ИИ</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Покадровый скан</p>
                <p className="text-xs text-gray-500">ИИ ставит видео на паузу в ключевых моментах и строит 3D-скелет по точкам тела</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Сравнение с эталоном</p>
                <p className="text-xs text-gray-500">Ваш скелет сравнивается с идеальной техникой профессиональных игроков</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Рекомендации</p>
                <p className="text-xs text-gray-500">ИИ выдаёт конкретные советы по улучшению техники</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Rings */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-card">
          <h2 className="font-bold text-gray-900 mb-4">Техника сегодня</h2>
          <div className="flex items-center gap-5">
            {/* Rings */}
            <div className="relative flex-shrink-0">
              <svg width="140" height="140" viewBox="0 0 140 140">
                {/* Background rings */}
                <circle cx="70" cy="70" r="58" fill="none" stroke="#fee2e2" strokeWidth="10" />
                <circle cx="70" cy="70" r="44" fill="none" stroke="#bbf7d0" strokeWidth="10" />
                <circle cx="70" cy="70" r="30" fill="none" stroke="#bfdbfe" strokeWidth="10" />

                {/* Outer ring — Подача 85% */}
                <circle
                  cx="70" cy="70" r="58"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 58}`}
                  strokeDashoffset={`${2 * Math.PI * 58 * (1 - 0.85)}`}
                  transform="rotate(-90 70 70)"
                />
                {/* Middle ring — Удары 72% */}
                <circle
                  cx="70" cy="70" r="44"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - 0.72)}`}
                  transform="rotate(-90 70 70)"
                />
                {/* Inner ring — Движение 90% */}
                <circle
                  cx="70" cy="70" r="30"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 30}`}
                  strokeDashoffset={`${2 * Math.PI * 30 * (1 - 0.90)}`}
                  transform="rotate(-90 70 70)"
                />
              </svg>
            </div>

            {/* Stats */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Подача</p>
                  <p className="text-lg font-bold text-gray-900">85<span className="text-sm font-normal text-gray-500">%</span></p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Удары</p>
                  <p className="text-lg font-bold text-gray-900">72<span className="text-sm font-normal text-gray-500">%</span></p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Движение</p>
                  <p className="text-lg font-bold text-gray-900">90<span className="text-sm font-normal text-gray-500">%</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-purple-50 rounded-xl p-3 border border-purple-100">
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Совет:</span> Отведите локоть дальше назад при замахе — это повысит точность удара на 12%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordScreen;
