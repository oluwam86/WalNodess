import React from 'react'
import { Github, Twitter, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-700/50 mt-20 bg-slate-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">◆</span>
              </div>
              <span className="font-bold text-white">Tonviewer</span>
            </div>
            <p className="text-slate-400 text-sm">The leading blockchain explorer for TON network</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Explorer</a></li>
              <li><a href="#" className="hover:text-white transition">Wallets</a></li>
              <li><a href="#" className="hover:text-white transition">NFTs</a></li>
              <li><a href="#" className="hover:text-white transition">Stats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
                <Twitter size={18} className="text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
                <Github size={18} className="text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
                <Mail size={18} className="text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <p>&copy; 2024 Tonviewer. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer