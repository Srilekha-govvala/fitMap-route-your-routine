import { ArrowLeft } from 'lucide-react'

export default function PageHeader({ onBack, showBack = true }) {
  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <div className="relative z-20 flex items-center justify-between mb-8 animate-slideUp">
      {/* Logo/Brand */}
      <button
        onClick={handleLogoClick}
        className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-black text-lg">FM</span>
        </div>
        <div className="hidden sm:block">
          <p className="text-white font-black text-sm">FitMap</p>
          <p className="text-violet-400 text-xs">Route your routine</p>
        </div>
      </button>

      {/* Back Button */}
      {showBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 text-sm border border-white/10 bg-white/5 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      )}
    </div>
  )
}
