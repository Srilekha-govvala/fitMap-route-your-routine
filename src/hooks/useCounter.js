import { useState, useEffect } from 'react'

export function useCounter(target, active) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!active || !target) return
    setVal(0)
    let v = 0
    const step = Math.max(1, Math.round(target / 40))
    const id = setInterval(() => {
      v = Math.min(v + step, target)
      setVal(v)
      if (v >= target) clearInterval(id)
    }, 25)
    return () => clearInterval(id)
  }, [target, active])

  return val
}