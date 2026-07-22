import React, { useState } from 'react'
import { Heart, Share2 } from 'lucide-react'

function NFTList() {
  const [liked, setLiked] = useState({})

  const nfts = [
    {
      id: 1,
      name: 'TON Diamond #1337',
      collection: 'TON Gems',
      floor: '$2,450',
      volume: '$125K',
      items: '4,231',
      royalty: '5%',
      image: '💎'
    },
    {
      id: 2,
      name: 'TON Punks #2891',
      collection: 'Ton Community',
      floor: '$340',
      volume: '$89K',
      items: '10,000',
      royalty: '2.5%',
      image: '👨'
    },
    {
      id: 3,
      name: 'Ton Art #456',
      collection: 'Digital Masterpiece',
      floor: '$1,200',
      volume: '$420K',
      items: '1,567',
      royalty: '10%',
      image: '🎨'
    },
    {
      id: 4,
      name: 'TON Avatars #5643',
      collection: 'Avatar Collection',
      floor: '$89',
      volume: '$234K',
      items: '50,000',
      royalty: '3%',
      image: '🤖'
    },
    {
      id: 5,
      name: 'TON Origins #99',
      collection: 'Limited Edition',
      floor: '$5,600',
      volume: '$2.1M',
      items: '500',
      royalty: '7.5%',
      image: '👑'
    },
    {
      id: 6,
      name: 'TON Metaverse Land',
      collection: 'Virtual Real Estate',
      floor: '$3,200',
      volume: '$890K',
      items: '2,048',
      royalty: '5%',
      image: '🏗️'
    },
  ]

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">NFT Collections</h2>
        <p className="text-slate-400">Popular NFT collections on TON blockchain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="glassmorphism rounded-xl overflow-hidden group hover:border-blue-500/50 transition">
            <div className="relative aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-7xl overflow-hidden">
              <div className="text-6xl group-hover:scale-110 transition duration-300">{nft.image}</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white truncate">{nft.name}</h3>
                  <p className="text-sm text-slate-400">{nft.collection}</p>
                </div>
                <button
                  onClick={() => toggleLike(nft.id)}
                  className="ml-2 p-2 rounded-lg hover:bg-slate-700 transition"
                >
                  <Heart
                    size={18}
                    className={liked[nft.id] ? 'fill-red-500 text-red-500' : 'text-slate-400'}
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 my-4 pb-4 border-b border-slate-700">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Floor Price</p>
                  <p className="text-sm font-semibold text-white">{nft.floor}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Volume</p>
                  <p className="text-sm font-semibold text-white">{nft.volume}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Items</p>
                  <p className="text-sm font-semibold text-white">{nft.items}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Royalty</p>
                  <p className="text-sm font-semibold text-white">{nft.royalty}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition">
                  View Collection
                </button>
                <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">
                  <Share2 size={18} className="text-slate-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTList