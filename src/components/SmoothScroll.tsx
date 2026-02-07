'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
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
