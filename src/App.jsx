import React from 'react'
import Header from './components/Header'
import MarketStats from './components/MarketStats'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main className="w-full">
        <MarketStats />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

export default App