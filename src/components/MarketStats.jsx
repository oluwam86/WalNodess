import React from 'react'
import CandleChart from './CandleChart'

function MarketStats() {
  return (
    <div className="w-full bg-slate-800/30 border-b border-slate-700/50 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="glassmorphism rounded-2xl p-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-slate-400 text-sm mb-3">Gram (prev. Toncoin) Price</div>
              <div className="text-4xl font-bold text-white mb-4">$1.53</div>
              <div className="h-16 gradient-chart rounded-lg">
                <CandleChart />
              </div>
            </div>

            <div>
              <div className="text-slate-400 text-sm mb-3">Market Cap</div>
              <div className="text-4xl font-bold text-white">$3.87B</div>
            </div>

            <div>
              <div className="text-slate-400 text-sm mb-3">Current TPS</div>
              <div className="text-4xl font-bold text-white mb-4">24.64</div>
              <div className="h-16 gradient-chart rounded-lg flex items-end justify-between px-2">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-500 rounded-t opacity-70 mx-0.5"
                    style={{ height: `${Math.random() * 100}%`, minHeight: '2px' }}
                  />
                ))}
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketStats