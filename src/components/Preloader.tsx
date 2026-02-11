'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { siteContent } from '@/content/siteContent'
import { useLanguage } from '@/context/LanguageContext'

export function Preloader() {
  const { language } = useLanguage()
  const content = siteContent[language]
  const { preloader } = content
  const preloaderRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const preloader = preloaderRef.current
    const text = textRef.current
    const progress = progressRef.current
    const counter = counterRef.current

    if (!preloader || !text || !progress || !counter) return

    const tl = gsap.timeline()

    // Animate counter
    const counterAnim = { value: 0 }
    
    tl.to(counterAnim, {
      value: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        counter.textContent = Math.round(counterAnim.value).toString().padStart(3, '0')
      },
    })
    .to(progress, {
      scaleX: 1,
      duration: 1.5,
      ease: 'power2.inOut',
    }, 0)
    .to(text, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    })
    .to(preloader, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power4.inOut',
      onComplete: () => setIsComplete(true),
    })

    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      document.body.style.overflowY = 'auto'
    }
  }, [])

  if (isComplete) return null

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-center">
        <div className="font-display text-xl tracking-[0.3em] text-muted mb-8 uppercase">
          {preloader.text}
        </div>
        <div className="font-mono text-7xl md:text-8xl font-light text-highlight mb-12">
          <span ref={counterRef}>000</span>
        </div>
        {/* Progress bar - sayılarla aynı genişlikte */}
        <div className="w-64 md:w-80 h-[2px] bg-white/10 overflow-hidden mx-auto">
          <div 
            ref={progressRef}
            className="h-full bg-white origin-left scale-x-0"
          />
        </div>
      </div>
    </div>
  )
}
