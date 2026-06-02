import { EXERCISES } from '../data/exercises'

const DAYS   = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const COLORS = ['violet','blue','emerald','orange','rose','cyan','gray']

function pickEx(cat, equipment, count = 5) {
  const hasDB   = equipment.includes('dumbbell')
  const hasBand = equipment.includes('band')
  let pool = []
  if (hasDB   && EXERCISES[cat]?.dumbbell)   pool.push(...EXERCISES[cat].dumbbell)
  if (hasBand && EXERCISES[cat]?.band)        pool.push(...EXERCISES[cat].band)
  if (pool.length < count && EXERCISES[cat]?.bodyweight)
    pool.push(...EXERCISES[cat].bodyweight)
  const seen = new Set()
  return pool
    .filter(e => { if (seen.has(e.name)) return false; seen.add(e.name); return true })
    .slice(0, count)
}

export function generatePlan(equipment, goals) {
  const hasYoga = equipment.includes('yoga')
  const wLoss   = goals.includes('weightloss')
  const wFlex   = goals.includes('flexibility') && !goals.includes('strength')
  const wCore   = goals.includes('core') && !goals.includes('strength') && !wLoss

  const yMorn = hasYoga ? EXERCISES.yoga.morning      : []
  const yFlex = hasYoga ? EXERCISES.yoga.flexibility  : []
  const yStr  = hasYoga ? EXERCISES.yoga.strength     : []
  const rest  = [
    { name: 'Light walk 20–30 min', sets: '—',     tip: 'Active recovery — don\'t skip!' },
    { name: 'Full body stretch',    sets: '10 min', tip: 'Hold each pose 30–60s' },
  ]

  let raw
  if (wLoss) {
    raw = [
      { label:'HIIT + Lower',      icon:'🔥', ex:[...pickEx('hiit',equipment,3),...pickEx('lower',equipment,3)] },
      { label:'Upper Strength',    icon:'💪', ex:[...pickEx('upper_push',equipment,3),...pickEx('upper_pull',equipment,2)] },
      { label:hasYoga?'Yoga Recovery':'Core Day', icon:'🧘', ex:hasYoga?[...yMorn,...yFlex.slice(0,2)]:pickEx('core',equipment,5) },
      { label:'Full Body Circuit', icon:'⚡', ex:[...pickEx('lower',equipment,2),...pickEx('upper_push',equipment,2),...pickEx('core',equipment,2)] },
      { label:'HIIT + Core',       icon:'🎯', ex:[...pickEx('hiit',equipment,3),...pickEx('core',equipment,3)] },
      { label:'Lower + Stretch',   icon:'🌟', ex:[...pickEx('lower',equipment,4),...(hasYoga?yFlex.slice(0,2):[])] },
      { label:'Rest & Walk',       icon:'😴', ex:rest },
    ]
  } else if (wFlex) {
    raw = [
      { label:'Yoga + Lower',      icon:'🧘', ex:[...yMorn,...pickEx('lower',equipment,3)] },
      { label:'Upper Strength',    icon:'💪', ex:[...pickEx('upper_push',equipment,3),...pickEx('upper_pull',equipment,2)] },
      { label:'Deep Flex Flow',    icon:'🤸', ex:hasYoga?yFlex.slice(0,6):pickEx('core',equipment,5) },
      { label:'Lower + Core',      icon:'🎯', ex:[...pickEx('lower',equipment,3),...pickEx('core',equipment,2)] },
      { label:hasYoga?'Yoga Strength':'Full Body', icon:'🌿', ex:hasYoga?[...yMorn.slice(0,2),...yStr.slice(0,3)]:[...pickEx('lower',equipment,3),...pickEx('upper_push',equipment,2)] },
      { label:'Full Body + Stretch',icon:'✨', ex:[...pickEx('lower',equipment,2),...pickEx('upper_push',equipment,1),...(hasYoga?yFlex.slice(0,2):pickEx('core',equipment,2))] },
      { label:'Rest & Recovery',   icon:'😴', ex:rest },
    ]
  } else if (wCore) {
    raw = [
      { label:'Core + Lower',  icon:'🎯', ex:[...pickEx('core',equipment,4),...pickEx('lower',equipment,2)] },
      { label:'Upper + Core',  icon:'💪', ex:[...pickEx('upper_push',equipment,3),...pickEx('core',equipment,2)] },
      { label:hasYoga?'Yoga Mobility':'Core Stretch', icon:'🧘', ex:hasYoga?[...yMorn,...yFlex.slice(0,3)]:pickEx('core',equipment,5) },
      { label:'Core Blast',    icon:'🔥', ex:pickEx('core',equipment,6) },
      { label:'Full Body + Core', icon:'⚡', ex:[...pickEx('lower',equipment,2),...pickEx('upper_pull',equipment,2),...pickEx('core',equipment,2)] },
      { label:'Active Recovery',  icon:'🌿', ex:hasYoga?[...yFlex.slice(0,4),...pickEx('core',equipment,2)]:[...pickEx('core',equipment,3)] },
      { label:'Full Rest',     icon:'😴', ex:rest },
    ]
  } else {
    raw = [
      { label:'Lower Body',        icon:'🦵', ex:pickEx('lower',equipment,5) },
      { label:'Upper Push',        icon:'💪', ex:[...pickEx('upper_push',equipment,4),...pickEx('core',equipment,1)] },
      { label:hasYoga?'Yoga & Flex':'Active Recovery', icon:'🧘', ex:hasYoga?[...yMorn,...yFlex.slice(0,3)]:[{ name:'Walk 20–30 min',sets:'—',tip:'Recovery' },...pickEx('core',equipment,3)] },
      { label:'Upper Pull + Core', icon:'🎯', ex:[...pickEx('upper_pull',equipment,4),...pickEx('core',equipment,2)] },
      { label:'Full Body',         icon:'⚡', ex:[...pickEx('lower',equipment,2),...pickEx('upper_push',equipment,2),...pickEx('core',equipment,2)] },
      { label:hasYoga?'Core + Yoga':'Core + Stretch', icon:'🌟', ex:[...pickEx('core',equipment,4),...(hasYoga?yFlex.slice(0,3):[{ name:'Full body stretch',sets:'15 min',tip:'Head to toe' }])] },
      { label:'Rest & Recovery',   icon:'😴', ex:rest },
    ]
  }

  return raw.map((d, i) => ({
    ...d,
    exercises: d.ex,
    day:      DAYS[i],
    colorKey: COLORS[i],
  }))
}