export const EXERCISES = {
  lower: {
    dumbbell: [
      { name: 'Goblet Squat',      sets: '3×12',      tip: 'Hold at chest, knees out' },
      { name: 'Romanian Deadlift', sets: '3×12',      tip: 'Hinge at hips, soft knees' },
      { name: 'Reverse Lunge',     sets: '3×10/side', tip: 'Hold dumbbells at sides' },
      { name: 'Sumo Squat',        sets: '3×15',      tip: 'Wide stance, toes 45°' },
      { name: 'Dumbbell Step Up',  sets: '3×10/side', tip: 'Drive through heel' },
    ],
    band: [
      { name: 'Banded Squat',       sets: '4×15',      tip: 'Band above knees' },
      { name: 'Glute Bridge',       sets: '4×20',      tip: 'Squeeze 2s at top' },
      { name: 'Lateral Band Walk',  sets: '3×15/side', tip: 'Stay in quarter-squat' },
      { name: 'Standing Abduction', sets: '3×15/side', tip: 'Hold wall for balance' },
      { name: 'Clamshell',          sets: '3×20/side', tip: 'Lie on side, feet stacked' },
    ],
    bodyweight: [
      { name: 'Bodyweight Squat', sets: '4×20',      tip: 'Sit back, chest up' },
      { name: 'Wall Sit',         sets: '3×40s',     tip: 'Thighs parallel to floor' },
      { name: 'Glute Bridge',     sets: '4×20',      tip: 'Drive hips up high' },
      { name: 'Donkey Kick',      sets: '3×15/side', tip: 'On all fours, flex foot' },
    ],
  },
  upper_push: {
    dumbbell: [
      { name: 'Shoulder Press',    sets: '3×12', tip: 'Brace core, don\'t arch' },
      { name: 'Floor Chest Press', sets: '3×12', tip: 'Lie on mat, elbows 45°' },
      { name: 'Lateral Raise',     sets: '3×12', tip: 'Slight bend in elbow' },
      { name: 'Tricep Extension',  sets: '3×12', tip: 'Both hands on one DB' },
    ],
    band: [
      { name: 'Band Shoulder Press',  sets: '3×15', tip: 'Stand on band, press up' },
      { name: 'Band Chest Press',     sets: '3×15', tip: 'Anchor band behind you' },
      { name: 'Band Tricep Pushdown', sets: '3×15', tip: 'Anchor above head' },
    ],
    bodyweight: [
      { name: 'Knee Push Up',        sets: '3×10', tip: 'Progress to full push up' },
      { name: 'Tricep Dip (chair)',   sets: '3×12', tip: 'Sturdy chair only' },
    ],
  },
  upper_pull: {
    dumbbell: [
      { name: 'Bent Over Row', sets: '3×12', tip: 'Hinge 45°, pull elbows back' },
      { name: 'Bicep Curl',    sets: '3×12', tip: 'No swinging, full range' },
      { name: 'Hammer Curl',   sets: '3×12', tip: 'Neutral grip' },
      { name: 'Rear Delt Fly', sets: '3×12', tip: 'Hinge forward, wide arms' },
    ],
    band: [
      { name: 'Band Seated Row',  sets: '3×15', tip: 'Wrap around feet' },
      { name: 'Band Face Pull',   sets: '3×15', tip: 'Anchor at eye level' },
      { name: 'Band Pull Apart',  sets: '3×20', tip: 'Arms straight throughout' },
      { name: 'Band Bicep Curl',  sets: '3×15', tip: 'Stand on band' },
    ],
    bodyweight: [
      { name: 'Superman Hold', sets: '3×12', tip: 'Lift arms and legs together' },
    ],
  },
  core: {
    dumbbell: [
      { name: 'Russian Twist',   sets: '3×20',      tip: 'Feet off floor for challenge' },
      { name: 'Weighted Crunch', sets: '3×15',      tip: 'Hold DB at chest' },
    ],
    band: [
      { name: 'Pallof Press', sets: '3×12/side', tip: 'Anti-rotation core' },
      { name: 'Band Woodchop', sets: '3×12/side', tip: 'Anchor at shoulder height' },
    ],
    bodyweight: [
      { name: 'Plank',             sets: '3×35s',     tip: 'Hips level, don\'t drop' },
      { name: 'Side Plank',        sets: '3×25s/side', tip: 'Stack or stagger feet' },
      { name: 'Bird Dog',          sets: '3×10/side', tip: 'Don\'t rotate pelvis' },
      { name: 'Dead Bug',          sets: '3×10/side', tip: 'Press lower back to floor' },
      { name: 'Hollow Body Hold',  sets: '3×20s',     tip: 'Arms overhead, legs low' },
      { name: 'Mountain Climbers', sets: '3×30s',     tip: 'Hips stable, fast pace' },
    ],
  },
  yoga: {
    morning: [
      { name: 'Sun Salutation A', sets: '3 rounds', tip: 'Sync breath with movement' },
      { name: 'Cat-Cow',          sets: '10 reps',  tip: 'Warm up the spine' },
      { name: 'Downward Dog',     sets: '60s',      tip: 'Pedal heels for calves' },
      { name: 'Child\'s Pose',    sets: '60s',      tip: 'Rest and breathe deep' },
    ],
    flexibility: [
      { name: 'Pigeon Pose',         sets: '90s/side', tip: 'Deepest hip opener' },
      { name: 'Seated Forward Fold', sets: '60s',      tip: 'Hamstrings + lower back' },
      { name: 'Supine Twist',        sets: '60s/side', tip: 'Shoulder stays on floor' },
      { name: 'Warrior 1 + 2',       sets: '45s each', tip: 'Full body activation' },
      { name: 'Legs Up the Wall',    sets: '3 min',    tip: 'Recovery + circulation' },
      { name: 'Butterfly Pose',      sets: '60s',      tip: 'Inner thigh opener' },
    ],
    strength: [
      { name: 'Chair Pose',  sets: '45s',      tip: 'Quad burner — hold it!' },
      { name: 'Warrior 3',   sets: '30s/side', tip: 'Balance + hip strength' },
      { name: 'Boat Pose',   sets: '3×20s',    tip: 'Core yoga classic' },
      { name: 'Chaturanga',  sets: '5 reps',   tip: 'Yoga push up, elbows in' },
    ],
  },
  hiit: {
    bodyweight: [
      { name: 'Jump Squat',        sets: '3×15',     tip: 'Land softly' },
      { name: 'Modified Burpee',   sets: '3×10',     tip: 'Step back instead of jump' },
      { name: 'High Knees',        sets: '3×30s',    tip: 'Drive knees to hip height' },
      { name: 'Mountain Climbers', sets: '3×30s',    tip: 'Hips stable, fast pace' },
    ],
    band: [
      { name: 'Band Squat Jump', sets: '3×15', tip: 'Band above knees' },
      { name: 'Band Shuffle',    sets: '3×30s', tip: 'Stay low, resist the band' },
    ],
  },
}