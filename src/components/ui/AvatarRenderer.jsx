// Avatar system to replace emojis with stylized components
export const AVATARS = {
  // Workout types
  strength: '💪',
  cardio: '🏃',
  flexibility: '🧘',
  core: '🎯',
  yoga: '🧘',
  hiit: '🔥',
  recovery: '😴',
  fullBody: '⚡',
  
  // Body parts
  lower: '🦵',
  upper: '💪',
  push: '📤',
  pull: '📥',
  
  // General
  dumbbell: '🏋️',
  band: '🔁',
  yoga_mat: '🧘',
  welcome: '🏋️',
}

export default function AvatarRenderer({ type, size = 'md' }) {
  const emoji = AVATARS[type] || '💪'
  
  const sizeMap = {
    xs: 'text-2xl',
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
  }
  
  const animationClass = type === 'welcome' ? 'animate-bounce' : ''
  
  return (
    <div className={`${sizeMap[size]} ${animationClass}`}>
      {emoji}
    </div>
  )
}
