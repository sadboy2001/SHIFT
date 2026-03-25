import React, { useState } from 'react';

const trainers = [
  {
    id: 1,
    name: 'Дмитрий',
    role: 'Старший тренер',
    experience: '10 лет',
    teaches: '1.5 года',
    rating: 4.9,
    reviews: 32,
    photo: '/images/coach-dmitry.jpg',
    club: 'Москва, СВАО',
    price: 'от 3000 ₽/час',
    priceValue: 3000,
    specialization: ['Подача', 'Форхенд', 'Тактика'],
    format: 'очно',
  },
  {
    id: 2,
    name: 'Анна',
    role: 'Тренер по подаче',
    experience: '7 лет',
    teaches: '5 лет',
    rating: 4.8,
    reviews: 24,
    photo: '/images/tennis-serve.jpg',
    club: 'Москва, САО',
    price: 'от 2500 ₽/час',
    priceValue: 2500,
    specialization: ['Подача', 'Бэкхенд', 'Дети'],
    format: 'очно',
  },
  {
    id: 3,
    name: 'Александр',
    role: 'Про-тренер',
    experience: '15 лет',
    teaches: '8 лет',
    rating: 4.95,
    reviews: 56,
    photo: '/images/tennis-backhand-analysis.jpg',
    club: 'Москва, ЦАО',
    price: 'от 5000 ₽/час',
    priceValue: 5000,
    specialization: ['Про-уровень', 'Бэкхенд', 'Турниры'],
    format: 'очно',
  },
  {
    id: 4,
    name: 'Сергей',
    role: 'Тренер',
    experience: '12 лет',
    teaches: '4 года',
    rating: 4.85,
    reviews: 29,
    photo: '/images/tennis-player-tracking.jpg',
    club: 'Москва, ЗАО',
    price: 'от 4000 ₽/час',
    priceValue: 4000,
    specialization: ['Форхенд', 'Бэкхенд', 'Скорость'],
    format: 'очно',
  },
];

type SortOrder = 'default' | 'asc' | 'desc';
type FormatFilter = 'all' | 'очно' | 'удаленно';

const TrainerScreen: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');
  const [formatFilter, setFormatFilter] = useState<FormatFilter>('all');

  const filtered = trainers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.club.toLowerCase().includes(search.toLowerCase()) ||
      t.specialization.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesFormat = formatFilter === 'all' || t.format === formatFilter;
    return matchesSearch && matchesFormat;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'asc') return a.priceValue - b.priceValue;
    if (sortOrder === 'desc') return b.priceValue - a.priceValue;
    return 0;
  });

  if (selectedTrainer) {
    return (
      <div className="flex flex-col flex-1 overflow-y-auto pb-4">
        {/* Back button */}
        <div className="px-4 pt-4 pb-2 flex items-center gap-3">
          <button
            onClick={() => setSelectedTrainer(null)}
            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Hero */}
        <div className="relative w-full h-[250px] bg-gray-200">
          <img
            src={selectedTrainer.photo}
            alt={selectedTrainer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
          <div className="absolute top-6 left-4">
            <h1 className="text-4xl font-black text-white tracking-wide">{selectedTrainer.name.toUpperCase()}</h1>
            <p className="text-lg font-bold text-white">{selectedTrainer.role.toUpperCase()}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mx-4 -mt-4 z-10 relative">
          <div className="bg-purple-100 border border-purple-300 rounded-xl px-4 py-2 text-center">
            <span className="text-sm font-semibold text-gray-800">
              Опыт: {selectedTrainer.experience} | Преподает: {selectedTrainer.teaches}
            </span>
          </div>
        </div>

        {/* Specialization */}
        <div className="mx-4 mt-4 bg-white rounded-2xl border border-gray-200 p-5">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Специализация</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTrainer.specialization.map((spec, i) => (
              <span key={i} className="bg-purple-50 border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium">
                {spec}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-gray-600">{selectedTrainer.club}</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-600">{selectedTrainer.price}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 mt-4">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl py-4 rounded-2xl transition-colors">
            Записаться на занятие
          </button>
        </div>

        {/* Rating */}
        <div className="px-4 mt-6">
          <h2 className="text-xl font-bold text-gray-900">Рейтинг и Отзывы</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold text-purple-600">{selectedTrainer.rating}</span>
            <span className="text-lg text-gray-500">/5</span>
            <div className="flex items-center ml-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-auto">{selectedTrainer.reviews} отзывов</span>
          </div>

          <div className="mt-4 space-y-3">
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <p className="text-[15px] text-gray-800">"Отличный тренер, помог улучшить подачу!"</p>
              <p className="text-sm text-gray-500 mt-1">— Анна К.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <p className="text-[15px] text-gray-800">"Профессионал, рекомендую всем!"</p>
              <p className="text-sm text-gray-500 mt-1">— Иван П.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">Тренировки</h1>
        <p className="text-gray-500 text-sm mt-1">Найди своего тренера</p>
      </div>

      {/* Search */}
      <div className="px-4 mt-2">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Поиск тренера..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 mt-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['Все', 'Подача', 'Форхенд', 'Бэкхенд', 'Тактика', 'Дети', 'Про-уровень'].map((filter, i) => (
            <button
              key={filter}
              onClick={() => setSearch(filter === 'Все' ? '' : filter)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0 && search === ''
                  ? 'bg-purple-600 text-white'
                  : search.toLowerCase() === filter.toLowerCase()
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Format filter */}
      <div className="px-4 mt-3 flex gap-2">
        <button
          onClick={() => setFormatFilter('all')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            formatFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Все
        </button>
        <button
          onClick={() => setFormatFilter('очно')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            formatFilter === 'очно' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Очно
        </button>
        <button
          onClick={() => setFormatFilter('удаленно')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            formatFilter === 'удаленно' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Удаленно
        </button>
      </div>

      {/* Sort by price */}
      <div className="px-4 mt-3 flex gap-2">
        <button
          onClick={() => setSortOrder('default')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            sortOrder === 'default' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          По умолчанию
        </button>
        <button
          onClick={() => setSortOrder('asc')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            sortOrder === 'asc' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          ↑ Дешевле
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
            sortOrder === 'desc' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          ↓ Дороже
        </button>
      </div>

      {/* Trainer cards */}
      <div className="px-4 mt-4 space-y-3">
        {sorted.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Тренер не найден</p>
          </div>
        ) : (
          sorted.map((trainer) => (
            <button
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              className="w-full bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors active:bg-gray-100"
            >
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <p className="font-bold text-gray-900">{trainer.name}</p>
                <p className="text-sm text-gray-500">{trainer.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">{trainer.rating}</span>
                    <span className="text-xs text-gray-400">({trainer.reviews})</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    trainer.format === 'удаленно' ? 'bg-gray-100 text-gray-600' : 'bg-purple-50 text-purple-600'
                  }`}>
                    {trainer.format}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{trainer.club}</p>
                <p className="text-sm font-bold text-purple-600 mt-1">{trainer.price}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default TrainerScreen;
