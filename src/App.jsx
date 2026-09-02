import React from 'react'
import Home from './page/home/Home'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/Cursor'
import SpotifyNowPlaying from './components/SpotifyNowPlaying'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full text-[var(--color-text-light)]  selection:text-white">
        <CustomCursor />
        <Home />
        <SpotifyNowPlaying />
      </div>
    </ThemeProvider>
  )
}

export default App