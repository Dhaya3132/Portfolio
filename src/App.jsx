import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Home from './page/home/Home'
import { ThemeProvider } from './context/ThemeContext'
import { IntroContext } from './context/introContext'
import CustomCursor from './components/Cursor'
import SpotifyNowPlaying from './components/SpotifyNowPlaying'
import SmoothScroll from './components/ui/SmoothScroll'
import ScrollProgress from './components/ui/ScrollProgress'
import AmbientBackground from './components/ui/AmbientBackground'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const App = () => {
  // Skip the intro entirely for reduced-motion users.
  const [ready, setReady] = useState(prefersReducedMotion)

  // Always start at the top so the intro + hero reveal play as designed.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  const handleIntroFinish = useCallback(() => setReady(true), [])

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <IntroContext.Provider value={{ ready }}>
            <div className="min-h-screen w-full text-[var(--color-text-light)]">
              <AmbientBackground />
              <ScrollProgress />
              <CustomCursor />
              <Navbar />
              <Home />
              {ready && <SpotifyNowPlaying />}
            </div>

            <AnimatePresence>
              {!ready && <Preloader key="preloader" onFinish={handleIntroFinish} />}
            </AnimatePresence>
          </IntroContext.Provider>
        </SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
