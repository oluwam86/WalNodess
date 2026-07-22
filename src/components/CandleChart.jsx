import React from 'react'

function CandleChart() {
  const candles = [
    { high: 80, low: 40, open: 50, close: 70 },
    { high: 75, low: 35, open: 70, close: 45 },
    { high: 85, low: 45, open: 45, close: 75 },
    { high: 70, low: 30, open: 75, close: 35 },
    { high: 80, low: 40, open: 35, close: 65 },
    { high: 72, low: 38, open: 65, close: 68 },
  ]

  return (
    <div className="flex items-end justify-between gap-1 h-full px-1">
      {candles.map((candle, i) => {
        const isGreen = candle.close >= candle.open
        const bodyHeight = Math.abs(candle.close - candle.open) || 2

        return (
          <div key={i} className="flex-1 flex flex-col items-center justify-end" style={{ height: '100%' }}>
            <div
              className={`w-0.5 ${isGreen ? 'bg-green-500' : 'bg-red-500'} opacity-40`}
              style={{ height: `${20}%` }}
            />
            <div
              className={`w-1 rounded-sm ${isGreen ? 'bg-green-500' : 'bg-red-500'}`}
              style={{ height: `${bodyHeight * 0.8}%`, minHeight: '3px' }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CandleChart