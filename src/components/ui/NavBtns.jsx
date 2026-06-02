export default function NavBtns({
  onBack,
  onNext,
  nextLabel = 'Continue →',
  disabled  = false,
}) {
  return (
    <div className="flex gap-2.5 mt-1 animate-slideUp">
      <button
        onClick={onBack}
        className="flex-1 py-3.5 rounded-xl border border-white/10 bg-white/5
                   text-gray-400 text-sm font-semibold cursor-pointer
                   hover:bg-white/10 hover:border-white/20 transition-all transform hover:scale-105
                   active:scale-95"
      >
        ← Back
      </button>
      <button
        onClick={onNext}
        disabled={disabled}
        className={`flex-[2] py-3.5 rounded-xl border-none text-sm font-bold
                    transition-all cursor-pointer transform hover:scale-105 active:scale-95 ${
          disabled
            ? 'bg-violet-500/20 text-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-[0_4px_18px_rgba(139,92,246,.35)] hover:shadow-[0_6px_24px_rgba(139,92,246,.5)]'
        }`}
      >
        {nextLabel}
      </button>
    </div>
  )
}