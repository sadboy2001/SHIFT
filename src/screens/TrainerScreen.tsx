import React, { useState } from 'react';

const trainers = [
  {
    id: 1,
    name: 'Дмитрий',
    role: 'Теннисный тренер',
    experience: '10 лет',
    rating: 4.9,
    reviews: 32,
    photo: '/images/coach-dmitry.jpg',
    club: 'Москва, СВАО',
    price: {
      analysis: 1500,
      live: 3000,
    },
  },
  {
    id: 2,
    name: 'Анна',
    role: 'Теннисный тренер',
    experience: '7 лет',
    rating: 4.8,
    reviews: 24,
    photo: '/images/tennis-serve.jpg',
    club: 'Москва, САО',
    price: {
      analysis: 1200,
      live: 2500,
    },
  },
  {
    id: 3,
    name: 'Александр',
    role: 'Про-тренер',
    experience: '15 лет',
    rating: 4.95,
    reviews: 56,
    photo: '/images/tennis-backhand-analysis.jpg',
    club: 'Москва, ЦАО',
    price: {
      analysis: 2500,
      live: 5000,
    },
  },
  {
    id: 4,
    name: 'Сергей',
    role: 'Теннисный тренер',
    experience: '12 лет',
    rating: 4.85,
    reviews: 29,
    photo: '/images/tennis-player-tracking.jpg',
    club: 'Москва, ЗАО',
    price: {
      analysis: 1800,
      live: 3500,
    },
  },
];

type SortOrder = 'default' | 'asc' | 'desc';

const TrainerScreen: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');

  const filtered = trainers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.club.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'asc') return a.price.analysis - b.price.analysis;
    if (sortOrder === 'desc') return b.price.analysis - a.price.analysis;
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
              Опыт: {selectedTrainer.experience}
            </span>
          </div>
        </div>

        {/* Services */}
        <div className="mx-4 mt-4 space-y-3">
          {/* Video Analysis */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Разбор техники по видео</p>
                <p className="text-sm text-gray-500">Тренер проанализирует вашу технику</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-purple-50 rounded-xl p-3">
              <span className="text-sm text-gray-600">Стоимость</span>
              <span className="text-lg font-bold text-purple-600">{selectedTrainer.price.analysis} ₽</span>
            </div>
          </div>

          {/* Live Training */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Тренировка по видео-связи</p>
                <p className="text-sm text-gray-500">Занятие в прямом эфире</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-purple-50 rounded-xl p-3">
              <span className="text-sm text-gray-600">За час</span>
              <span className="text-lg font-bold text-purple-600">{selectedTrainer.price.live} ₽</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 mt-4 flex gap-3">
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 rounded-2xl transition-colors">
            Разбор видео
          </button>
          <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-colors">
            Записаться
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
              <p className="text-[15px] text-gray-800">"Отличный разбор техники, помог улучшить подачу!"</p>
              <p className="text-sm text-gray-500 mt-1">— Анна К.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <p className="text-[15px] text-gray-800">"Занятие по видео-связи как на реальном корте!"</p>
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

      {/* Services info */}
      <div className="px-4 mt-2">
        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200 shadow-card">
          <h2 className="font-bold text-gray-900 mb-2">Что мы предлагаем</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700"><span className="font-semibold">Разбор техники</span> — тренер проанализирует вашу запись</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700"><span className="font-semibold">Занятие онлайн</span> — тренировка в прямом эфире</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
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
              className="w-full bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4 hover:bg-gray-50 transition-all shadow-card hover:shadow-card-hover"
            >
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <p className="font-bold text-gray-900">{trainer.name}</p>
                <p className="text-sm text-gray-500">{trainer.role} • {trainer.experience}</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">{trainer.rating}</span>
                  <span className="text-xs text-gray-400">({trainer.reviews})</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{trainer.club}</p>
                <p className="text-sm font-bold text-purple-600">от {trainer.price.analysis} ₽</p>
                <p className="text-xs text-gray-500">за разбор</p>
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
