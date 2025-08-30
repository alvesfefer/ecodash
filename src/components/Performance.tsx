
import React from 'react'
import {TrendingUp, Recycle, Battery, Cpu, Smartphone, Zap} from 'lucide-react'

const Performance: React.FC = () => {
  const recyclingData = [
    { name: 'Lítio (Baterias)', value: 35, amount: '17.5K', color: '#10B981', icon: Battery },
    { name: 'Cobre (Circuitos)', value: 28, amount: '14K', color: '#3B82F6', icon: Cpu },
    { name: 'Alumínio (Chassis)', value: 22, amount: '11K', color: '#8B5CF6', icon: Smartphone },
    { name: 'Terras Raras', value: 15, amount: '7.5K', color: '#F59E0B', icon: Zap },
  ]

  const metrics = [
    { label: 'Eficiência Energética', value: '94%', change: '+12%', trend: 'up', color: 'text-green-600' },
    { label: 'Redução CO₂', value: '2.3t', change: '+8%', trend: 'up', color: 'text-blue-600' },
    { label: 'Economia de Água', value: '15.2K L', change: '+15%', trend: 'up', color: 'text-purple-600' },
    { label: 'Taxa de Reciclagem', value: '87%', change: '+5%', trend: 'up', color: 'text-orange-600' },
  ]

  // Calculate angles for pie chart
  let cumulativeAngle = 0
  const segments = recyclingData.map(item => {
    const startAngle = cumulativeAngle
    const angle = (item.value / 100) * 360
    cumulativeAngle += angle
    return { ...item, startAngle, angle }
  })

  const createPath = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle)
    const end = polarToCartesian(centerX, centerY, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ")
  }

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Performance Ambiental</h2>
          <p className="text-sm text-gray-600">Indicadores de sustentabilidade</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">{metric.label}</span>
              <span className={`text-xs font-semibold ${metric.color}`}>{metric.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Recycling Chart */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Recycle className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-bold text-gray-800">Componentes Tecnológicos Reciclados</h3>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Pie Chart */}
          <div className="relative">
            <svg width="200" height="200" className="transform -rotate-90">
              {segments.map((segment, index) => {
                const Icon = segment.icon
                return (
                  <path
                    key={index}
                    d={createPath(100, 100, 80, segment.startAngle, segment.startAngle + segment.angle)}
                    fill={segment.color}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                )
              })}
              <circle cx="100" cy="100" r="45" fill="white" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">50K</div>
                <div className="text-xs text-gray-600">Total</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-3">
            {recyclingData.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <Icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-800">{item.amount}</div>
                    <div className="text-xs text-gray-500">{item.value}%</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
