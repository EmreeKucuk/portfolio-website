'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { TechStack } from '@/components/sections/TechStack'
import { Contact } from '@/components/sections/Contact'
import { Navigation } from '@/components/Navigation'
import { Preloader } from '@/components/Preloader'
import { CustomCursor } from '@/components/CustomCursor'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  )
}
