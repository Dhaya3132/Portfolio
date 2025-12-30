import React from 'react'
import Home from './page/home/Home'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const MainContent = () => {
  const { theme, bgColor } = useTheme();

  return (
    <div
      className='w-full h-screen transition-colors duration-300'
      style={{
        backgroundColor: theme === 'dark' ? bgColor : undefined,
        color: theme === 'dark' ? 'white' : 'inherit'
      }}
    >
      {/* Fallback for light mode is handled by classNames or we can be explicit. 
                 Original code had: bg-gray-50 text-neutral-900 dark:bg-black dark:text-white 
                 I'll keep class names for light mode and override for dark mode via style if needed, 
                 or just use style for everything dynamic. 
                 Let's stick to the original classes for light mode defaults and override background for dark mode.
             */}
      <div className={`w-full h-screen bg-gray-50 text-neutral-900 dark:text-white transition-colors duration-300 ${theme === 'dark' ? '' : 'dark:bg-black'}`}
        style={{ backgroundColor: theme === 'dark' ? bgColor : '' }}
      >
        <Home />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}

export default App