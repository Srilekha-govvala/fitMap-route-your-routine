import StepBar from './StepBar'
import NavBtns from '../ui/NavBtns'
import DoodleBackground from '../ui/DoodleBackground'
import PageHeader from '../ui/PageHeader'

const OPTIONS = [
  { id: 'dumbbell', label: '🏋️ Dumbbells' },
  { id: 'band',     label: '🔁 Resistance Bands' },
  { id: 'yoga',     label: '🧘 Yoga Mat' },
]

export default function EquipmentStep({ ws, equipment, setEquipment, onBack, onNext }) {
  const toggle = (id) =>
    setEquipment(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  return (
    <div className="min-h-screen bg-[#080810] p-6 flex flex-col items-center relative overflow-hidden" style={ws}>
      <DoodleBackground />
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <PageHeader onBack={onBack} showBack={true} />
        <StepBar step={1} />
        
        <h2 className="text-white text-2xl font-black text-center mb-2 animate-fadeIn">Your Equipment</h2>
        <p className="text-violet-400 text-sm text-center mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          ✨ Select the equipment you have available
        </p>

        <div className="flex flex-col gap-3 mb-6">
          {OPTIONS.map((o, idx) => {
            const sel = equipment.includes(o.id)
            return (
              <button 
                key={o.id} 
                onClick={() => toggle(o.id)}
                className={`py-4 px-5 rounded-2xl border-2 text-white font-semibold cursor-pointer transition-all transform hover:scale-105 animate-slideUp ${
                  sel 
                    ? 'border-violet-500 bg-violet-500/15 shadow-lg shadow-violet-500/20' 
                    : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
              >
                <span className="flex items-center justify-between">
                  <span>{o.label}</span>
                  <span className={`transition-all ${sel ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                    ✓
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {equipment.length > 0 && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-6 animate-slideUp">
            <p className="text-emerald-300 text-sm">
              <span className="font-semibold">✨ Selected:</span> {equipment.join(', ')}
            </p>
          </div>
        )}

        <div className="animate-slideUp" style={{ animationDelay: '0.45s' }}>
          <NavBtns onBack={onBack} onNext={onNext} disabled={equipment.length === 0} />
        </div>
      </div>
    </div>
  )
}