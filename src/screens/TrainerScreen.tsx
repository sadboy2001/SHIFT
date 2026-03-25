import React from 'react';

const TrainerScreen: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      {/* Hero section with coach photo */}
      <div className="relative w-full h-[250px] bg-gray-200">
        <img
          src="/images/coach-dmitry.jpg"
          alt="Дмитрий"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute top-6 left-4">
          <h1 className="text-4xl font-black text-white tracking-wide">ДМИТРИЙ</h1>
          <p className="text-lg font-bold text-white">СТАРШИЙ ТРЕНЕР</p>
        </div>
      </div>

      {/* Experience badge */}
      <div className="mx-4 -mt-4 z-10 relative">
        <div className="bg-purple-100 border border-purple-300 rounded-xl px-4 py-2 text-center">
          <span className="text-sm font-semibold text-gray-800">Опыт: 10 лет | Преподает: 1.5 года</span>
        </div>
      </div>

      {/* Info card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-gray-200 p-5">
        <ul className="space-y-2.5 text-[15px] text-gray-800">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0"></span>
            <span>Ученики через Авито или знакомых</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0"></span>
            <span>Работает в клубах около дома</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0"></span>
            <span>Организовывает соревнования на общественных (бесплатных) кортах в СВАО</span>
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-4 mt-4">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl py-4 rounded-2xl transition-colors">
          Записаться на занятие
        </button>
      </div>

      {/* Ratings section */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-gray-900">Рейтинг и Отзывы</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-bold text-purple-600">4.9</span>
          <span className="text-lg text-gray-500">/5</span>
          <div className="flex items-center ml-1">
            {[1, 2, 3, 4].map((i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="half-star">
                  <stop offset="90%" stopColor="currentColor" />
                  <stop offset="90%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 ml-auto">32 отзывы</span>
        </div>

        {/* Reviews */}
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
};

export default TrainerScreen;
