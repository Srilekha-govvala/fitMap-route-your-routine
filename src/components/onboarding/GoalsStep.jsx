import StepBar from './StepBar'
import NavBtns from '../ui/NavBtns'
import DoodleBackground from '../ui/DoodleBackground'
import PageHeader from '../ui/PageHeader'

const OPTIONS = [
  { id: 'strength',    label: '💪 Build Strength' },
  { id: 'flexibility', label: '🤸 Get Flexible' },
  { id: 'core',        label: '🎯 Core Power' },
  { id: 'weightloss',  label: '🔥 Lose Weight' },
]

export default function GoalsStep({ ws, goals, setGoals, onBack, onNext }) {
  const toggle = (id) =>
    setGoals(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  return (
    <div className="min-h-screen bg-[#080810] p-6 flex flex-col items-center relative overflow-hidden" style={ws}>
      <DoodleBackground />
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <PageHeader onBack={onBack} showBack={true} />
        <StepBar step={2} />
        
        <h2 className="text-white text-2xl font-black text-center mb-2 animate-fadeIn">Your Goals</h2>
        <p className="text-violet-400 text-sm text-center mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          ✨ Select what you want to achieve
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {OPTIONS.map((o, idx) => {
            const sel = goals.includes(o.id)
            return (
              <button 
                key={o.id} 
                onClick={() => toggle(o.id)}
                className={`py-5 px-3 rounded-2xl border-2 text-white font-semibold cursor-pointer transition-all transform hover:scale-105 animate-slideUp ${
                  sel 
                    ? 'border-violet-500 bg-violet-500/15 shadow-lg shadow-violet-500/20' 
                    : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
              >
                <span className="flex items-center justify-center flex-col gap-1">
                  <span className="text-xl">{o.label.split(' ')[0]}</span>
                  <span className={`text-xs transition-all ${sel ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    ✓
                  </span>
                </span>
                {o.label}
              </button>
            )
          })}
        </div>

        {goals.length > 0 && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-6 animate-slideUp">
            <p className="text-emerald-300 text-sm">
              <span className="font-semibold">✨ Selected:</span> {goals.length} goal(s)
            </p>
          </div>
        )}

        <div className="animate-slideUp" style={{ animationDelay: '0.55s' }}>
          <NavBtns onBack={onBack} onNext={onNext} nextLabel="Generate My Plan 🚀" disabled={goals.length === 0} />
        </div>
      </div>
    </div>
  )
}