'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current
    const stats = statsRef.current

    if (!section || !title || !content || !stats) return

    // Background color transition
    gsap.to(section, {
      backgroundColor: '#0f0f0f',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    })

    // Title animation
    gsap.fromTo(
      title,
      { y: 100, opacity: 0 },
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

    // Content paragraphs animation
    const paragraphs = content.querySelectorAll('p')
    paragraphs.forEach((p, i) => {
      gsap.fromTo(
        p,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: p,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Stats animation
    const statItems = stats.querySelectorAll('.stat-item')
    statItems.forEach((stat, i) => {
      gsap.fromTo(
        stat,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stats,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Horizontal line animation
    gsap.fromTo(
      '.about-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-32 md:py-48 noise-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-muted tracking-widest">01</span>
          <div className="about-line h-px w-24 bg-white/20 origin-left" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">About</span>
        </div>

        {/* Title */}
        <h2 
          ref={titleRef}
          className="font-display text-display-md md:text-display-lg font-medium text-highlight mb-16 md:mb-24 max-w-4xl"
        >
          Building systems that think, learn, and scale.
        </h2>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column - Description */}
          <div ref={contentRef} className="space-y-8">
            <p className="text-body-lg text-accent/80 leading-relaxed">
              I architect intelligent systems where machine learning meets production-grade engineering. 
              My focus lies at the intersection of deep learning, natural language processing, and 
              scalable infrastructure—building AI that doesn&apos;t just work in notebooks, but thrives 
              in the real world.
            </p>
            <p className="text-body-md text-muted leading-relaxed">
              Every project is an exercise in precision: from designing neural architectures that 
              capture semantic meaning, to deploying models that serve millions of predictions 
              with sub-second latency. I believe the best AI systems are invisible—seamlessly 
              integrated, rigorously tested, and built to evolve.
            </p>
            <p className="text-body-md text-muted leading-relaxed">
              Currently exploring the frontiers of computer vision, speech recognition, and 
              multimodal AI systems that bridge the gap between human intuition and machine intelligence.
            </p>
          </div>

          {/* Right column - Stats/Focus areas */}
          <div ref={statsRef} className="space-y-12">
            <div className="stat-item">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-highlight mb-4">
                Deep Learning
              </h3>
              <p className="text-muted text-body-md">
                Designing and training neural networks for computer vision, NLP, and multimodal applications. 
                From CNNs to Transformers, building models that understand.
              </p>
            </div>

            <div className="stat-item">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-highlight mb-4">
                AI Engineering
              </h3>
              <p className="text-muted text-body-md">
                End-to-end machine learning pipelines: data processing, model training, optimization, 
                and deployment. Making AI production-ready.
              </p>
            </div>

            <div className="stat-item">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-highlight mb-4">
                System Architecture
              </h3>
              <p className="text-muted text-body-md">
                Building scalable, maintainable software systems. Clean code, robust APIs, 
                and infrastructure that grows with demand.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  )
}
