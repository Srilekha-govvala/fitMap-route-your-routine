import { useState, useEffect } from 'react'

const QUOTES = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind that you need to convince.",
  "Don't watch the clock; do what it does. Keep going.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "Success is the result of preparation, hard work, and learning from failure.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "You don't have to be great to start, but you have to start to be great.",
  "A healthy lifestyle takes commitment but doesn't have to be complicated.",
  "Small daily improvements are the key to staggering long-term results.",
  "Take care of your body. It's the only place you have to live.",
]

export default function MotivationalQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'holding' | 'erasing'

  const quote = QUOTES[currentQuote]

  useEffect(() => {
    let timer

    if (phase === 'typing') {
      if (displayText.length < quote.length) {
        timer = setTimeout(() => {
          setDisplayText(quote.substring(0, displayText.length + 1))
        }, 50)
      } else {
        // Move to holding phase after typing completes
        timer = setTimeout(() => setPhase('holding'), 3000)
      }
    } else if (phase === 'holding') {
      // Hold for 2 seconds then start erasing
      timer = setTimeout(() => setPhase('erasing'), 2000)
    } else if (phase === 'erasing') {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, 30)
      } else {
        // Move to next quote
        setCurrentQuote((prev) => (prev + 1) % QUOTES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, phase, quote])

  return (
    <div className="min-h-24 flex items-center justify-center mb-4">
      <div className="text-center max-w-2xl px-6">
        <p className="text-lg md:text-2xl font-semibold text-violet-300 h-24 flex items-center justify-center">
          {displayText}
          <span className="animate-pulse ml-1">|</span>
        </p>
      </div>
    </div>
  )
}
