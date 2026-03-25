import React, { useState } from 'react';

const trainers = [
  { id: 1, name: 'Дмитрий', photo: '/images/coach-dmitry.jpg', specialization: 'Подача, Форхенд' },
  { id: 2, name: 'Анна', photo: '/images/tennis-serve.jpg', specialization: 'Подача, Бэкхенд' },
  { id: 3, name: 'Александр', photo: '/images/tennis-backhand-analysis.jpg', specialization: 'Бэкхенд, Про-уровень' },
  { id: 4, name: 'Сергей', photo: '/images/tennis-player-tracking.jpg', specialization: 'Форхенд, Скорость' },
];

const AnalysisScreen: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);
  const [showAiAnalysis, setShowAiAnalysis] = useState(false);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-black">Разбор от Тренера</h1>
      </div>

      {/* Video analysis area */}
      <div className="mx-4 rounded-2xl overflow-hidden relative bg-gray-800">
        <img
          src="/images/tennis-backhand-analysis.jpg"
          alt="Backhand analysis"
          className="w-full h-[280px] object-cover grayscale"
        />

        {/* Skeleton tracking overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 280">
          <line x1="210" y1="40" x2="200" y2="75" stroke="#9333EA" strokeWidth="3" />
          <line x1="175" y1="75" x2="225" y2="75" stroke="#9333EA" strokeWidth="3" />
          <line x1="225" y1="75" x2="260" y2="55" stroke="#9333EA" strokeWidth="3" />
          <line x1="260" y1="55" x2="290" y2="30" stroke="#9333EA" strokeWidth="3" />
          <line x1="290" y1="30" x2="310" y2="15" stroke="#9333EA" strokeWidth="2" />
          <polygon points="310,15 305,22 313,20" fill="#9333EA" />
          <line x1="175" y1="75" x2="150" y2="110" stroke="#AAFF00" strokeWidth="3" />
          <line x1="150" y1="110" x2="140" y2="145" stroke="#AAFF00" strokeWidth="3" />
          <line x1="200" y1="75" x2="195" y2="150" stroke="#9333EA" strokeWidth="3" />
          <line x1="175" y1="150" x2="215" y2="150" stroke="#9333EA" strokeWidth="3" />
          <line x1="175" y1="150" x2="155" y2="210" stroke="#9333EA" strokeWidth="3" />
          <line x1="155" y1="210" x2="140" y2="260" stroke="#9333EA" strokeWidth="3" />
          <line x1="215" y1="150" x2="240" y2="210" stroke="#AAFF00" strokeWidth="3" />
          <line x1="240" y1="210" x2="270" y2="260" stroke="#AAFF00" strokeWidth="3" />
          <line x1="140" y1="260" x2="120" y2="260" stroke="#AAFF00" strokeWidth="2" />
          <polygon points="120,260 127,256 127,264" fill="#AAFF00" />
          <line x1="270" y1="260" x2="295" y2="260" stroke="#AAFF00" strokeWidth="2" />
          <polygon points="295,260 288,256 288,264" fill="#AAFF00" />
          <circle cx="210" cy="40" r="5" fill="#9333EA" />
          <circle cx="225" cy="75" r="5" fill="#9333EA" />
          <circle cx="175" cy="75" r="5" fill="#9333EA" />
          <circle cx="260" cy="55" r="5" fill="#9333EA" />
          <circle cx="200" cy="75" r="5" fill="#9333EA" />
          <circle cx="195" cy="150" r="5" fill="#9333EA" />
          <circle cx="175" cy="150" r="5" fill="#9333EA" />
          <circle cx="215" cy="150" r="5" fill="#9333EA" />
          <circle cx="150" cy="110" r="5" fill="#AAFF00" />
          <circle cx="140" cy="145" r="5" fill="#AAFF00" />
          <circle cx="155" cy="210" r="6" fill="#9333EA" stroke="#9333EA" strokeWidth="2" />
          <circle cx="140" cy="260" r="6" fill="#AAFF00" stroke="#AAFF00" strokeWidth="2" />
          <circle cx="240" cy="210" r="6" fill="#AAFF00" stroke="#AAFF00" strokeWidth="2" />
          <circle cx="270" cy="260" r="6" fill="#AAFF00" stroke="#AAFF00" strokeWidth="2" />
          <circle cx="300" cy="25" r="8" fill="none" stroke="#AAFF00" strokeWidth="2" />
        </svg>

        {/* Video progress bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <div className="flex items-center gap-0.5">
                <div className="w-3 h-4 bg-white rounded-sm"></div>
                <div className="w-3 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            <div className="flex-1 h-1 bg-white/30 rounded-full relative">
              <div className="absolute left-0 top-0 w-3/5 h-full bg-purple-500 rounded-full"></div>
              <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Analysis Button */}
      <div className="px-4 mt-4">
        <button
          onClick={() => setShowAiAnalysis(!showAiAnalysis)}
          className={`w-full font-bold text-lg py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 ${
            showAiAnalysis ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <span className="bg-[#AAFF00] text-black text-xs font-bold px-1.5 py-0.5 rounded">AI</span>
          {showAiAnalysis ? 'Скрыть ИИ-анализ' : 'ИИ-анализ видео'}
        </button>
      </div>

      {/* AI Analysis Results */}
      {showAiAnalysis && (
        <div className="px-4 mt-4 bg-white rounded-2xl border border-gray-200 p-4">
          <h2 className="text-lg font-bold text-gray-900 mb-3">ИИ-анализ</h2>
          
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Стабильность замаха</span>
                <span className="text-sm font-semibold text-green-600">85%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Точность удара</span>
                <span className="text-sm font-semibold text-yellow-600">67%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Движение ног</span>
                <span className="text-sm font-semibold text-green-600">78%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">Позиция тела</span>
                <span className="text-sm font-semibold text-green-600">82%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-purple-50 rounded-xl p-3 border border-purple-100">
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Рекомендация:</span> Работайте над точностью удара. Держите локоть ближе к телу при замахе.
            </p>
          </div>
        </div>
      )}

      {/* Trainer Selection */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Выберите тренера</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {trainers.map((trainer) => (
            <button
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              className={`flex-shrink-0 flex flex-col items-center p-3 rounded-2xl border transition-colors ${
                selectedTrainer?.id === trainer.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-14 h-14 rounded-full object-cover mb-2"
              />
              <span className="text-sm font-semibold text-gray-900">{trainer.name}</span>
              <span className="text-xs text-gray-500 text-center mt-0.5">{trainer.specialization}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trainer Comment */}
      {selectedTrainer && (
        <div className="px-4 mt-4">
          <div className="flex items-start gap-3">
            <img
              src={selectedTrainer.photo}
              alt={selectedTrainer.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">{selectedTrainer.name}</p>
              <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-3">
                <p className="text-[15px] text-gray-800 leading-relaxed">
                  Отличная работа над бэкхендом!
                  <br />
                  Обрати внимание на положение стоп.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 mt-4">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl py-4 rounded-2xl transition-colors">
              Чат с {selectedTrainer.name}
            </button>
          </div>
        </div>
      )}

      {/* No trainer selected */}
      {!selectedTrainer && (
        <div className="px-4 mt-4 text-center py-4">
          <p className="text-gray-500">Выберите тренера для получения комментария</p>
        </div>
      )}
    </div>
  );
};

export default AnalysisScreen;
