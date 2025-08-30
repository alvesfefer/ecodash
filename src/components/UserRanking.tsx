
import React from 'react'
import {Trophy, Medal, Award, Star, TrendingUp} from 'lucide-react'

const UserRanking: React.FC = () => {
  const topUsers = [
    {
      rank: 1,
      name: 'Marina Costa',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      points: 2450,
      waterSaved: '15.2K litros',
      itemsRecycled: 89,
      badges: 12,
      level: 'Eco Master',
      change: '+15%'
    },
    {
      rank: 2,
      name: 'Roberto Silva',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      points: 2180,
      waterSaved: '12.8K litros',
      itemsRecycled: 76,
      badges: 10,
      level: 'Eco Expert',
      change: '+8%'
    },
    {
      rank: 3,
      name: 'Julia Santos',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      points: 1950,
      waterSaved: '11.1K litros',
      itemsRecycled: 68,
      badges: 9,
      level: 'Eco Champion',
      change: '+22%'
    },
    {
      rank: 4,
      name: 'Diego Oliveira',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      points: 1720,
      waterSaved: '9.4K litros',
      itemsRecycled: 55,
      badges: 7,
      level: 'Eco Warrior',
      change: '+5%'
    },
    {
      rank: 5,
      name: 'Fernanda Lima',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      points: 1580,
      waterSaved: '8.7K litros',
      itemsRecycled: 52,
      badges: 6,
      level: 'Eco Guardian',
      change: '+12%'
    }
  ]

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-orange-500" />
      default:
        return <Star className="w-6 h-6 text-blue-500" />
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'from-yellow-400 to-yellow-600'
      case 2:
        return 'from-gray-300 to-gray-500'
      case 3:
        return 'from-orange-400 to-orange-600'
      default:
        return 'from-blue-400 to-blue-600'
    }
  }

  const getBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-50 border-yellow-200'
      case 2:
        return 'bg-gray-50 border-gray-200'
      case 3:
        return 'bg-orange-50 border-orange-200'
      default:
        return 'bg-blue-50 border-blue-200'
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
          <Trophy className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Ranking de Usuários</h3>
          <p className="text-gray-600">Top 5 mais engajados este mês</p>
        </div>
      </div>

      <div className="space-y-4">
        {topUsers.map((user, index) => (
          <div key={index} className={`rounded-xl p-4 border-2 transition-all duration-200 hover:shadow-md ${getBadgeColor(user.rank)}`}>
            <div className="flex items-center space-x-4">
              {/* Rank Badge */}
              <div className={`w-12 h-12 bg-gradient-to-br ${getRankColor(user.rank)} rounded-full flex items-center justify-center shadow-lg`}>
                {getMedalIcon(user.rank)}
              </div>

              {/* User Avatar */}
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {user.rank}
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-gray-800">{user.name}</h4>
                  <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{user.change}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                    {user.level}
                  </span>
                  <span className="font-bold text-gray-800">{user.points.toLocaleString()} pts</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{user.waterSaved}</div>
                    <div className="text-gray-500">Água</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{user.itemsRecycled}</div>
                    <div className="text-gray-500">Itens</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-600">{user.badges}</div>
                    <div className="text-gray-500">Badges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ranking Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
          <div className="text-xl font-bold text-blue-700">15K</div>
          <div className="text-xs text-blue-600">Usuários Ativos</div>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <div className="text-xl font-bold text-green-700">2.4M</div>
          <div className="text-xs text-green-600">Pontos Totais</div>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
          <div className="text-xl font-bold text-purple-700">150</div>
          <div className="text-xs text-purple-600">Badges Únicos</div>
        </div>
      </div>
    </div>
  )
}

export default UserRanking
