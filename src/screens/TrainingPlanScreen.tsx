import React from 'react';

const TrainingPlanScreen: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">План тренировок</h1>
        <p className="text-gray-500 text-sm mt-1">Создай свой план</p>
      </div>

      {/* Create Plan Section */}
      <div className="px-4 mt-2">
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <h2 className="font-bold text-gray-900 mb-3">Мой план</h2>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-500">Название плана</label>
              <input 
                type="text" 
                placeholder="Например: Подготовка к турниру"
                className="w-full mt-1 bg-gray-100 rounded-xl py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-500">Длительность (недели)</label>
              <div className="flex gap-2 mt-1">
                {[2, 4, 6, 8, 12].map((weeks) => (
                  <button 
                    key={weeks}
                    className="flex-1 bg-gray-100 hover:bg-purple-100 hover:border-purple-300 border border-gray-200 rounded-xl py-2 text-sm font-medium text-gray-700 transition-colors"
                  >
                    {weeks}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Тренировок в неделю</label>
              <div className="flex gap-2 mt-1">
                {[1, 2, 3, 4, 5].map((freq) => (
                  <button 
                    key={freq}
                    className="flex-1 bg-gray-100 hover:bg-purple-100 hover:border-purple-300 border border-gray-200 rounded-xl py-2 text-sm font-medium text-gray-700 transition-colors"
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Exercises */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <h2 className="font-bold text-gray-900 mb-3">Добавить упражнения</h2>
          
          <div className="space-y-2">
            {['Подача', 'Форхенд', 'Бэкхенд', 'Волей', 'Движение', 'Приём подачи'].map((exercise, index) => (
              <button 
                key={index}
                className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-purple-50 rounded-xl transition-colors"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">🎾</span>
                </div>
                <span className="flex-1 text-left font-medium text-gray-900">{exercise}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Exercises */}
      <div className="px-4 mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Моя программа</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="space-y-2">
            {['Подача', 'Бэкхенд', 'Движение'].map((exercise, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl"
              >
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{index + 1}</span>
                </div>
                <span className="flex-1 font-medium text-gray-900">{exercise}</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Button */}
      <div className="px-4 mt-4">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl py-4 rounded-2xl transition-colors">
          Создать план
        </button>
      </div>
    </div>
  );
};

export default TrainingPlanScreen;
