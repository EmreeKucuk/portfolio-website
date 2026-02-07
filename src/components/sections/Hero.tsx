'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const name = nameRef.current
    const subtitle = subtitleRef.current
    const canvas = canvasRef.current

    if (!section || !name || !subtitle || !canvas) return

    // Particle mesh animation
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    const particles: Particle[] = []
    const particleCount = 80
    const connectionDistance = 150
    const mouseInfluenceRadius = 200

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      baseX: number
      baseY: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.baseX = this.x
        this.baseY = this.y
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 2 + 0.5
      }

      update() {
        // Mouse influence
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseInfluenceRadius) {
          const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius
          this.x -= dx * force * 0.02
          this.y -= dy * force * 0.02
        }

        // Return to base position
        this.x += (this.baseX - this.x) * 0.01
        this.y += (this.baseY - this.y) * 0.01

        // Add slight movement
        this.x += this.vx
        this.y += this.vy

        // Boundary check
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
        ctx.fill()
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      resize()
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    init()
    animate()

    window.addEventListener('resize', init)
    window.addEventListener('mousemove', handleMouseMove)

    // Text animations
    const tl = gsap.timeline({ delay: 3 })

    // Split name into characters for animation
    const nameChars = name.textContent?.split('') || []
    name.innerHTML = nameChars.map(char => 
      `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('')

    tl.fromTo(
      name.querySelectorAll('span'),
      { y: 100, opacity: 0, rotationX: -90 },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1.2, 
        stagger: 0.03,
        ease: 'power4.out' 
      }
    )
    .fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )

    // Scroll animation
    gsap.to(name, {
      yPercent: 50,
      opacity: 0.3,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 
          ref={nameRef}
          className="font-display text-display-xl font-medium text-highlight mb-6 overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          Emre Küçük
        </h1>
        
        <div ref={subtitleRef} className="overflow-hidden">
          <p className="font-mono text-sm md:text-base text-muted tracking-[0.2em] uppercase">
            Engineering Intelligent Systems
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent animate-pulse" />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 z-20" />
    </section>
  )
}
