import React, { useState } from 'react';

const categories = ['Все', 'Подача', 'Удары', 'Движение', 'Тактика', 'Психология'];

const videos = [
  { id: 1, title: 'Техника подачи', duration: '5:23', image: '/images/tennis-serve.jpg', category: 'Подача', height: 180 },
  { id: 2, title: 'Бэкхенд с двух рук', duration: '8:45', image: '/images/tennis-backhand-analysis.jpg', category: 'Удары', height: 220 },
  { id: 3, title: 'Работа ног', duration: '6:30', image: '/images/tennis-player-tracking.jpg', category: 'Движение', height: 160 },
  { id: 4, title: 'Первая подача', duration: '4:12', image: '/images/tennis-serve.jpg', category: 'Подача', height: 200 },
  { id: 5, title: 'Форхенд по диагонали', duration: '7:18', image: '/images/tennis-backhand-analysis.jpg', category: 'Удары', height: 170 },
  { id: 6, title: 'Спринт к сетке', duration: '3:45', image: '/images/tennis-player-tracking.jpg', category: 'Движение', height: 190 },
  { id: 7, title: 'Тактика на грунте', duration: '12:10', image: '/images/tennis-serve.jpg', category: 'Тактика', height: 210 },
  { id: 8, title: 'Концентрация', duration: '9:15', image: '/images/tennis-backhand-analysis.jpg', category: 'Психология', height: 150 },
  { id: 9, title: 'Свеча над головой', duration: '5:50', image: '/images/tennis-player-tracking.jpg', category: 'Удары', height: 180 },
  { id: 10, title: 'Приём подачи', duration: '6:20', image: '/images/tennis-serve.jpg', category: 'Подача', height: 200 },
  { id: 11, title: 'Боковые шаги', duration: '4:30', image: '/images/tennis-backhand-analysis.jpg', category: 'Движение', height: 165 },
  { id: 12, title: 'Управление стрессом', duration: '7:45', image: '/images/tennis-player-tracking.jpg', category: 'Психология', height: 175 },
  { id: 13, title: 'Тактика на траве', duration: '10:20', image: '/images/tennis-serve.jpg', category: 'Тактика', height: 195 },
  { id: 14, title: 'Слайс с бэкхенда', duration: '5:15', image: '/images/tennis-backhand-analysis.jpg', category: 'Удары', height: 185 },
  { id: 15, title: 'Вторая подача', duration: '4:40', image: '/images/tennis-player-tracking.jpg', category: 'Подача', height: 170 },
];

const KnowledgeBaseScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [search, setSearch] = useState('');

  const filtered = videos.filter((v) => {
    const matchesCategory = selectedCategory === 'Все' || v.category === selectedCategory;
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const leftColumn = filtered.filter((_, i) => i % 2 === 0);
  const rightColumn = filtered.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">База знаний</h1>
        <p className="text-gray-500 text-sm mt-1">Видеоуроки от тренеров</p>
      </div>

      {/* Search */}
      <div className="px-4 mt-2">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Поиск видео..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Pinterest-style masonry grid */}
      <div className="px-4 mt-4 flex gap-2">
        <div className="flex-1 flex flex-col gap-2">
          {leftColumn.map((video) => (
            <div
              key={video.id}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow"
              style={{ height: video.height }}
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2">
                <div className="w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-semibold">{video.title}</p>
                <p className="text-white/70 text-xs mt-0.5">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {rightColumn.map((video) => (
            <div
              key={video.id}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow"
              style={{ height: video.height }}
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2">
                <div className="w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-semibold">{video.title}</p>
                <p className="text-white/70 text-xs mt-0.5">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseScreen;
