import { useEffect } from 'react'

/**
 * Arma os elementos `.reveal` uma única vez.
 *
 * O conteúdo nasce visível no CSS: a classe `is-armed` só é adicionada por JS,
 * então visitante sem JavaScript — ou com `prefers-reduced-motion` — recebe a
 * página inteira sem depender de nada. Anima só opacity e transform.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.getElementById('root')
    if (!root || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    root.classList.add('is-armed')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    const targets = root.querySelectorAll('.reveal')
    targets.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      root.classList.remove('is-armed')
    }
  }, [])
}
