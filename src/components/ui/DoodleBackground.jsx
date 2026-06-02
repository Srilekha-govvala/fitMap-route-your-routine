import { useEffect, useRef, useState } from 'react'
import {
  Dumbbell,
  Activity,
  Heart,
  Zap,
  TrendingUp,
  Wind,
  Target,
  Flame,
  Droplets,
  Volume2,
} from 'lucide-react'

const DOODLES = [
  { icon: Dumbbell },
  { icon: Activity },
  { icon: Heart },
  { icon: Zap },
  { icon: TrendingUp },
  { icon: Wind },
  { icon: Target },
  { icon: Flame },
  { icon: Droplets },
  { icon: Volume2 },
]

const generateDoodles = () => {
  const doodles = []
  const minDistance = 120 // Minimum distance between doodles to prevent overlap
  let attempts = 0
  const maxAttempts = 10000

  while (doodles.length < 50 && attempts < maxAttempts) {
    attempts++
    const x = Math.random() * 100
    const y = Math.random() * 100
    const size = Math.random() * 35 + 25

    // Check for overlaps
    let hasOverlap = false
    for (const existingDoodle of doodles) {
      const distance = Math.sqrt(
        Math.pow((x - existingDoodle.x) * window.innerWidth / 100, 2) +
        Math.pow((y - existingDoodle.y) * window.innerHeight / 100, 2)
      )
      if (distance < minDistance + size) {
        hasOverlap = true
        break
      }
    }

    if (!hasOverlap) {
      const doodle = DOODLES[doodles.length % DOODLES.length]
      doodles.push({
        id: doodles.length,
        icon: doodle.icon,
        x,
        y,
        size,
        duration: Math.random() * 8 + 6,
      })
    }
  }

  return doodles
}

export default function DoodleBackground() {
  const containerRef = useRef(null)
  const [doodles, setDoodles] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [doodleOpacity, setDoodleOpacity] = useState({})
  const doodleRefsRef = useRef({})

  // Initialize doodles
  useEffect(() => {
    setDoodles(generateDoodles())
  }, [])

  // Track mouse movement and update opacities
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (doodles.length === 0) return

      const newOpacity = {}
      const INTERACT_RADIUS = 150
      const BASE_OPACITY = 0.06
      const MAX_OPACITY = 0.35

      doodles.forEach((doodle) => {
        const ref = doodleRefsRef.current[doodle.id]
        if (!ref) {
          newOpacity[doodle.id] = BASE_OPACITY
          return
        }

        const rect = ref.getBoundingClientRect()
        const doodleX = rect.left + rect.width / 2
        const doodleY = rect.top + rect.height / 2

        const distance = Math.sqrt(
          Math.pow(e.clientX - doodleX, 2) + Math.pow(e.clientY - doodleY, 2)
        )

        if (distance < INTERACT_RADIUS) {
          const proximity = 1 - distance / INTERACT_RADIUS
          newOpacity[doodle.id] = BASE_OPACITY + proximity * (MAX_OPACITY - BASE_OPACITY)
        } else {
          newOpacity[doodle.id] = BASE_OPACITY
        }
      })

      setDoodleOpacity(newOpacity)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [doodles])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {doodles.map((doodle) => {
        const Icon = doodle.icon
        const opacity = doodleOpacity[doodle.id] ?? 0.06

        return (
          <div
            key={doodle.id}
            ref={(el) => {
              if (el) doodleRefsRef.current[doodle.id] = el
            }}
            className="absolute transition-all"
            style={{
              left: `${doodle.x}%`,
              top: `${doodle.y}%`,
              opacity: opacity,
              transform: `translate(-50%, -50%) scale(${1 + (opacity - 0.06) * 0.4})`,
              filter: opacity > 0.1 ? `drop-shadow(0 0 ${opacity * 15}px rgba(139, 92, 246, 0.6))` : 'none',
              transitionProperty: 'opacity, filter, transform',
              transitionDuration: '200ms',
              transitionTimingFunction: 'ease-out',
            }}
          >
            <Icon
              size={doodle.size}
              strokeWidth={1.5}
              className="text-violet-400"
              style={{
                animation: `float ${doodle.duration}s ease-in-out infinite`,
              }}
            />
          </div>
        )
      })}

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(-15px) rotateZ(3deg);
          }
        }
      `}</style>
    </div>
  )
}
