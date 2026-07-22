import React, { useState } from 'react'
import { Heart, Settings, Copy, Check } from 'lucide-react'

function Header() {
  const [copied, setCopied] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText(searchQuery)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="sticky top-0 z-50 border-b py-8" style={{ backgroundColor: 'var(--backgroundPrimary)', borderColor: 'var(--separatorCommon)' }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Logo and Title */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accentBlue)' }}>
              <span className="text-white font-bold text-xl">◆</span>
            </div>
            <h1 className="text-4xl font-bold" style={{ color: 'var(--foregroundPrimary)' }}>Tonviewer</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="p-2.5 rounded-lg transition" title="Favorites">
              <Heart size={24} style={{ color: 'var(--foregroundSecondary)' }} />
            </button>
            <button className="p-2.5 rounded-lg transition" title="Settings">
              <Settings size={24} style={{ color: 'var(--foregroundSecondary)' }} />
            </button>
            <button className="px-6 py-2.5 rounded-lg font-bold text-white transition text-sm" style={{ backgroundColor: 'var(--accentBlue)' }}>
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-3xl">
          <div className="flex items-center rounded-xl transition-all" style={{ backgroundColor: 'var(--backgroundSecondary)', border: '1px solid var(--separatorCommon)' }}>
            <input
              id="global_search"
              type="text"
              placeholder="Search by address, name or transaction"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-base px-4 py-3.5"
              style={{ color: 'var(--foregroundPrimary)' }}
              autoComplete="off"
            />
            <button
              onClick={handleCopy}
              className="mr-4 p-2 rounded transition"
              title="Copy"
            >
              {copied ? (
                <Check size={20} style={{ color: 'var(--accentGreen)' }} />
              ) : (
                <Copy size={20} style={{ color: 'var(--foregroundSecondary)' }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
