import React from 'react';

interface MoreMenuScreenProps {
  onNavigate: (screen: 'menu' | 'training') => void;
}

const MoreMenuScreen: React.FC<MoreMenuScreenProps> = ({ onNavigate }) => {
  const menuItems = [
    { id: 1, title: 'План тренировок', subtitle: 'Создай свой план', icon: '🎾', onClick: () => onNavigate('training') },
  ];

  const settingsItems = [
    { title: 'Настройки', icon: '⚙️' },
    { title: 'Уведомления', icon: '🔔' },
    { title: 'Помощь', icon: '❓' },
    { title: 'О приложении', icon: 'ℹ️' },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">Ещё</h1>
      </div>

      <div className="px-4 mt-2 space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className="w-full bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors active:bg-gray-100"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="flex-1 text-left">
              <p className="font-bold text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>

      {/* База знаний - видео */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">База знаний</h2>
        
        {/* Техника */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Техника</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative">
              <img src="/images/tennis-serve.jpg" alt="Подача" className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">5:23</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Техника подачи</p>
              <p className="text-xs text-gray-500">Основы первой подачи</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative">
              <img src="/images/tennis-backhand-analysis.jpg" alt="Бэкхенд" className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">8:45</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Двуручный бэкхенд</p>
              <p className="text-xs text-gray-500">Контроль и точность</p>
            </div>
          </div>
        </div>

        {/* Тактика */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Тактика</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative">
              <img src="/images/tennis-player-tracking.jpg" alt="Тактика" className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">12:10</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Атака с задней линии</p>
              <p className="text-xs text-gray-500">Когда и как переходить в атаку</p>
            </div>
          </div>
        </div>

        {/* Физподготовка */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Физподготовка</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative h-32 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl">💪</span>
                <p className="text-sm text-gray-500 mt-2">Упражнения для ног</p>
              </div>
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">6:30</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Спринты и боковые шаги</p>
              <p className="text-xs text-gray-500">Скорость и координация</p>
            </div>
          </div>
        </div>

        {/* Психология */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Психология</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative h-32 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl">🎯</span>
                <p className="text-sm text-gray-500 mt-2">Фокус и концентрация</p>
              </div>
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">9:15</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Управление стрессом</p>
              <p className="text-xs text-gray-500">Как сохранять спокойствие в матчах</p>
            </div>
          </div>
        </div>

        {/* Питание */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Питание</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative h-32 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl">🥗</span>
                <p className="text-sm text-gray-500 mt-2">Рацион спортсмена</p>
              </div>
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">4:50</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Питание до и после тренировки</p>
              <p className="text-xs text-gray-500">Максимальная эффективность</p>
            </div>
          </div>
        </div>

        {/* Оборудование */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Оборудование</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="relative h-32 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl">🏸</span>
                <p className="text-sm text-gray-500 mt-2">Выбор ракетки</p>
              </div>
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">7:20</span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-900">Как выбрать ракетку</p>
              <p className="text-xs text-gray-500">Вес, баланс и натяжение</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Настройки</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {settingsItems.map((item, index) => (
            <button
              key={item.title}
              className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                index !== settingsItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="flex-1 text-left font-medium text-gray-900">{item.title}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-6 text-center">
        <p className="text-xs text-gray-400">Теннис Тренер v1.0.0</p>
      </div>
    </div>
  );
};

export default MoreMenuScreen;
