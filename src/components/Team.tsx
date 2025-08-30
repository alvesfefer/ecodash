
import React from 'react'
import {Users, CheckCircle, Clock, Rocket} from 'lucide-react'

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Maria Fernanda Souza de Miranda',
      role: 'Data Scientist',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'completed',
      task: 'Análise de Dados Ambientais',
      progress: 100
    },
    {
      name: 'Fernanda Alves de Camargo',
      role: 'Desenvolvedor Frontend',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'in-progress',
      task: 'Dashboard de Métricas',
      progress: 75
    },
    {
      name: 'Abner Martins de Camargo',
      role: 'Desenvolvedor Full Stack',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'in-progress',
      task: 'Integração de APIs',
      progress: 60
    },
    {
      name: 'Miguel Henrique Lima Domingues',
      role: 'Desenvolvedor Back-end',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'upcoming',
      task: 'Otimização de Performance',
      progress: 25
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />
      case 'upcoming':
        return <Rocket className="w-5 h-5 text-orange-600" />
      default:
        return <Clock className="w-5 h-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200'
      case 'in-progress':
        return 'bg-blue-50 border-blue-200'
      case 'upcoming':
        return 'bg-orange-50 border-orange-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-blue-500'
      case 'upcoming':
        return 'bg-orange-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Equipe EcoFlow</h2>
            <p className="text-gray-600">Nossos especialistas em sustentabilidade e tecnologia</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className={`rounded-xl p-6 border-2 transition-all duration-200 hover:shadow-lg ${getStatusColor(member.status)}`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                    {getStatusIcon(member.status)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Tarefa Atual</h4>
                  <p className="text-gray-700 text-sm">{member.task}</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progresso</span>
                    <span>{member.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(member.status)}`}
                      style={{ width: `${member.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
            <div className="text-2xl font-bold text-green-700">1</div>
            <div className="text-sm text-green-600">Tarefas Concluídas</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">2</div>
            <div className="text-sm text-blue-600">Em Andamento</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">1</div>
            <div className="text-sm text-orange-600">Próximas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
