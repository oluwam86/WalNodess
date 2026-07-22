import React from 'react'

function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 mx-auto">
        <span className="text-5xl">◆</span>
      </div>
      <h1 className="text-5xl font-bold text-white mb-2">Tonviewer</h1>
      <p className="text-slate-400 text-lg">Blockchain Explorer & Wallet Dashboard</p>
    </div>
  )
}

export default Hero