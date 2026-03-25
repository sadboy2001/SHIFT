import React from 'react';

const KnowledgeBaseScreen: React.FC = () => {
  const categories = [
    { id: 1, title: 'Техника', icon: '🎾', articles: 12, items: ['Подача', 'Форхенд', 'Бэкхенд'] },
    { id: 2, title: 'Тактика', icon: '🧠', articles: 8, items: ['Атака', 'Защита', 'Переходы'] },
    { id: 3, title: 'Физическая подготовка', icon: '💪', articles: 15, items: ['Выносливость', 'Скорость', 'Гибкость'] },
    { id: 4, title: 'Психология', icon: '🎯', articles: 6, items: ['Концентрация', 'Управление стрессом'] },
    { id: 5, title: 'Питание', icon: '🥗', articles: 10, items: ['До тренировки', 'После тренировки'] },
    { id: 6, title: 'Оборудование', icon: '🏸', articles: 7, items: ['Выбор ракетки', 'Струны'] },
  ];

  const popularArticles = [
    { title: 'Как улучшить подачу', category: 'Техника', time: '5 мин' },
    { title: '5 упражнений для скорости', category: 'Физическая подготовка', time: '8 мин' },
    { title: 'Психология тай-брейка', category: 'Психология', time: '6 мин' },
    { title: 'Как читать соперника', category: 'Тактика', time: '7 мин' },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">База знаний</h1>
        <p className="text-gray-500 text-sm mt-1">Всё о теннисе в одном месте</p>
      </div>

      {/* Search */}
      <div className="px-4 mt-2">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Поиск статей..."
            className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>

      {/* Popular Articles */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Популярные статьи</h2>
        <div className="space-y-2">
          {popularArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">{article.title}</p>
                <p className="text-xs text-gray-500">{article.category} • {article.time}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Категории</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl">{category.icon}</span>
              </div>
              <p className="font-bold text-gray-900">{category.title}</p>
              <p className="text-xs text-gray-500 mt-1">{category.articles} статей</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {category.items.slice(0, 2).map((item, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tip of the day */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Совет дня</h2>
        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-semibold text-gray-900">Держите корпус расслабленным</p>
              <p className="text-sm text-gray-600 mt-1">
                Напряжённые мышцы замедляют движение. Расслабьте плечи перед каждым ударом для лучшего контроля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseScreen;
