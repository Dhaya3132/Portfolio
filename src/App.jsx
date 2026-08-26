import React from 'react'
import Home from './page/home/Home'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/Cursor'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full text-[var(--color-text-light)]  selection:text-white">
        <CustomCursor />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App