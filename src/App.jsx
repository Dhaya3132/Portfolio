import React from 'react'
import Home from './page/home/Home'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className='w-full h-screen bg-gray-50 text-neutral-900 dark:bg-black dark:text-white transition-colors duration-300'>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App