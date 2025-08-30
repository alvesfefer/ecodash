
import React from 'react'
import {Droplets, Recycle, Users, Award, TrendingUp, TrendingDown} from 'lucide-react'

const Overview: React.FC = () => {
  const stats = [
    {
      icon: Droplets,
      title: 'Água Protegida',
      value: '1M+',
      unit: 'litros',
      progress: 80,
      trend: 'up',
      change: '+12%',
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Recycle,
      title: 'Itens Reciclados',
      value: '50K+',
      unit: 'unidades',
      progress: 65,
      trend: 'up',
      change: '+8%',
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Usuários Conscientes',
      value: '15K+',
      unit: 'pessoas',
      progress: 50,
      trend: 'up',
      change: '+15%',
      color: 'from-purple-500 to-indigo-500',
      bg: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Conquistas Desbloqueadas',
      value: '200+',
      unit: 'badges',
      progress: 40,
      trend: 'down',
      change: '-2%',
      color: 'from-orange-500 to-red-500',
      bg: 'bg-orange-50'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown
        
        return (
          <div key={index} className={`${stat.bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                <TrendIcon className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.unit}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Progresso da meta</span>
                <span>{stat.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Overview
