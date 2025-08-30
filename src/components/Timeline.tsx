
import React from 'react'
import {Rocket, Sprout, Gamepad2, FileText, Calendar} from 'lucide-react'

const Timeline: React.FC = () => {
  const milestones = [
    {
      icon: Rocket,
      title: 'Lançamento',
      date: 'Jan 2025',
      description: 'Lançamento oficial da plataforma EcoFlow',
      status: 'completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sprout,
      title: 'Campanha em Escolas',
      date: 'Mar 2025',
      description: 'Implementação do programa educacional',
      status: 'completed',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gamepad2,
      title: 'Gamificação',
      date: 'Jun 2025',
      description: 'Sistema de pontos e conquistas',
      status: 'in-progress',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FileText,
      title: 'Relatório Anual',
      date: 'Dez 2025',
      description: 'Relatório completo de impacto ambiental',
      status: 'upcoming',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'upcoming':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅ Concluído'
      case 'in-progress':
        return '⏳ Em andamento'
      case 'upcoming':
        return '🚀 Próximo'
      default:
        return 'Planejado'
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Timeline e Marcos</h2>
          <p className="text-gray-600">Principais conquistas e próximos passos</p>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon
            
            return (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute top-2 left-2 w-4 h-4 bg-gradient-to-br ${milestone.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className="ml-8 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all duration-200">
                  <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{milestone.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{milestone.date}</p>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">{milestone.description}</p>
                    
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(milestone.status)}`}>
                      {getStatusText(milestone.status)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline
