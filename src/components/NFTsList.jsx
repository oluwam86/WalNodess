import React from 'react'
import { ChevronRight } from 'lucide-react'

function NFTsList() {
  const nfts = [
    { name: 'Lost Dogs', image: '🐕', description: 'We were here first.' },
    { name: 'TON DNS', image: '🔗', description: 'Digital Identity on TON' },
    { name: 'Anonymous Telegram Numbers', image: '📱', description: 'Logging into Telegram with your blockchain...' },
    { name: 'Telegram Usernames', image: '👤', description: 'Secure your name with blockchain' }
  ]

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        NFTs
        <ChevronRight size={20} className="text-slate-400" />
      </h2>
      <div className="space-y-3">
        {nfts.map((nft, idx) => (
          <div
            key={idx}
            className="flex flex-1 flex-col p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition cursor-pointer"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="text-2xl flex-shrink-0 mt-0.5">{nft.image}</div>
              <div className="flex flex-1 flex-col">
                <div className="text-base font-bold text-white h-6 leading-6">{nft.name}</div>
              </div>
            </div>
            <div className="line-clamp-1 text-sm text-slate-400 h-5 leading-5 ml-11">
              {nft.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTsList