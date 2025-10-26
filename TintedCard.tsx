import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'

/**
 * A 3D‑tilting card component. It uses motion values to track the mouse
 * position over the card and apply a subtle rotation. If the user has
 * enabled prefers‑reduced‑motion, the tilt effect is disabled. Colours and
 * spacings come from CSS variables defined in `app/globals.css` via
 * Tailwind classes. Children are rendered inside the card container.
 */
interface TintedCardProps {
  children: ReactNode
}

export default function TintedCard({ children }: TintedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // Motion values for rotation around the X and Y axes
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // Smooth out the motion values
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const bounds = cardRef.current?.getBoundingClientRect()
    if (!bounds) return
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const midX = bounds.width / 2
    const midY = bounds.height / 2
    const rotateMax = 8 // degrees
    const newRotateY = ((x - midX) / midX) * rotateMax * -1
    const newRotateX = ((y - midY) / midY) * rotateMax
    rotateX.set(newRotateX)
    rotateY.set(newRotateY)
  }

  function handlePointerLeave() {
    // Reset rotations when pointer leaves
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative p-[1px] rounded-xl transition-colors duration-300"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        className="rounded-xl bg-card/60 backdrop-blur-md border border-border/50 p-6 shadow-md"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}