import React from 'react'
import Home from './page/home/Home'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/Cursor'

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-[var(--bg-color)] min-h-screen text-[var(--color-text-light)] selection:bg-[var(--color-accent)] selection:text-white">
        <CustomCursor />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App