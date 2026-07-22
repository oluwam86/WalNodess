import React from 'react'
import { ChevronRight } from 'lucide-react'

function TokensList() {
  const tokens = [
    { symbol: 'GRAM', name: 'Gram', icon: '◆' },
    { symbol: 'JET', name: 'Jetton', icon: '🪙' },
    { symbol: 'NOT', name: 'NOT', icon: '📱' },
    { symbol: 'STON', name: 'Ston', icon: '🔷' },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        Most visited
        <ChevronRight size={20} className="text-slate-400" />
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="flex flex-1 flex-col p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">{token.icon}</div>
              <div className="flex flex-1 flex-col">
                <div className="text-base font-bold text-white h-6 leading-6">{token.symbol}</div>
                <div className="text-sm text-slate-400 h-5 leading-5">{token.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TokensList