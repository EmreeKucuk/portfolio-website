'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent, TechCategory } from '@/content/siteContent'
import { useLanguage } from '@/context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

function TechNode({ 
  tech, 
  index, 
  categoryIndex 
}: { 
  tech: { name: string; level: string }
  index: number
  categoryIndex: number
}) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!nodeRef.current) return

    gsap.fromTo(
      nodeRef.current,
      { 
        opacity: 0, 
        scale: 0,
        y: 30 
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        delay: (categoryIndex * 0.2) + (index * 0.08),
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: nodeRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [index, categoryIndex])

  const levelColors = {
    expert: 'border-white/40 bg-white/10',
    advanced: 'border-white/25 bg-white/05',
    proficient: 'border-white/15 bg-white/[0.02]',
  }

  return (
    <div
      ref={nodeRef}
      className={`
        relative px-5 py-3 rounded-xl cursor-default transition-all duration-300
        ${levelColors[tech.level as keyof typeof levelColors]}
        ${isHovered ? 'scale-105 border-white/50' : ''}
        border backdrop-blur-sm
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-mono text-sm text-highlight/90">{tech.name}</span>
      
      {/* Level indicator dots */}
      <div className="absolute -top-1 -right-1 flex gap-0.5">
        {[...Array(tech.level === 'expert' ? 3 : tech.level === 'advanced' ? 2 : 1)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              isHovered ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Hover glow effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl bg-white/5 blur-xl -z-10" />
      )}
    </div>
  )
}

function DataFlowVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    interface DataPoint {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      speed: number
    }

    const points: DataPoint[] = []
    const pointCount = 30

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.5,
      })
    }

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw points
      points.forEach((point, i) => {
        point.x += point.vx * point.speed
        point.y += point.vy * point.speed

        // Wrap around
        if (point.x < 0) point.x = canvas.width
        if (point.x > canvas.width) point.x = 0
        if (point.y < 0) point.y = canvas.height
        if (point.y > canvas.height) point.y = 0

        // Draw point
        const pulse = Math.sin(frame * 0.02 + i) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + pulse * 0.3})`
        ctx.fill()

        // Draw connections
        points.forEach((other, j) => {
          if (i >= j) return
          const dx = point.x - other.x
          const dy = point.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      frame++
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
    />
  )
}

export function TechStack() {
  const { language } = useLanguage()
  const content = siteContent[language]
  const { techStack } = content
  
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    gsap.fromTo(
      title,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="stack"
      className="relative min-h-screen py-32 md:py-48 overflow-hidden"
    >
      {/* Background visualization */}
      <DataFlowVisualization />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-muted tracking-widest">{techStack.sectionNumber}</span>
          <div className="h-px w-24 bg-white/20" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">{techStack.sectionLabel}</span>
        </div>

        {/* Title */}
        <h2 
          ref={titleRef}
          className="font-display text-display-md md:text-display-lg font-medium text-highlight mb-20 max-w-4xl"
        >
          {techStack.title}
        </h2>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
            <span className="text-xs text-muted">{techStack.legend.expert}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
            <span className="text-xs text-muted">{techStack.legend.advanced}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
            <span className="text-xs text-muted">{techStack.legend.proficient}</span>
          </div>
        </div>

        {/* Tech categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {techStack.categories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-6">
              <h3 className="font-display text-lg text-highlight/70 border-b border-white/10 pb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, index) => (
                  <TechNode
                    key={tech.name}
                    tech={tech}
                    index={index}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills note */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-muted text-body-md max-w-2xl">
            {techStack.footerNote}
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  )
}
