import { useState, useEffect } from 'react'

// Hook
export default function useDisplayDesktopVersion() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [displayDesktopVersion, setDisplayDesktopVersion] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      const desktopBreakpoint = 500
      setDisplayDesktopVersion(window.innerWidth > desktopBreakpoint)
    }

    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return displayDesktopVersion
}
