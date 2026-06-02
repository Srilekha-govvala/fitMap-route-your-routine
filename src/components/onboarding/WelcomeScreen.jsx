import MotivationalQuotes from '../ui/MotivationalQuotes'
import DoodleBackground from '../ui/DoodleBackground'

export default function WelcomeScreen({ onStart, ws }) {
  return (
    <div className="min-h-screen bg-[#080810] flex flex-col items-center justify-center p-6 overflow-hidden" style={ws}>
      <DoodleBackground />
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-br from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent text-center">
          FitMap
        </h1>
        
        <p className="text-gray-400 text-sm mb-0 text-center max-w-md">
          Route your routine
        </p>

        {/* Motivational Quotes Section */}
        <MotivationalQuotes />

        <button
          onClick={onStart}
          className="px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500
                     text-white font-bold text-lg border-none cursor-pointer
                     hover:scale-105 transition-all transform duration-200
                     shadow-lg hover:shadow-2xl hover:shadow-violet-500/50"
          style={{ 
            animation: 'glow 2s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
          }}
        >
          Let's Build Your Plan →
        </button>

      </div>
    </div>
  )
}