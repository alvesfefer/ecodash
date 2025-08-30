
import React, { useState } from 'react'
import Header from './components/Header'
import Overview from './components/Overview'
import Goals from './components/Goals'
import Performance from './components/Performance'
import Timeline from './components/Timeline'
import Team from './components/Team'
import Risks from './components/Risks'
import UserRanking from './components/UserRanking'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <Overview />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <Performance />
              <UserRanking />
            </div>
            <Timeline />
          </div>
        )
      case 'goals':
        return <Goals />
      case 'impact':
        return <Performance />
      case 'team':
        return <Team />
      case 'risks':
        return <Risks />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
