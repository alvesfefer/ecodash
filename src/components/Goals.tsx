
import React from 'react'
import {Target, TrendingUp, TrendingDown, Minus} from 'lucide-react'

const Goals: React.FC = () => {
  const goals = [
    {
      name: 'Água Protegida',
      progress: 80,
      target: '1.2M litros',
      current: '960K litros',
      trend: 'up',
      change: '+12%',
      color: 'bg-blue-500'
    },
    {
      name: 'Itens Reciclados',
      progress: 65,
      target: '75K unidades',
      current: '48.7K unidades',
      trend: 'up',
      change: '+8%',
      color: 'bg-green-500'
    },
    {
      name: 'Usuários Engajados',
      progress: 50,
      target: '30K pessoas',
      current: '15K pessoas',
      trend: 'up',
      change: '+15%',
      color: 'bg-purple-500'
    },
    {
      name: 'Conquistas',
      progress: 40,
      target: '500 badges',
      current: '200 badges',
      trend: 'down',
      change: '-2%',
      color: 'bg-orange-500'
    },
    {
      name: 'Redução de CO₂',
      progress: 75,
      target: '100 toneladas',
      current: '75 toneladas',
      trend: 'neutral',
      change: '0%',
      color: 'bg-emerald-500'
    },
    {
      name: 'Parcerias Ativas',
      progress: 90,
      target: '50 empresas',
      current: '45 empresas',
      trend: 'up',
      change: '+25%',
      color: 'bg-indigo-500'
    }
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Minus className="w-4 h-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-50'
      case 'down':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Metas e Progresso</h2>
            <p className="text-gray-600">Acompanhamento detalhado dos objetivos ambientais</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{goal.name}</h3>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTrendColor(goal.trend)}`}>
                  {getTrendIcon(goal.trend)}
                  <span>{goal.change}</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{goal.current}</span>
                  <span>{goal.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${goal.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${goal.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">{goal.progress}%</span>
                <span className="text-sm text-gray-500">da meta atingida</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals
