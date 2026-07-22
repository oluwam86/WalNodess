import React from 'react'

function StatsSection() {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">Stats</h2>
      
      <div className="flex flex-1 flex-col p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 mb-6">
        <div className="text-slate-400 text-sm font-medium mb-3">Jettons Transfer · 1d</div>
        <div className="text-3xl font-bold text-white mb-4">195,639</div>
        <div className="h-14 gradient-chart rounded flex items-end justify-between px-2 py-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500 rounded-t opacity-60 mx-0.5"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 rounded-lg bg-slate-800/30 border border-slate-700/50 mb-6">
        <div className="text-slate-400 text-sm font-medium mb-3">NFT Transfer · 1d</div>
        <div className="text-3xl font-bold text-white mb-4">23,994</div>
        <div className="h-14 gradient-chart rounded flex items-end justify-between px-2 py-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-indigo-500 rounded-t opacity-60 mx-0.5"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 rounded-lg bg-slate-800/30 border border-slate-700/50">
        <div className="text-sm font-bold text-white mb-4">Accounts types</div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">undetected</span>
            </div>
            <span className="text-white font-bold text-sm">14%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">nft_item</span>
            </div>
            <span className="text-white font-bold text-sm">10%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">wallet_v4r2</span>
            </div>
            <span className="text-white font-bold text-sm">12%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">jetton_wallet</span>
            </div>
            <span className="text-white font-bold text-sm">8%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-slate-400 text-sm">other</span>
            </div>
            <span className="text-white font-bold text-sm">40%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection