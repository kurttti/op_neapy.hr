import { useState, useRef, useEffect } from 'react'

/**
 * Spotlight wrapper component. It renders its children and overlays a radial
 * gradient that follows the mouse or finger, simulating a soft spotlight
 * effect. The gradient colour is drawn from the `--highlight` token. When
 * prefers‑reduced‑motion is enabled the effect is disabled.
 */
export default function Spotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 50, y: 50 })
  const [reduceMotion, setReduceMotion] = useState(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    const x = ((e.clientX - bounds.left) / bounds.width) * 100
    const y = ((e.clientY - bounds.top) / bounds.height) * 100
    setCoords({ x, y })
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, hsla(var(--highlight) / 0.3), transparent 60%)`,
          opacity: reduceMotion ? 0 : 1
        }}
      />
      {children}
    </div>
  )
}