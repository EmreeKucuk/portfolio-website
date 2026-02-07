'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Check if device supports hover (non-touch)
    const hasHover = window.matchMedia('(hover: hover)').matches
    if (!hasHover) return

    setIsVisible(true)

    const dot = dotRef.current
    const ring = ringRef.current

    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    
    const addHoverListeners = () => {
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2
      dotY += (mouseY - dotY) * 0.2
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1

      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.5 : 1})`

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    addHoverListeners()
    animate()

    // Re-add listeners on DOM changes
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [isHovering])

  if (!isVisible) return null

  return (
    <>
      <div 
        ref={dotRef} 
        className="cursor-dot hidden lg:block"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <div 
        ref={ringRef} 
        className="cursor-ring hidden lg:block"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  )
}
