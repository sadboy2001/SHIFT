import React, { useState } from 'react';

const weekSchedule = [
  { day: 'Пн', done: true, type: 'Подача', duration: 45 },
  { day: 'Вт', done: true, type: 'Бэкхенд', duration: 60 },
  { day: 'Ср', done: true, type: 'Движение', duration: 30 },
  { day: 'Чт', done: false, type: 'Форхенд', duration: 45, isToday: true },
  { day: 'Пт', done: false, type: 'Волей', duration: 40 },
  { day: 'Сб', done: false, type: 'Матч', duration: 90 },
  { day: 'Вс', done: false, type: 'Отдых', duration: 0 },
];

const exercises = [
  { id: 1, name: 'Подача', icon: '🎾', duration: 15, difficulty: 'Средняя' },
  { id: 2, name: 'Форхенд', icon: '💪', duration: 12, difficulty: 'Легкая' },
  { id: 3, name: 'Бэкхенд', icon: '🎯', duration: 12, difficulty: 'Средняя' },
  { id: 4, name: 'Волей', icon: '⚡', duration: 10, difficulty: 'Сложная' },
  { id: 5, name: 'Движение ног', icon: '🏃', duration: 15, difficulty: 'Средняя' },
  { id: 6, name: 'Приём подачи', icon: '🛡️', duration: 12, difficulty: 'Сложная' },
  { id: 7, name: 'Спринты', icon: '🔥', duration: 20, difficulty: 'Сложная' },
  { id: 8, name: 'Растяжка', icon: '🧘', duration: 10, difficulty: 'Легкая' },
];

const aiTips = [
  'Попробуйте увеличить количество повторений подачи до 50 за тренировку',
  'Добавьте больше упражнений на движение ног — это основа хорошего удара',
  'Включите больше коротких спринтов для улучшения скорости реакции',
  'Не забывайте про растяжку перед тренировкой',
];

const achievements = [
  { name: 'Первая неделя', icon: '⭐', unlocked: true },
  { name: '10 тренировок', icon: '🏆', unlocked: true },
  { name: 'Серия 7 дней', icon: '🔥', unlocked: true },
  { name: 'Марафонец', icon: '🏃', unlocked: false },
  { name: 'Мастер подачи', icon: '🎾', unlocked: false },
  { name: '100 часов', icon: '⏱️', unlocked: false },
];

const TrainingPlanScreen: React.FC = () => {
  const [selectedExercises, setSelectedExercises] = useState<number[]>([1, 2, 3]);

  const toggleExercise = (id: number) => {
    setSelectedExercises((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">План тренировок</h1>
        <p className="text-gray-500 text-sm mt-1">Твой персональный план</p>
      </div>

      {/* Stats Overview */}
      <div className="px-4 mt-2 grid grid-cols-3 gap-3">
        <div className="bg-purple-50 rounded-xl p-3 text-center border border-purple-100 shadow-stat">
          <p className="text-2xl font-bold text-purple-600">12</p>
          <p className="text-xs text-gray-500">Тренировок</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 text-center border border-purple-100 shadow-stat">
          <p className="text-2xl font-bold text-purple-600">7</p>
          <p className="text-xs text-gray-500">Серия дней</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 text-center border border-purple-100 shadow-stat">
          <p className="text-2xl font-bold text-purple-600">8.5ч</p>
          <p className="text-xs text-gray-500">Время</p>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Эта неделя</h2>
            <span className="text-sm text-purple-600 font-semibold">3/7 дней</span>
          </div>
          
          {/* Progress bar */}
          <div className="bg-gray-100 rounded-full h-2 mb-4">
            <div className="bg-purple-600 h-2 rounded-full transition-all" style={{ width: '43%' }}></div>
          </div>

          {/* Week calendar */}
          <div className="flex justify-between">
            {weekSchedule.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-2">{item.day}</span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${
                    item.done
                      ? 'bg-purple-600 text-white'
                      : item.isToday
                      ? 'bg-purple-100 text-purple-600 border-2 border-purple-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {item.done ? '✓' : item.type === 'Отдых' ? '😴' : i + 1}
                </div>
                <span className="text-[10px] text-gray-400 mt-1">
                  {item.duration > 0 ? `${item.duration}м` : ''}
                </span>
              </div>
            ))}
          </div>

          {/* Today's workout */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Сегодня</p>
                <p className="font-bold text-gray-900">{weekSchedule[3].type}</p>
                <p className="text-xs text-gray-500">{weekSchedule[3].duration} минут</p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
                Начать
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tips */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900">Совет ИИ</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {aiTips[Math.floor(Math.random() * aiTips.length)]}
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Достижения</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {achievements.map((achievement, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-20 flex flex-col items-center p-3 rounded-2xl ${
                achievement.unlocked
                  ? 'bg-purple-50 border border-purple-200'
                  : 'bg-gray-100 border border-gray-200'
              }`}
            >
              <span className={`text-2xl ${achievement.unlocked ? '' : 'grayscale opacity-40'}`}>
                {achievement.icon}
              </span>
              <span className={`text-[10px] text-center mt-1 font-medium ${
                achievement.unlocked ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {achievement.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Exercise Selection */}
      <div className="px-4 mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Упражнения</h2>
        <div className="space-y-2">
          {exercises.map((exercise) => {
            const isSelected = selectedExercises.includes(exercise.id);
            return (
              <button
                key={exercise.id}
                onClick={() => toggleExercise(exercise.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                  isSelected
                    ? 'bg-purple-50 border-purple-300'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{exercise.icon}</span>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900">{exercise.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-500">{exercise.duration} мин</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      exercise.difficulty === 'Легкая'
                        ? 'bg-green-100 text-green-700'
                        : exercise.difficulty === 'Средняя'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isSelected ? 'bg-purple-600' : 'bg-gray-200'
                }`}>
                  {isSelected && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Create Plan Button */}
      <div className="px-4 mt-4">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl py-4 rounded-2xl transition-all shadow-button hover:shadow-button-hover">
          Обновить план
        </button>
      </div>
    </div>
  );
};

export default TrainingPlanScreen;
