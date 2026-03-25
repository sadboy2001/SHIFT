import React from 'react';

const CommunityScreen: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-4xl font-black text-black tracking-tight">КОМЬЮНИТИ</h1>
        <p className="text-lg text-gray-600 mt-0.5">Сообщество и Достижения</p>
      </div>

      {/* Leaderboard */}
      <div className="mx-4 mt-3 bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Лидерборд</h2>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            Отчет <span className="text-xs">›</span>
          </button>
        </div>

        {/* Leaderboard avatars */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* Player 1 */}
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="relative">
              <img
                src="/images/avatar-anna.jpg"
                alt="Анна П."
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">1</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800 mt-1.5">Анна П.</span>
            <span className="text-xs font-bold text-purple-600">180 км/ч</span>
            <span className="text-xs text-gray-500">2 со</span>
          </div>

          {/* Player 2 */}
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="relative">
              <img
                src="/images/avatar-alexander.jpg"
                alt="Александр"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="absolute -bottom-1 -right-1">
                <span className="text-lg">🏆</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800 mt-1.5">Александр</span>
            <span className="text-xs font-bold text-purple-600">331 км/ч</span>
            <span className="text-xs text-gray-500">3 со</span>
          </div>

          {/* Player 3 */}
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="relative">
              <img
                src="/images/avatar-pravais.jpg"
                alt="Праваис"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="absolute -bottom-1 -right-1">
                <span className="text-lg">🏆</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800 mt-1.5 truncate w-20 text-center">Праваис</span>
            <span className="text-xs font-bold text-purple-600">300 км/ч</span>
            <span className="text-xs text-gray-500">4 со</span>
          </div>
        </div>
      </div>

      {/* Post card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* Post header */}
        <div className="flex items-center justify-between p-4 pb-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/avatar-alexander.jpg"
              alt="Александр Б."
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">Александр Б.</p>
              <p className="text-xs text-gray-500">20 ман, 2023 года</p>
            </div>
          </div>
          <button className="text-gray-400 text-xl leading-none pb-2">⋮</button>
        </div>

        {/* Post video/image */}
        <div className="relative">
          <img
            src="/images/tennis-serve.jpg"
            alt="Tennis serve"
            className="w-full h-[220px] object-cover"
          />
          {/* Purple badge overlay */}
          <div className="absolute top-4 left-4 bg-purple-600/90 rounded-lg px-3 py-2">
            <p className="text-white font-bold text-lg leading-tight">Идеальная<br />подача!</p>
          </div>
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Speed stat */}
        <div className="px-4 pt-3">
          <p className="text-lg font-bold text-purple-600">Скорость: 180 км/ч</p>
        </div>

        {/* Post actions */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1.5 text-gray-600 text-sm">
              <span className="text-xs bg-gray-100 rounded-full px-1.5 py-0.5 font-medium">124</span>
              Нравится
            </button>
            <button className="flex items-center gap-1.5 text-gray-600 text-sm">
              <span className="text-xs bg-gray-100 rounded-full px-1.5 py-0.5 font-medium">32</span>
              Комментарии
            </button>
          </div>
          <button className="flex items-center gap-1.5 text-gray-600 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Поделиться
          </button>
        </div>
      </div>

      {/* Publish button */}
      <div className="px-4 mt-4">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-4 rounded-2xl transition-colors">
          Опубликовать достижение
        </button>
      </div>
    </div>
  );
};

export default CommunityScreen;
