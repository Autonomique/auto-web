'use client'

import type { ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function MagneticLink({ href, children, secondary = false }: {
  href: string
  children: ReactNode
  secondary?: boolean
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 100, damping: 20 })
  const springY = useSpring(y, { stiffness: 100, damping: 20 })
  const reducedMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      className={`button ${secondary ? 'button-secondary' : 'button-primary'}`}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        if (reducedMotion || event.pointerType !== 'mouse') return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.09)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.09)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
      onBlur={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.a>
  )
}
