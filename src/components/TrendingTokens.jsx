import React, { useState } from 'react'
import { TrendingUp, TrendingDown, Star } from 'lucide-react'

function TrendingTokens() {
  const [favorites, setFavorites] = useState({})

  const tokens = [
    { id: 1, symbol: 'GRAM', name: 'Gram', price: '$1.43', change: -2.5, volume: '$1.2B', holders: '24,531', icon: '◆' },
    { id: 2, symbol: 'JET', name: 'Jetton', price: '$0.89', change: 5.2, volume: '$780M', holders: '18,942', icon: '🪙' },
    { id: 3, symbol: 'NOT', name: 'NOT Token', price: '$0.34', change: -1.8, volume: '$320M', holders: '12,456', icon: '📱' },
    { id: 4, symbol: 'STON', name: 'Ston', price: '$2.15', change: 8.7, volume: '$520M', holders: '15,789', icon: '🔷' },
    { id: 5, symbol: 'USDT', name: 'Tether USD', price: '$1.00', change: 0.1, volume: '$2.1B', holders: '89,234', icon: '💵' },
    { id: 6, symbol: 'USDC', name: 'USD Coin', price: '$1.00', change: 0.0, volume: '$1.8B', holders: '76,543', icon: '💳' },
  ]

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Trending Tokens</h2>
        <p className="text-slate-400">Most visited and traded tokens on TON network</p>
      </div>

      <div className="glassmorphism rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">Token</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400">Price</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400">24h Change</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400">Volume</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400">Holders</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr key={token.id} className="border-b border-slate-700/50 hover:bg-slate-800/30 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-lg">
                      {token.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{token.symbol}</div>
                      <div className="text-xs text-slate-400">{token.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-semibold text-white">{token.price}</td>
                <td className="px-6 py-4 text-right">
                  <div className={`flex items-center justify-end gap-1 font-semibold ${
                    token.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {token.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {Math.abs(token.change)}%
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-slate-300">{token.volume}</td>
                <td className="px-6 py-4 text-right text-slate-300">{token.holders}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleFavorite(token.id)}
                    className="p-2 hover:bg-slate-700 rounded-lg transition"
                  >
                    <Star
                      size={18}
                      className={favorites[token.id] ? 'fill-yellow-400 text-yellow-400' : 'text-slate-400'}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TrendingTokens