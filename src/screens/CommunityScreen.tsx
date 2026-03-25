import React, { useState } from 'react';

const leaderboardData = [
  { id: 1, rank: 1, name: 'Александр', avatar: '/images/avatar-alexander.jpg', level: 5, score: 2840, streak: 12, badges: 8 },
  { id: 2, rank: 2, name: 'Дмитрий', avatar: '/images/coach-dmitry.jpg', level: 4, score: 2650, streak: 8, badges: 6 },
  { id: 3, rank: 3, name: 'Анна', avatar: '/images/avatar-anna.jpg', level: 4, score: 2480, streak: 15, badges: 7 },
  { id: 4, rank: 4, name: 'Сергей', avatar: '/images/avatar-pravais.jpg', level: 3, score: 2210, streak: 5, badges: 4 },
  { id: 5, rank: 5, name: 'Игрок', avatar: '/images/avatar-pravais.jpg', level: 3, score: 1980, streak: 10, badges: 5, isUser: true },
];

const videos = [
  {
    id: 1,
    user: 'Анна',
    avatar: '/images/avatar-anna.jpg',
    location: 'Москва',
    thumbnail: '/images/tennis-serve.jpg',
    title: 'Идеальная подача! 🎾',
    likes: 247,
    comments: 32,
    time: '2 часа назад',
  },
  {
    id: 2,
    user: 'Александр',
    avatar: '/images/avatar-alexander.jpg',
    location: 'Санкт-Петербург',
    thumbnail: '/images/tennis-backhand-analysis.jpg',
    title: 'Работа над бэкхендом 💪',
    likes: 182,
    comments: 18,
    time: '5 часов назад',
  },
  {
    id: 3,
    user: 'Дмитрий',
    avatar: '/images/coach-dmitry.jpg',
    location: 'Москва',
    thumbnail: '/images/tennis-player-tracking.jpg',
    title: 'ИИ-трекинг в действии 🤖',
    likes: 356,
    comments: 45,
    time: '1 день назад',
  },
  {
    id: 4,
    user: 'Сергей',
    avatar: '/images/avatar-pravais.jpg',
    location: 'Москва',
    thumbnail: '/images/tennis-serve.jpg',
    title: 'Тренировка подачи с тренером 🎯',
    likes: 124,
    comments: 15,
    time: '2 дня назад',
  },
];

const CommunityScreen: React.FC = () => {
  const [activeView, setActiveView] = useState<'feed' | 'leaderboard'>('feed');

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold text-black">Сообщество</h1>
        <button>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01" />
          </svg>
        </button>
      </div>

      {/* View Toggle */}
      <div className="px-4 flex gap-2 mb-3">
        <button
          onClick={() => setActiveView('feed')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            activeView === 'feed' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Лента
        </button>
        <button
          onClick={() => setActiveView('leaderboard')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            activeView === 'leaderboard' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Лидерборд
        </button>
      </div>

      {activeView === 'leaderboard' && (
        <>
          {/* Top 3 Podium */}
          <div className="px-4 mt-2">
            <div className="flex items-end justify-center gap-3">
              {/* 2nd */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img src={leaderboardData[1].avatar} alt={leaderboardData[1].name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-300" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-gray-300 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-800">2</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-900 mt-2">{leaderboardData[1].name}</span>
                <span className="text-[10px] text-gray-500">{leaderboardData[1].score}</span>
                <div className="w-16 h-12 bg-gray-200 rounded-t-lg mt-1 flex items-end justify-center">
                  <span className="text-lg">🥈</span>
                </div>
              </div>

              {/* 1st */}
              <div className="flex flex-col items-center -mt-3">
                <div className="relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="text-lg">👑</span>
                  </div>
                  <img src={leaderboardData[0].avatar} alt={leaderboardData[0].name} className="w-16 h-16 rounded-full object-cover" style={{ borderWidth: '3px', borderColor: '#FACC15' }} />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-800">1</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-900 mt-2">{leaderboardData[0].name}</span>
                <span className="text-[10px] text-purple-600 font-semibold">{leaderboardData[0].score}</span>
                <div className="w-16 h-16 bg-yellow-100 rounded-t-lg mt-1 flex items-end justify-center">
                  <span className="text-lg">🏆</span>
                </div>
              </div>

              {/* 3rd */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img src={leaderboardData[2].avatar} alt={leaderboardData[2].name} className="w-14 h-14 rounded-full object-cover" style={{ borderWidth: '2px', borderColor: '#D97706' }} />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-amber-600 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">3</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-900 mt-2">{leaderboardData[2].name}</span>
                <span className="text-[10px] text-gray-500">{leaderboardData[2].score}</span>
                <div className="w-16 h-8 bg-amber-100 rounded-t-lg mt-1 flex items-end justify-center">
                  <span className="text-lg">🥉</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="px-4 mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Рейтинг игроков</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {leaderboardData.map((player, index) => (
                <div
                  key={player.id}
                  className={`flex items-center gap-3 p-4 ${
                    player.isUser ? 'bg-purple-50' : ''
                  } ${index !== leaderboardData.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className={`w-6 text-center font-bold text-sm ${
                    player.rank === 1 ? 'text-yellow-500' :
                    player.rank === 2 ? 'text-gray-400' :
                    player.rank === 3 ? 'text-amber-600' :
                    'text-gray-500'
                  }`}>
                    {player.rank}
                  </span>
                  <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className={`font-semibold text-sm ${player.isUser ? 'text-purple-700' : 'text-gray-900'}`}>
                      {player.name} {player.isUser && <span className="text-xs text-purple-500">(вы)</span>}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500">Ур. {player.level}</span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{player.badges} 🏅</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{player.score}</p>
                    <p className="text-xs text-green-600">🔥 {player.streak} дн.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Stats */}
          <div className="px-4 mt-6 mb-4">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Твоя статистика</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl border border-gray-200 p-3 text-center shadow-stat">
                <p className="text-2xl font-bold text-purple-600">5</p>
                <p className="text-xs text-gray-500">Место</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-3 text-center shadow-stat">
                <p className="text-2xl font-bold text-green-600">10</p>
                <p className="text-xs text-gray-500">Серия</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-3 text-center shadow-stat">
                <p className="text-2xl font-bold text-yellow-600">5</p>
                <p className="text-xs text-gray-500">Бейджей</p>
              </div>
            </div>
          </div>
        </>
      )}

      {activeView === 'feed' && (
        <>
          {/* Video Feed */}
          <div className="space-y-0">
            {videos.map((video) => (
              <div key={video.id} className="border-t border-gray-200">
                {/* Video header */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={video.avatar} alt={video.user} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{video.user}</p>
                      <p className="text-xs text-gray-500">{video.location}</p>
                    </div>
                  </div>
                  <button className="text-gray-500">···</button>
                </div>

                {/* Video thumbnail */}
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full aspect-square object-cover" />
                  <div className="absolute bottom-3 left-3 bg-black/60 rounded-full px-3 py-1.5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video actions */}
                <div className="flex items-center justify-between px-4 pt-3 pb-1">
                  <div className="flex items-center gap-4">
                    <button>
                      <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                    <button>
                      <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                      </svg>
                    </button>
                    <button>
                      <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </button>
                  </div>
                  <button>
                    <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                  </button>
                </div>

                {/* Video info */}
                <div className="px-4 pb-4">
                  <p className="text-sm font-semibold text-gray-900">{video.likes} отметок «Нравится»</p>
                  <p className="text-sm text-gray-900 mt-1">
                    <span className="font-semibold">{video.user}</span> {video.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Посмотреть все комментарии ({video.comments})</p>
                  <p className="text-xs text-gray-400 mt-1">{video.time.toUpperCase()}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CommunityScreen;
