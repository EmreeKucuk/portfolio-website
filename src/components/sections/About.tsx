'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '@/content/siteContent'
import { useLanguage } from '@/context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const { language } = useLanguage()
  const content = siteContent[language]
  const { about } = content
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
          <span className="font-mono text-xs text-muted tracking-widest">{about.sectionNumber}</span>
          <div className="about-line h-px w-24 bg-white/20 origin-left" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">{about.sectionLabel}</span>
        </div>

        {/* Title */}
        <h2 
          ref={titleRef}
          className="font-display text-display-md md:text-display-lg font-medium text-highlight mb-16 md:mb-24 max-w-4xl"
        >
          {about.title}
        </h2>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column - Description */}
          <div ref={contentRef} className="space-y-8">
            {about.paragraphs.map((paragraph, index) => (
              <p 
                key={index}
                className={index === 0 
                  ? "text-body-lg text-accent/80 leading-relaxed"
                  : "text-body-md text-muted leading-relaxed"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right column - Stats/Focus areas */}
          <div ref={statsRef} className="space-y-12">
            {about.focusAreas.map((area, index) => (
              <div key={index} className="stat-item">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-highlight mb-4">
                  {area.title}
                </h3>
                <p className="text-muted text-body-md">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  )
}
