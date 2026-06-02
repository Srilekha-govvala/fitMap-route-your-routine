import { useState } from 'react'
import WelcomeScreen  from './components/onboarding/WelcomeScreen'
import ProfileStep    from './components/onboarding/ProfileStep'
import EquipmentStep  from './components/onboarding/EquipmentStep'
import GoalsStep      from './components/onboarding/GoalsStep'
import PlanDisplay    from './components/plan/PlanDisplay'
import { generatePlan } from './utils/planGenerator'

export default function App() {
  // ── Shared state ──────────────────────────────────────
  const [step,      setStep]      = useState(-1) // -1 = welcome
  const [profile,   setProfile]   = useState({ age: '', weight: '' })
  const [equipment, setEquipment] = useState([])
  const [goals,     setGoals]     = useState([])
  const [plan,      setPlan]      = useState(null)

  // ── Fade transition helper ─────────────────────────────
  const [visible, setVisible] = useState(true)

  const fade = (fn) => {
    setVisible(false)
    setTimeout(() => { fn(); setVisible(true) }, 260)
  }

  // Pass this as style prop to every screen's root div
  const ws = {
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(14px)',
    transition: 'opacity .26s ease, transform .26s ease',
  }

  // ── Generate plan then navigate ───────────────────────
  const handleGenerate = () => {
    setPlan(generatePlan(equipment, goals))
    fade(() => setStep(3))
  }

  // ── Step router ───────────────────────────────────────
  if (step === -1) return (
    <WelcomeScreen
      ws={ws}
      onStart={() => fade(() => setStep(0))}
    />
  )
  if (step === 0) return (
    <ProfileStep
      ws={ws}
      profile={profile}
      setProfile={setProfile}
      onBack={() => fade(() => setStep(-1))}
      onNext={() => fade(() => setStep(1))}
    />
  )
  if (step === 1) return (
    <EquipmentStep
      ws={ws}
      equipment={equipment}
      setEquipment={setEquipment}
      onBack={() => fade(() => setStep(0))}
      onNext={() => fade(() => setStep(2))}
    />
  )
  if (step === 2) return (
    <GoalsStep
      ws={ws}
      goals={goals}
      setGoals={setGoals}
      onBack={() => fade(() => setStep(1))}
      onNext={handleGenerate}
    />
  )
  if (step === 3) return (
    <PlanDisplay
      ws={ws}
      plan={plan}
      profile={profile}
      equipment={equipment}
      goals={goals}
      onBack={() => fade(() => setStep(2))}
    />
  )
  return null}
