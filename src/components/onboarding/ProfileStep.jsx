import { useState } from 'react'
import StepBar from './StepBar'
import NavBtns from '../ui/NavBtns'
import DoodleBackground from '../ui/DoodleBackground'
import PageHeader from '../ui/PageHeader'

export default function ProfileStep({ ws, profile, setProfile, onBack, onNext }) {
  const [errors, setErrors] = useState({})
  
  const validateAge = (age) => {
    const ageNum = parseInt(age)
    if (!age) return 'Age is required'
    if (isNaN(ageNum)) return 'Age must be a number'
    if (ageNum < 6) return 'Age must be at least 6'
    if (ageNum > 100) return 'Age must be 100 or less'
    return ''
  }

  const validateWeight = (weight) => {
    const weightNum = parseFloat(weight)
    if (!weight) return 'Weight is required'
    if (isNaN(weightNum)) return 'Weight must be a number'
    if (weightNum <= 0) return 'Weight must be greater than 0'
    return ''
  }

  const handleAgeChange = (value) => {
    setProfile(p => ({ ...p, age: value }))
    const error = validateAge(value)
    setErrors(e => ({ ...e, age: error }))
  }

  const handleWeightChange = (value) => {
    setProfile(p => ({ ...p, weight: value }))
    const error = validateWeight(value)
    setErrors(e => ({ ...e, weight: error }))
  }

  const isReady = profile.age && profile.weight && !errors.age && !errors.weight

  return (
    <div className="min-h-screen bg-[#080810] p-6 flex flex-col items-center relative overflow-hidden" style={ws}>
      <DoodleBackground />
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <PageHeader onBack={onBack} showBack={true} />
        <StepBar step={0} />
        
        <h2 className="text-white text-2xl font-black text-center mb-2 animate-fadeIn">About You</h2>
        <p className="text-violet-400 text-xs text-center mb-8">
          ✨ Help us personalize your fitness plan
        </p>

        <div className="space-y-5">
          {/* Age Input */}
          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <label className="block text-white text-sm font-semibold mb-2">
              Age
            </label>
            <input 
              type="number" 
              placeholder="Enter your age"
              value={profile.age} 
              onChange={e => handleAgeChange(e.target.value)}
              min="6"
              max="100"
              className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all ${
                errors.age 
                  ? 'border-red-500/50 focus:border-red-500' 
                  : 'border-white/10 focus:border-violet-500/50 focus:bg-white/10'
              }`}
            />
            {errors.age && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                ⚠️ {errors.age}
              </p>
            )}
          </div>

          {/* Weight Input */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <label className="block text-white text-sm font-semibold mb-2">
              Weight (kg)
            </label>
            <input 
              type="number" 
              placeholder="Enter your weight"
              value={profile.weight} 
              onChange={e => handleWeightChange(e.target.value)}
              className={`w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all ${
                errors.weight 
                  ? 'border-red-500/50 focus:border-red-500' 
                  : 'border-white/10 focus:border-violet-500/50 focus:bg-white/10'
              }`}
            />
            {errors.weight && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                ⚠️ {errors.weight}
              </p>
            )}
          </div>

          {/* Info Box */}
          {isReady && profile.age && profile.weight && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mt-6 animate-slideUp">
              <p className="text-emerald-300 text-sm">
                <span className="font-semibold">💪 Daily Protein Target:</span> ~{Math.round(parseFloat(profile.weight) * 1.5)}g/day
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <NavBtns onBack={onBack} onNext={onNext} disabled={!isReady} />
        </div>
      </div>
    </div>
  )
}