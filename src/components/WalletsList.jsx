import React from 'react'
import { ChevronRight } from 'lucide-react'

function WalletsList() {
  const wallets = [
    {
      id: 1,
      name: 'Tonkeeper',
      description: 'The leading non-custodial wallet on TON, delivering the best set of features',
      icon: '🔐'
    },
    {
      id: 2,
      name: 'Tonkeeper Pro',
      description: 'Your personal wallet on desktop. Receive, buy and spend crypto with ease',
      icon: '💼'
    },
    {
      id: 3,
      name: 'Wallet',
      description: 'Purchase cryptocurrency by bank card, something like the trending tokens too',
      icon: '💳'
    },
    {
      id: 4,
      name: 'My Wallet',
      description: 'Next-generation crypto wallet with multi-sig support and advanced features',
      icon: '🎨'
    },
    {
      id: 5,
      name: 'Tonhub',
      description: 'Simple alternative mobile wallet that allows seamless transactions',
      icon: '💎'
    }
  ]

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        Wallets
        <ChevronRight size={20} className="text-slate-400" />
      </h2>
      <div className="space-y-3">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="flex flex-1 flex-col p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition group cursor-pointer"
          >
            {/* Icon + Title Section */}
            <div className="flex items-start gap-3 mb-2">
              <div className="text-2xl flex-shrink-0 mt-0.5">{wallet.icon}</div>
              <div className="flex flex-1 flex-col">
                <div className="text-base font-bold text-white h-6 leading-6">{wallet.name}</div>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="line-clamp-1 text-sm text-slate-400 h-5 leading-5 ml-11">
              {wallet.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WalletsList