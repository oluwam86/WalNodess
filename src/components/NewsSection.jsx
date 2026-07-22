import React from 'react'
import { ChevronRight } from 'lucide-react'

function NewsSection() {
  const news = [
    {
      title: 'Using a Wallet Beyond Holding Tokens',
      source: 'Tonkeeper News',
      date: '18 Feb',
      icon: '📰'
    },
    {
      title: 'Spend TON on Bitrefill with Tonkeeper',
      source: 'Tonkeeper News',
      date: '15 Sep',
      icon: '💳'
    },
    {
      title: 'Peer-to-Peer Trading with Anzo in Tonk...',
      source: 'TON News',
      date: '10 Aug',
      icon: '🤝'
    }
  ]

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        News
        <ChevronRight size={20} className="text-slate-400" />
      </h2>
      <div className="space-y-3">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-1 flex-col p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition cursor-pointer"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
              <div className="flex flex-1 flex-col">
                <div className="line-clamp-1 text-base font-bold text-white h-6 leading-6">{item.title}</div>
              </div>
            </div>
            <div className="text-xs text-slate-400 ml-11">{item.source} · {item.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsSection