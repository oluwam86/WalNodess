# Walnudes - Tonviewer Clone

A modern blockchain explorer and wallet dashboard built for the TON network.

## Features

- 🔍 **Blockchain Explorer** - Search and explore TON blockchain
- 💼 **Wallet Management** - Browse popular TON wallets
- 📊 **Market Statistics** - Real-time token prices and charts
- 🎨 **NFT Collections** - Browse trending NFTs
- 💹 **Trending Tokens** - Track popular tokens
- 🌙 **Dark Mode UI** - Modern glassmorphism design

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tearS98/Walnudes.git
cd Walnudes

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Render

1. Push this repository to GitHub
2. Go to https://render.com and sign up/login
3. Click "New +" and select "Web Service"
4. Connect your GitHub account and select this repository
5. Configure the following:
   - **Name**: walnudes
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
6. Click "Create Web Service"

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and search
│   ├── Hero.jsx            # Hero section
│   ├── MarketStats.jsx     # Market data display
│   ├── CandleChart.jsx     # Candlestick chart
│   ├── WalletsList.jsx     # Wallet options
│   ├── TrendingTokens.jsx  # Token list
│   ├── NFTList.jsx         # NFT collections
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Key Sections

### Header
- Tonviewer branding with diamond icon
- Search bar with copy functionality
- Favorite button
- Settings icon
- Connect Wallet button

### Market Stats
- Real-time price tracking for GRAM, JET, NOT tokens
- Candlestick charts showing price trends
- Market cap and TPS display
- Transfer statistics (Jettons & NFTs)
- Account type distribution

### Wallets
- Tonkeeper
- Tonkeeper Pro
- TON Wallet
- TonHub

### Tokens
- Searchable token list
- Price, volume, and holder information
- Favorite/watchlist functionality

### NFTs
- Popular NFT collections
- Floor price tracking
- Like/favorite functionality
- Share buttons

## Styling

The project uses Tailwind CSS with custom components:
- **Glassmorphism**: Semi-transparent backgrounds with blur effect
- **Dark Theme**: Slate 900 based color scheme
- **Gradients**: Blue to indigo primary gradient

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes

## Support

For issues and questions, please open an issue on GitHub.