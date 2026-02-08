'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  visualization: 'pipeline' | 'nlp' | 'vision' | 'neural' | 'game'
  link: string
}

const projects: Project[] = [
  {
    id: 'deep-learning',
    title: 'Deep Learning Research',
    category: 'Neural Networks',
    description: 'Advanced deep learning implementations exploring cutting-edge architectures. From convolutional networks for image analysis to recurrent models for sequence processing.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter'],
    visualization: 'neural',
    link: 'https://github.com/EmreeKucuk/deep-learning-lab2',
  },
  {
    id: 'image-recognition',
    title: 'Vision for Accessibility',
    category: 'Computer Vision',
    description: 'Image recognition system designed to assist visually impaired users. Leveraging state-of-the-art object detection and scene understanding to describe the visual world.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Speech Synthesis'],
    visualization: 'vision',
    link: 'https://github.com/EmreeKucuk/image-recog-for-blind',
  },
  {
    id: 'speech-recognition',
    title: 'Speech Recognition Engine',
    category: 'Natural Language Processing',
    description: 'Real-time speech-to-text system with natural language understanding. Processing audio signals and converting them into actionable text with high accuracy.',
    technologies: ['Python', 'SpeechRecognition', 'NLP', 'Audio Processing'],
    visualization: 'nlp',
    link: 'https://github.com/EmreeKucuk/speech-recognition-test',
  },
  {
    id: 'snake-ai',
    title: 'AI Game Arena',
    category: 'Reinforcement Learning',
    description: 'AI agents competing in classic game environments. Implementing reinforcement learning algorithms that learn optimal strategies through self-play and exploration.',
    technologies: ['TypeScript', 'Machine Learning', 'Game AI', 'Neural Networks'],
    visualization: 'game',
    link: 'https://github.com/EmreeKucuk/snake-ai-arena',
  },
]

function PipelineVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const paths = svgRef.current.querySelectorAll('.flow-path')
    const nodes = svgRef.current.querySelectorAll('.flow-node')

    paths.forEach((path, i) => {
      gsap.fromTo(
        path,
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 2,
          delay: i * 0.3,
          repeat: -1,
          ease: 'none',
        }
      )
    })

    nodes.forEach((node, i) => {
      gsap.to(node, {
        scale: 1.1,
        opacity: 1,
        duration: 0.5,
        delay: i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
    })
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 400 200" className="w-full h-full">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
      </defs>
      
      {/* Nodes */}
      <circle className="flow-node" cx="50" cy="100" r="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle className="flow-node" cx="150" cy="60" r="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle className="flow-node" cx="150" cy="140" r="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle className="flow-node" cx="250" cy="100" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle className="flow-node" cx="350" cy="100" r="22" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      
      {/* Flow paths */}
      <path className="flow-path" d="M70 100 L135 60" fill="none" stroke="url(#flowGradient)" strokeWidth="1" strokeDasharray="8 4" />
      <path className="flow-path" d="M70 100 L135 140" fill="none" stroke="url(#flowGradient)" strokeWidth="1" strokeDasharray="8 4" />
      <path className="flow-path" d="M165 60 L232 100" fill="none" stroke="url(#flowGradient)" strokeWidth="1" strokeDasharray="8 4" />
      <path className="flow-path" d="M165 140 L232 100" fill="none" stroke="url(#flowGradient)" strokeWidth="1" strokeDasharray="8 4" />
      <path className="flow-path" d="M268 100 L328 100" fill="none" stroke="url(#flowGradient)" strokeWidth="1" strokeDasharray="8 4" />
      
      {/* Labels */}
      <text x="50" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">DATA</text>
      <text x="250" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">PROCESS</text>
      <text x="350" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">OUTPUT</text>
    </svg>
  )
}

function NLPVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)
  const words = ['Understanding', 'Language', 'Through', 'Intelligence']

  useEffect(() => {
    if (!containerRef.current) return

    const tokens = containerRef.current.querySelectorAll('.nlp-token')
    
    tokens.forEach((token, i) => {
      gsap.fromTo(
        token,
        { opacity: 0.3, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.15,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
        }
      )
    })
  }, [])

  return (
    <div ref={containerRef} className="flex flex-wrap gap-3 justify-center items-center h-full p-8">
      {words.map((word, i) => (
        <div key={i} className="nlp-token relative">
          <span className="font-mono text-lg md:text-xl text-highlight/80 px-4 py-2 border border-white/10 rounded">
            {word}
          </span>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted">
            [{i}]
          </span>
        </div>
      ))}
    </div>
  )
}

function VisionVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 200

    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw scanning lines
      const scanY = (frame % 200)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(400, scanY)
      ctx.stroke()

      // Draw detection boxes
      const boxes = [
        { x: 50, y: 40, w: 80, h: 60, label: 'Object A' },
        { x: 180, y: 60, w: 100, h: 80, label: 'Object B' },
        { x: 300, y: 30, w: 70, h: 50, label: 'Object C' },
      ]

      boxes.forEach((box, i) => {
        const pulse = Math.sin(frame * 0.05 + i) * 0.3 + 0.7
        ctx.strokeStyle = `rgba(255, 255, 255, ${pulse * 0.5})`
        ctx.lineWidth = 1
        ctx.strokeRect(box.x, box.y, box.w, box.h)

        // Corner accents
        const cornerSize = 8
        ctx.strokeStyle = `rgba(255, 255, 255, ${pulse})`
        ctx.lineWidth = 2

        // Top-left
        ctx.beginPath()
        ctx.moveTo(box.x, box.y + cornerSize)
        ctx.lineTo(box.x, box.y)
        ctx.lineTo(box.x + cornerSize, box.y)
        ctx.stroke()

        // Top-right
        ctx.beginPath()
        ctx.moveTo(box.x + box.w - cornerSize, box.y)
        ctx.lineTo(box.x + box.w, box.y)
        ctx.lineTo(box.x + box.w, box.y + cornerSize)
        ctx.stroke()

        // Bottom-left
        ctx.beginPath()
        ctx.moveTo(box.x, box.y + box.h - cornerSize)
        ctx.lineTo(box.x, box.y + box.h)
        ctx.lineTo(box.x + cornerSize, box.y + box.h)
        ctx.stroke()

        // Bottom-right
        ctx.beginPath()
        ctx.moveTo(box.x + box.w - cornerSize, box.y + box.h)
        ctx.lineTo(box.x + box.w, box.y + box.h)
        ctx.lineTo(box.x + box.w, box.y + box.h - cornerSize)
        ctx.stroke()

        // Label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
        ctx.font = '10px monospace'
        ctx.fillText(box.label, box.x, box.y - 5)
      })

      frame++
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

function NeuralVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const connections = svgRef.current.querySelectorAll('.neural-connection')
    const neurons = svgRef.current.querySelectorAll('.neuron')

    connections.forEach((conn, i) => {
      gsap.to(conn, {
        opacity: 0.8,
        duration: 0.3,
        delay: i * 0.05,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    })

    neurons.forEach((neuron, i) => {
      gsap.to(neuron, {
        fill: 'rgba(255,255,255,0.6)',
        duration: 0.5,
        delay: i * 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })
    })
  }, [])

  const layers = [
    [50, 40], [50, 80], [50, 120], [50, 160],
    [150, 30], [150, 70], [150, 110], [150, 150], [150, 190],
    [250, 50], [250, 100], [250, 150],
    [350, 90], [350, 130],
  ]

  return (
    <svg ref={svgRef} viewBox="0 0 400 220" className="w-full h-full">
      {/* Connections */}
      {layers.slice(0, 4).map((from, i) =>
        layers.slice(4, 9).map((to, j) => (
          <line
            key={`l1-${i}-${j}`}
            className="neural-connection"
            x1={from[0]} y1={from[1]}
            x2={to[0]} y2={to[1]}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
        ))
      )}
      {layers.slice(4, 9).map((from, i) =>
        layers.slice(9, 12).map((to, j) => (
          <line
            key={`l2-${i}-${j}`}
            className="neural-connection"
            x1={from[0]} y1={from[1]}
            x2={to[0]} y2={to[1]}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
        ))
      )}
      {layers.slice(9, 12).map((from, i) =>
        layers.slice(12).map((to, j) => (
          <line
            key={`l3-${i}-${j}`}
            className="neural-connection"
            x1={from[0]} y1={from[1]}
            x2={to[0]} y2={to[1]}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
        ))
      )}
      
      {/* Neurons */}
      {layers.map((pos, i) => (
        <circle
          key={i}
          className="neuron"
          cx={pos[0]} cy={pos[1]} r="6"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
      ))}

      {/* Layer labels */}
      <text x="50" y="195" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">INPUT</text>
      <text x="150" y="215" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">HIDDEN</text>
      <text x="250" y="180" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">HIDDEN</text>
      <text x="350" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">OUTPUT</text>
    </svg>
  )
}

function GameVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 200

    let snakePos = { x: 50, y: 100 }
    let direction = { x: 1, y: 0 }
    const trail: { x: number; y: number }[] = []
    const trailLength = 20
    let frame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1
      for (let x = 0; x < 400; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, 200)
        ctx.stroke()
      }
      for (let y = 0; y < 200; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(400, y)
        ctx.stroke()
      }

      // Update snake position
      snakePos.x += direction.x * 3
      snakePos.y += direction.y * 3

      // Boundary check and direction change
      if (snakePos.x > 380 || snakePos.x < 20) direction.x *= -1
      if (snakePos.y > 180 || snakePos.y < 20) direction.y *= -1

      // Add some randomness
      if (frame % 60 === 0) {
        direction.y = (Math.random() - 0.5) * 0.5
      }

      // Update trail
      trail.unshift({ ...snakePos })
      if (trail.length > trailLength) trail.pop()

      // Draw trail
      trail.forEach((pos, i) => {
        const opacity = 1 - i / trailLength
        const size = 8 - (i / trailLength) * 4
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.5})`
        ctx.fillRect(pos.x - size / 2, pos.y - size / 2, size, size)
      })

      // Draw AI decision indicators
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(snakePos.x, snakePos.y)
      ctx.lineTo(snakePos.x + direction.x * 50, snakePos.y + direction.y * 50)
      ctx.stroke()
      ctx.setLineDash([])

      // Draw "food" target
      const foodX = 350
      const foodY = 100 + Math.sin(frame * 0.05) * 50
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.beginPath()
      ctx.arc(foodX, foodY, 6, 0, Math.PI * 2)
      ctx.fill()

      // AI label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.font = '10px monospace'
      ctx.fillText('AI AGENT', snakePos.x - 20, snakePos.y - 15)

      frame++
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

function ProjectVisualization({ type }: { type: Project['visualization'] }) {
  switch (type) {
    case 'pipeline':
      return <PipelineVisualization />
    case 'nlp':
      return <NLPVisualization />
    case 'vision':
      return <VisionVisualization />
    case 'neural':
      return <NeuralVisualization />
    case 'game':
      return <GameVisualization />
    default:
      return null
  }
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Don't use horizontal scroll on mobile
    if (isMobile) return

    const section = sectionRef.current
    const horizontal = horizontalRef.current
    const panels = panelsRef.current

    if (!section || !horizontal || !panels) return

    const panelElements = panels.querySelectorAll('.project-panel')
    const totalWidth = panelElements.length * window.innerWidth

    // Horizontal scroll animation - desktop only
    const horizontalScroll = gsap.to(panels, {
      x: () => -(totalWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Individual panel animations
    panelElements.forEach((panel) => {
      const content = panel.querySelector('.panel-content')
      const viz = panel.querySelector('.panel-viz')

      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalScroll,
              start: 'left center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      if (viz) {
        gsap.fromTo(
          viz,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalScroll,
              start: 'left center',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === horizontal) {
          trigger.kill()
        }
      })
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} id="projects" className="relative">
      {/* Section header */}
      <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <span className="font-mono text-xs text-muted tracking-widest">02</span>
          <div className="h-px w-24 bg-white/20" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Selected Work</span>
        </div>
        <h2 className="font-display text-display-md md:text-display-lg font-medium text-highlight max-w-4xl">
          Projects that push boundaries
        </h2>
      </div>

      {/* Mobile: Vertical layout */}
      {isMobile ? (
        <div className="px-6 pb-16 space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-muted">/</span>
                <span className="font-mono text-sm text-muted">
                  {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-medium text-highlight mb-4">
                  {project.title}
                </h3>
                <p className="text-body-sm text-muted">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-muted border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-highlight hover:opacity-70 transition-opacity group"
              >
                <span>View Project</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="h-px w-full bg-white/10 mt-8" />
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: Horizontal scroll container */
        <div ref={horizontalRef} className="relative overflow-hidden">
          <div ref={panelsRef} className="flex">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-panel flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 md:px-12"
              >
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                  {/* Content */}
                  <div className="panel-content space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-muted">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-muted">/</span>
                      <span className="font-mono text-sm text-muted">
                        {String(projects.length).padStart(2, '0')}
                      </span>
                    </div>

                    <div>
                      <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                        {project.category}
                      </p>
                      <h3 className="font-display text-3xl md:text-5xl font-medium text-highlight mb-6">
                        {project.title}
                      </h3>
                      <p className="text-body-md text-muted max-w-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-muted border border-white/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm text-highlight hover:opacity-70 transition-opacity group"
                    >
                      <span>View Project</span>
                      <svg 
                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Visualization */}
                  <div className="panel-viz glass-panel p-8 aspect-video">
                    <ProjectVisualization type={project.visualization} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
