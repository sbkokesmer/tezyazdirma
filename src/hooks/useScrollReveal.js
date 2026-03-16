import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useScrollRevealGroup() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.reveal || 0
            entry.target.style.animationDelay = `${delay * 0.08}s`
            entry.target.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )

    children.forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])

  return ref
}
