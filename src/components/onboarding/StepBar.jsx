const STEPS = ['Profile', 'Equipment', 'Goals']

export default function StepBar({ step }) {
  return (
    <div className="w-full max-w-md mb-7">
      <div className="flex items-center justify-center">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className={[
              'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300',
              i < step  ? 'bg-violet-500 text-white' : '',
              i === step ? 'bg-gradient-to-br from-violet-500 to-indigo-500 text-white ring-2 ring-violet-300 shadow-[0_0_16px_rgba(139,92,246,.5)]' : '',
              i > step  ? 'bg-white/10 text-gray-600' : '',
            ].filter(Boolean).join(' ')}>
              {i < step ? '✓' : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`w-14 h-0.5 transition-all duration-400 ${i < step ? 'bg-violet-500' : 'bg-white/10'}`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-around max-w-[220px] mx-auto mt-1.5">
        {STEPS.map((s, i) => (
          <span key={i} className={`text-[10px] w-14 text-center ${i === step ? 'text-violet-300' : 'text-gray-700'}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}