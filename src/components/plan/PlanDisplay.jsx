import { useState } from 'react'
import { Download } from 'lucide-react'
import DoodleBackground from '../ui/DoodleBackground'
import PageHeader from '../ui/PageHeader'
import { exportPlanToPDF } from '../../utils/pdfExport'

export default function PlanDisplay({ ws, plan, profile, onBack }) {
  const [selectedDay, setSelectedDay] = useState(0)

  if (!plan || plan.length === 0) {
    return (
      <div className="min-h-screen bg-[#080810] p-6 flex items-center justify-center" style={ws}>
        <p className="text-white">Loading plan...</p>
      </div>
    )
  }

  const currentDay = plan[selectedDay]

  return (
    <div className="min-h-screen bg-[#080810] p-6" style={ws}>
      <DoodleBackground />
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <button 
        onClick={onBack}
        className="mb-6 text-gray-400 text-sm border border-white/10 bg-white/5 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-all hover:scale-105"
      >
        ← Edit Plan
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <PageHeader onBack={onBack} showBack={true} />

        {/* Header */}
        <h2 className="text-white text-3xl font-black mb-1 animate-slideUp">Your FitMap Plan</h2>
        <p className="text-violet-400 text-sm mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Age: {profile.age} yrs · Weight: {profile.weight} kg · 
          <span className="text-emerald-400 ml-2 font-semibold">
            Protein Target: ~{Math.round(profile.weight * 1.5)}g/day
          </span>
        </p>

        {/* Days Selection - Horizontal Scroll */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex gap-3 min-w-max animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {plan.map((day, i) => (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all transform duration-200 cursor-pointer hover:scale-105 whitespace-nowrap ${
                  i === selectedDay
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
              >
                <span className="text-2xl">{day.icon}</span>
                <div className="text-left">
                  <p className="font-bold text-sm">{day.day}</p>
                  <p className="text-xs opacity-75">{day.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Day Exercises - Grid Layout */}
        {currentDay && (
          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-4xl">{currentDay.icon}</span>
              <div>
                <h3 className="text-white text-2xl font-black">{currentDay.day}</h3>
                <p className="text-violet-400 text-sm">{currentDay.label}</p>
              </div>
            </div>

            {currentDay.exercises && currentDay.exercises.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentDay.exercises.map((exercise, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/50 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer animate-slideUp"
                    style={{ animationDelay: `${0.35 + idx * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">
                        {exercise.name}
                      </h4>
                      <span className="bg-violet-500/20 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full">
                        {exercise.sets}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      💡 {exercise.tip}
                    </p>

                    {/* Hover Detail */}
                    <div className="mt-4 pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-emerald-300 text-xs font-semibold flex items-center gap-1">
                        ✨ <span>Focus on form & breath</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <p className="text-gray-400">No exercises for this day</p>
              </div>
            )}

            {/* Stats Card */}
            <div className="mt-8 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/30 rounded-2xl p-6 animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-white text-sm">Total Exercises</p>
                  <p className="text-white text-2xl font-black">{currentDay.exercises?.length || 0}</p>
                </div>
                <div>
                  <p className="text-white text-sm">Difficulty</p>
                  <p className="text-violet-300 text-2xl font-black">
                    {currentDay.label.includes('Rest') ? 'Light' : 
                     currentDay.label.includes('HIIT') ? 'Hard' : 'Medium'}
                  </p>
                </div>
                <div>
                  <p className="text-white text-sm">Focus Area</p>
                  <p className="text-emerald-300 text-lg font-bold">
                    {currentDay.label.split(' ')[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Indicator */}
        <div className="mt-8 flex justify-center gap-2 pb-4 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          {plan.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedDay(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedDay ? 'bg-violet-500 w-8' : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* PDF Export Button */}
        <div className="mt-10 flex justify-center animate-slideUp" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => exportPlanToPDF(plan, profile)}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg border-none cursor-pointer hover:scale-105 transition-all transform duration-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <Download size={20} />
            Save Plan as PDF
          </button>
        </div>
      </div>
    </div>
  )
}