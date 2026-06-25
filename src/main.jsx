import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { AuthProvider } from './context/AuthContext.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import { WatchlistProvider } from './context/WatchlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <WatchlistProvider>
          <App/>
        </WatchlistProvider>
      </MovieProvider>
    </AuthProvider>
  </StrictMode>
)
