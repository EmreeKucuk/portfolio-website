declare module 'lenis' {
  interface LenisOptions {
    duration?: number
    easing?: (t: number) => number
    orientation?: 'vertical' | 'horizontal'
    gestureOrientation?: 'vertical' | 'horizontal' | 'both'
    smoothWheel?: boolean
    wheelMultiplier?: number
    touchMultiplier?: number
    infinite?: boolean
    autoResize?: boolean
    prevent?: (node: Element) => boolean
    virtualScroll?: (data: { deltaX: number; deltaY: number; event: Event }) => boolean
    overscroll?: boolean
  }

  interface ScrollEvent {
    scroll: number
    limit: number
    velocity: number
    direction: 1 | -1
    progress: number
  }

  class Lenis {
    constructor(options?: LenisOptions)
    raf(time: number): void
    scrollTo(
      target: number | string | HTMLElement,
      options?: {
        offset?: number
        immediate?: boolean
        duration?: number
        easing?: (t: number) => number
        lock?: boolean
        force?: boolean
        onComplete?: () => void
      }
    ): void
    on(event: 'scroll', callback: (e: ScrollEvent) => void): void
    off(event: 'scroll', callback: (e: ScrollEvent) => void): void
    destroy(): void
    stop(): void
    start(): void
    resize(): void
    readonly scroll: number
    readonly limit: number
    readonly velocity: number
    readonly direction: 1 | -1
    readonly progress: number
    readonly isScrolling: boolean
    readonly isStopped: boolean
  }

  export default Lenis
}
