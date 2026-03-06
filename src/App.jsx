import React from 'react'
import Home from './page/home/Home'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/Cursor'

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-[#050505] min-h-screen text-white selection:bg-blue-500/30">
        <CustomCursor />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App