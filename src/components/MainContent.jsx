import React from 'react'
import WalletsList from './WalletsList'
import TokensList from './TokensList'
import NFTsList from './NFTsList'
import StatsSection from './StatsSection'
import NewsSection from './NewsSection'
import DexesSection from './DexesSection'

function MainContent() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <WalletsList />
          <DexesSection />
          <TokensList />
          <NFTsList />
        </div>

        <div className="space-y-8">
          <StatsSection />
          <NewsSection />
        </div>
      </div>
    </div>
  )
}

export default MainContent