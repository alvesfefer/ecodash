
import React from 'react'
import {Leaf, BarChart3, Target, Users, AlertTriangle} from 'lucide-react'

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
    { id: 'goals', label: 'Metas', icon: Target },
    { id: 'impact', label: 'Impacto', icon: Leaf },
    { id: 'team', label: 'Equipe', icon: Users },
    { id: 'risks', label: 'Riscos', icon: AlertTriangle },
  ]

  return (
    <header className="bg-white shadow-lg border-b-4 border-green-500">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="flex items-center space-x-3">
              <a 
                href="https://ecofloww.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 transition-transform duration-200 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">EcoFlow</h1>
                  <p className="text-sm text-gray-600">Sodabug</p>
                </div>
              </a>
            </div>
            <div className="hidden lg:block h-8 w-px bg-gray-300 mx-4"></div>
            <div className="hidden lg:block">
              <h2 className="text-xl font-semibold text-gray-800">Painel de Impacto Ambiental – 2025</h2>
              <p className="text-sm text-gray-600">Monitoramento em tempo real</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
