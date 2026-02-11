'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

// Reliable mobile detection
function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  // Check for touch capability
  const hasTouchPoints = navigator.maxTouchPoints > 0
  const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches
  const hasNoHover = window.matchMedia('(hover: none)').matches
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  return hasTouchPoints || hasCoarsePointer || hasNoHover || isMobileUA
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    // Check for mobile/touch devices
    const isMobile = isTouchDevice()
    
    if (isMobile) {
      // Ensure native scrolling works on mobile
      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped')
      document.body.style.overflow = ''
      document.body.style.overflowY = 'auto'
      return
    }

    // Dynamic import for Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Integrate with GSAP ScrollTrigger
      lenis.on('scroll', () => {
        if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.update()
        }
      })
    }

    initLenis()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
