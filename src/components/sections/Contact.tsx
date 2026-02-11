'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '@/content/siteContent'
import { useLanguage } from '@/context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const { language } = useLanguage()
  const content = siteContent[language]
  const { contact } = content
  
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [time, setTime] = useState('')

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: contact.localTime.timezone,
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const title = titleRef.current
    const content = contentRef.current

    if (!title || !content) return

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

    const elements = content.querySelectorAll('.contact-item')
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const linkIcons: Record<string, React.ReactNode> = {
    GitHub: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    Email: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  }

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center py-32 md:py-48"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-muted tracking-widest">{contact.sectionNumber}</span>
          <div className="h-px w-24 bg-white/20" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">{contact.sectionLabel}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - CTA */}
          <div>
            <h2 
              ref={titleRef}
              className="font-display text-display-md md:text-display-lg font-medium text-highlight mb-8"
            >
              {contact.title}
            </h2>
            <p className="text-body-lg text-muted max-w-lg mb-12">
              {contact.description}
            </p>

            {/* Primary CTA */}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-4 px-8 py-4 bg-highlight text-primary font-medium rounded-full hover:bg-white transition-colors duration-300 group"
            >
              <span>{contact.ctaButton}</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right - Links and info */}
          <div ref={contentRef} className="space-y-12">
            {/* Links */}
            <div className="space-y-4">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted group-hover:text-highlight transition-colors">
                      {linkIcons[link.label]}
                    </span>
                    <span className="text-highlight group-hover:opacity-80 transition-opacity">
                      {link.label}
                    </span>
                  </div>
                  <svg 
                    className="w-4 h-4 text-muted group-hover:text-highlight transition-all group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Location and time */}
            <div className="contact-item grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">{contact.location.label}</p>
                <p className="text-highlight">{contact.location.value}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">{contact.localTime.label}</p>
                <p className="text-highlight font-mono">{time} <span className="text-muted">{contact.localTime.suffix}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} {contact.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted/50 font-mono">
                {contact.footer.builtWith}
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-white/5" />
    </section>
  )
}
