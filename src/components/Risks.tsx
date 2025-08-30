
import React from 'react'
import {AlertTriangle, Shield, TrendingDown, Users, Zap, DollarSign} from 'lucide-react'

const Risks: React.FC = () => {
  const risks = [
    {
      title: 'Baixo Engajamento de Usuários',
      description: 'Redução de 15% na participação ativa nos últimos 30 dias',
      severity: 'high',
      impact: 'Alto',
      probability: '70%',
      icon: Users
    },
    {
      title: 'Metas de Reciclagem Atrasadas',
      description: 'Meta de 75K itens reciclados pode não ser atingida até dezembro',
      severity: 'medium',
      impact: 'Médio',
      probability: '45%',
      icon: TrendingDown
    },
    {
      title: 'Dependência de Parcerias',
      description: 'Concentração de 60% das atividades em apenas 5 parceiros',
      severity: 'medium',
      impact: 'Médio',
      probability: '35%',
      icon: Zap
    },
    {
      title: 'Orçamento Limitado Q4',
      description: 'Recursos financeiros reduzidos podem impactar campanhas',
      severity: 'low',
      impact: 'Baixo',
      probability: '25%',
      icon: DollarSign
    }
  ]

  const actions = [
    {
      title: 'Programa de Incentivos',
      description: 'Implementar sistema de recompensas para aumentar engajamento',
      priority: 'high',
      deadline: '15 dias',
      responsible: 'Equipe de Marketing',
      status: 'in-progress'
    },
    {
      title: 'Diversificação de Parcerias',
      description: 'Estabelecer acordos com 10 novos parceiros estratégicos',
      priority: 'medium',
      deadline: '30 dias',
      responsible: 'Business Development',
      status: 'planned'
    },
    {
      title: 'Otimização de Processos',
      description: 'Automatizar coleta de dados para acelerar reciclagem',
      priority: 'medium',
      deadline: '45 dias',
      responsible: 'Equipe Técnica',
      status: 'in-progress'
    },
    {
      title: 'Captação de Recursos',
      description: 'Buscar investidores e subsídios governamentais',
      priority: 'high',
      deadline: '60 dias',
      responsible: 'Diretoria',
      status: 'planned'
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200'
      case 'medium':
        return 'bg-orange-50 border-orange-200'
      case 'low':
        return 'bg-yellow-50 border-yellow-200'
      default:
        return 'bg-gray-50 border-gray-200'
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-orange-100 text-orange-800'
      case 'low':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-green-500'
      case 'medium':
        return 'bg-blue-500'
      case 'low':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'planned':
        return 'bg-gray-100 text-gray-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-progress':
        return '⏳ Em Andamento'
      case 'planned':
        return '📋 Planejado'
      case 'completed':
        return '✅ Concluído'
      default:
        return 'Pendente'
    }
  }

  return (
    <div className="space-y-8">
      {/* Risks Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Riscos Identificados</h2>
            <p className="text-gray-600">Monitoramento de ameaças ao projeto</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {risks.map((risk, index) => {
            const Icon = risk.icon
            
            return (
              <div key={index} className={`rounded-xl p-5 border-2 transition-all duration-200 hover:shadow-md ${getSeverityColor(risk.severity)}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-800">{risk.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBadge(risk.severity)}`}>
                        {risk.severity === 'high' ? 'Alto' : risk.severity === 'medium' ? 'Médio' : 'Baixo'}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">{risk.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Impacto: <strong>{risk.impact}</strong></span>
                      <span className="text-gray-600">Probabilidade: <strong>{risk.probability}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Actions Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Ações Corretivas</h2>
            <p className="text-gray-600">Medidas para mitigar riscos identificados</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {actions.map((action, index) => (
            <div key={index} className="bg-green-50 rounded-xl p-5 border-2 border-green-200 transition-all duration-200 hover:shadow-md">
              <div className="flex items-start space-x-4">
                <div className={`w-3 h-3 ${getPriorityColor(action.priority)} rounded-full mt-2 flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{action.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}>
                      {getStatusText(action.status)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{action.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prazo:</span>
                      <span className="font-medium text-gray-800">{action.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Responsável:</span>
                      <span className="font-medium text-gray-800">{action.responsible}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prioridade:</span>
                      <span className={`font-medium ${action.priority === 'high' ? 'text-red-600' : action.priority === 'medium' ? 'text-orange-600' : 'text-gray-600'}`}>
                        {action.priority === 'high' ? 'Alta' : action.priority === 'medium' ? 'Média' : 'Baixa'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 rounded-xl p-4 text-center border border-red-200">
          <div className="text-2xl font-bold text-red-700">1</div>
          <div className="text-sm text-red-600">Risco Alto</div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-200">
          <div className="text-2xl font-bold text-orange-700">2</div>
          <div className="text-sm text-orange-600">Risco Médio</div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 text-center border border-yellow-200">
          <div className="text-2xl font-bold text-yellow-700">1</div>
          <div className="text-sm text-yellow-600">Risco Baixo</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
          <div className="text-2xl font-bold text-green-700">4</div>
          <div className="text-sm text-green-600">Ações Planejadas</div>
        </div>
      </div>
    </div>
  )
}

export default Risks
