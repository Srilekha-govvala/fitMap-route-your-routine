# 🏋️ FitMap - AI-Powered Personalized Fitness Plan Generator

## Overview

**FitMap** is a modern, interactive web application that generates personalized 7-day fitness plans based on user profile, equipment availability, and fitness goals. Built with React and Vite, it features advanced cursor-tracking animations, PDF export capabilities, and a seamless user experience journey.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Architecture](#project-architecture)
4. [Installation & Setup](#installation--setup)
5. [Library Usage Guide](#library-usage-guide)
6. [Animation System](#animation-system)
7. [Data Flow & Architecture](#data-flow--architecture)
8. [User Journey](#user-journey)
9. [File Structure](#file-structure)
10. [Usage Guide](#usage-guide)

---

## Features

✨ **Interactive Onboarding Flow**
- Multi-step form with smooth transitions
- Real-time form validation
- Progress indication with visual step indicators

🎯 **Personalized Plan Generation**
- Age-based plan customization (6-100 years)
- Equipment-aware workout selection
- Goal-oriented exercise recommendations
- Dynamic protein target calculation

🎨 **Advanced UI/UX**
- Cursor-tracking doodle animations with intersection-based opacity control
- Smooth page transitions with fade animations
- Typewriter effect for motivational quotes
- Gradient text effects and glowing shadows
- Fully responsive design

📥 **Plan Export**
- Professional PDF generation with formatted layout
- Date-stamped exports
- Complete plan with profile info

🎪 **Immersive Visual Design**
- Dark theme with violet/emerald accent colors
- Animated floating doodles (50+ fitness icons)
- Pulsing gradient background animations
- Smooth hover effects and scale transitions

---

## Tech Stack

### Core Framework
- **React 19.2.6** - UI component library with modern hooks
- **Vite 8.0.12** - Lightning-fast build tool with HMR (Hot Module Replacement)

### Styling & Animation
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **Framer Motion 12.40.0** - Advanced animation library (reserved for future enhancements)
- **React Spring 10.0.4** - Physics-based animation library (configured)

### Icons & Visualization
- **Lucide React 1.17.0** - 50+ fitness-related SVG icons for doodles (Dumbbell, Heart, Zap, Target, Flame, etc.)

### PDF Export
- **html2pdf.js** - Client-side HTML to PDF conversion

### Development Tools
- **ESLint 10.3.0** - Code quality
- **PostCSS 8.5.15** - CSS processing
- **Autoprefixer 10.5.0** - CSS vendor prefixing

---

## Project Architecture

### Component Hierarchy

```
App.jsx (Main State Management)
├── WelcomeScreen (Step -1)
│   └── MotivationalQuotes
│   └── DoodleBackground
├── ProfileStep (Step 0)
│   ├── PageHeader
│   ├── StepBar
│   ├── NavBtns
│   └── DoodleBackground
├── EquipmentStep (Step 1)
│   ├── PageHeader
│   ├── StepBar
│   ├── NavBtns
│   └── DoodleBackground
├── GoalsStep (Step 2)
│   ├── PageHeader
│   ├── StepBar
│   ├── NavBtns
│   └── DoodleBackground
└── PlanDisplay (Step 3)
    ├── PageHeader
    ├── PDF Export Button
    └── DoodleBackground
```

### State Management (App.jsx)

```javascript
// Root-level state in App.jsx
- step: -1 (welcome) | 0 (profile) | 1 (equipment) | 2 (goals) | 3 (plan)
- profile: { age, weight }
- equipment: [selected equipment ids]
- goals: [selected goal ids]
- plan: generated 7-day workout plan
- visible: fade transition state
```

---

## Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Step 1: Clone/Navigate to Project
```bash
cd d:\MyLearningHour\fitplan-app
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs all packages including:
- React & React DOM
- Vite & build tools
- Tailwind CSS
- Lucide React icons
- html2pdf.js for PDF export
- ESLint for code quality

### Step 3: Start Development Server
```bash
npm run dev
```

Server starts at `http://localhost:5173` with HMR enabled

### Step 4: Build for Production
```bash
npm run build
```

Creates optimized bundle in `dist/` folder

### Step 5: Preview Production Build
```bash
npm run preview
```

Serves the production bundle locally

### Step 6: Lint Code
```bash
npm run lint
```

Checks for code quality issues

---

## Library Usage Guide

### React 19.2.6
**Purpose**: Component-based UI rendering
**Usage**:
```javascript
- useState: Form state management, visibility toggles
- useEffect: Scroll tracking, mouse position tracking
- useRef: DOM element references for animations
```

### Tailwind CSS 4.3.0
**Purpose**: Styling with utility classes
**Key Classes Used**:
```css
- bg-[#080810]: Dark background
- bg-gradient-to-r: Gradient backgrounds
- animate-slideUp, animate-pulse: Built-in animations
- text-violet-400, text-emerald-400: Accent colors
- md:, lg: Responsive breakpoints
```

### Lucide React 1.17.0
**Purpose**: Fitness-related SVG icons
**Icons Used**:
```javascript
Dumbbell, Activity, Heart, Zap, TrendingUp, Wind, Target, 
Flame, Droplets, Volume2, Download, ArrowLeft
```

### html2pdf.js
**Purpose**: Client-side PDF generation
**Usage**:
```javascript
import html2pdf from 'html2pdf.js'
// Creates DOM element with styled content
// Converts to PDF with custom margins, filename, orientation
```

### Framer Motion & React Spring
**Purpose**: Advanced animations (configured, ready for use)
**Future Use**: Page transitions, gesture animations

---

## Animation System

### 1. **Doodle Background Animations** (DoodleBackground.jsx)

**Technology**: CSS + React State + Mouse Tracking

**Features**:
- **50 floating fitness icons** positioned to avoid overlap
- **Cursor Proximity Detection**: Icons brighten within 150px radius
- **Opacity Interpolation**: 0.06 (base) → 0.35 (max glow)
- **Dynamic Shadow**: `drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))`
- **Float Animation**: Subtle Y-axis bobbing with rotation

**CSS Animation**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotateZ(0deg); }
  50% { transform: translateY(-15px) rotateZ(3deg); }
}
```

**Performance**: 
- Fixed positioning (no scroll calculations)
- RequestAnimationFrame for smooth 60fps
- Debounced mouse tracking

### 2. **Page Transition Animations**

**Fade Transition**:
```javascript
opacity: visible ? 1 : 0
transform: visible ? 'translateY(0)' : 'translateY(14px)'
transition: 'opacity .26s ease, transform .26s ease'
```

### 3. **Motivational Quotes Typewriter Effect**

**Technology**: CSS animations + React state management

**Flow**:
1. **Typing Phase**: Character by character reveal (50ms per char)
2. **Holding Phase**: Display quote for 3 seconds
3. **Erasing Phase**: Remove character by character (30ms per char)
4. **Loop**: Auto-advance to next quote

### 4. **Gradient Text Effects**

```css
bg-gradient-to-br from-violet-400 via-blue-400 to-emerald-400
bg-clip-text text-transparent
```

### 5. **Hover Animations**

```css
hover:scale-105: Scale up 5% on hover
hover:shadow-2xl hover:shadow-violet-500/50: Glowing shadow
transition-all: Smooth 300ms transitions
```

---

## Data Flow & Architecture

### Input Data Sources

#### 1. **User Profile** (ProfileStep.jsx)
```javascript
{
  age: Number (6-100 validation),
  weight: Number (positive validation)
}
```
**Validation**:
- Age: Must be 6-100
- Weight: Must be positive number

#### 2. **Equipment Selection** (EquipmentStep.jsx)
```javascript
equipment: ['dumbbell', 'band', 'yoga', ...]
// Array of equipment IDs selected by user
```

#### 3. **Goal Selection** (GoalsStep.jsx)
```javascript
goals: ['strength', 'flexibility', 'core', 'weightloss', ...]
// Array of goal IDs selected by user
```

### Plan Generation Flow

```
User Inputs (profile, equipment, goals)
    ↓
planGenerator.js
    ├─ generateExercises(equipment, goals)
    ├─ createDayPlan(dayType, availableExercises)
    ├─ assignDifficulty(dayIndex, goals)
    └─ calculateProteinTarget(weight)
    ↓
Generated Plan: Array of 7 days
    [
      {
        day: "Monday",
        icon: "💪",
        label: "Strength Training",
        exercises: [
          { name: "Dumbbell Bench Press", sets: "4x8", tip: "..." },
          { name: "Squats", sets: "4x10", tip: "..." }
        ]
      },
      ...
    ]
    ↓
PlanDisplay.jsx (Renders with interactivity)
    ↓
PDF Export (pdfExport.js)
```

### Data Persistence

- **Session-based**: All data stored in React state
- **No Database**: Plans not persisted (fresh generation each session)
- **PDF Export**: Only method to save plans locally

---

## User Journey

### Screen 1: Welcome Screen (WelcomeScreen.jsx)

**Visual Elements**:
- "FitMap" gradient title
- "Route your routine" tagline
- Animated motivational quotes (5-10 rotating quotes)
- "Let's Build Your Plan" CTA button
- 50 cursor-tracking doodles in background

**User Experience**:
```
User sees rotating motivational quotes (3s display, auto-advance)
      ↓
Click "Let's Build Your Plan" button
      ↓
Smooth fade transition to Profile page
```

**Animations**:
- Typewriter effect: Quote typing at 50ms per character
- Doodle glow: Icons brighten near cursor
- Button glow: Continuous pulsing shadow animation

---

### Screen 2: Profile Step (ProfileStep.jsx)

**Form Fields**:
1. **Age Input** (Number)
   - Min: 6, Max: 100
   - Real-time validation
   - Error display below field

2. **Weight Input** (Number)
   - Positive numbers only
   - Real-time validation

**Visual Feedback**:
- Red error messages appear/disappear
- Red border on invalid fields
- Green/neutral when valid
- "Next" button enabled only when both valid

**Navigation**:
```
View Profile Info → Enter Age & Weight → Click "Next" → Equipment Step
                                       ↑
                                  "Back" → Welcome
```

**User Experience**:
- Step indicator shows "Step 1/3"
- Smooth animations on each field
- Cursor-tracking doodles respond to mouse

---

### Screen 3: Equipment Step (EquipmentStep.jsx)

**Selection Options**:
- Dumbbells, Resistance Bands, Yoga Mat
- Toggle-able buttons (multiple select)
- Each toggle shows visual feedback

**Visual States**:
- Unselected: Light gray background
- Selected: Gradient violet background with glow
- Hover: Scale 105% transformation

**User Experience**:
```
View available equipment → Select desired items → Click "Next" → Goals Step
                                                ↑
                                           "Back" → Profile
```

**Animations**:
- Each option slides up with staggered delay
- Toggle transitions are smooth (200ms)
- Selection gets subtle glow effect

---

### Screen 4: Goals Step (GoalsStep.jsx)

**Selection Options**:
- Build Strength
- Get Flexible
- Core Power
- Lose Weight

**Grid Layout**: 2 columns, responsive

**User Experience**:
```
View fitness goals → Select multiple goals → Click "Generate Plan" → Plan Display
                                           ↑
                                      "Back" → Equipment
```

**Flow**:
- Click "Generate Plan" → Plan generator runs
- Fade transition to Plan Display
- Plan displays with animations

---

### Screen 5: Plan Display (PlanDisplay.jsx)

**Layout Components**:

1. **Header Section**
   - Logo with home link
   - Page title: "Your FitMap Plan"
   - Profile summary (age, weight, protein target)

2. **Day Selection Tabs**
   - 7 horizontal tabs
   - One active (gradient, glowing)
   - Click to switch days
   - Smooth content transition

3. **Exercise Grid**
   - Responsive: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
   - Each exercise card shows:
     - Exercise name
     - Sets badge (e.g., "4x8")
     - Pro tip
     - Hover detail reveals additional info

4. **Stats Card**
   - Total exercises count
   - Difficulty level (Light/Medium/Hard)
   - Focus area

5. **PDF Export Button**
   - Green gradient button
   - "Save Plan as PDF" label with download icon
   - Positioned at bottom

**Interactive Features**:
```
View Current Day → Click Other Days → See Exercises Update
                ↑
         Exercise Cards Hover → Reveal Tips
                ↑
         Click PDF Button → Plan Downloads as PDF
                ↑
         Click Logo → Return to Welcome (refresh)
                ↑
         Click Back → Return to Goals Step
```

**Animations**:
- Day tabs slide in with staggered delay
- Exercise cards cascade in (each +50ms delay)
- Hover scale effect (105%)
- Stats card gradient shift on animation

---

## File Structure

```
fitplan-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── (static assets)
│   ├── components/
│   │   ├── onboarding/
│   │   │   ├── WelcomeScreen.jsx
│   │   │   ├── ProfileStep.jsx
│   │   │   ├── EquipmentStep.jsx
│   │   │   ├── GoalsStep.jsx
│   │   │   ├── StepBar.jsx
│   │   │   └── NavBtns.jsx
│   │   ├── plan/
│   │   │   └── PlanDisplay.jsx
│   │   └── ui/
│   │       ├── DoodleBackground.jsx (50 animated icons)
│   │       ├── MotivationalQuotes.jsx (typewriter effect)
│   │       ├── PageHeader.jsx (logo + navigation)
│   │       └── AvatarRenderer.jsx
│   ├── utils/
│   │   ├── planGenerator.js (core logic)
│   │   └── pdfExport.js (PDF generation)
│   ├── App.jsx (main state management)
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Usage Guide

### Running the Application

```bash
# Install dependencies
npm install

# Start development server (auto-opens at localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```

### User Workflow

**1. Welcome Page**
- Read "FitMap" branding
- Watch rotating motivational quotes
- Observe cursor-tracking doodles
- Click "Let's Build Your Plan"

**2. Enter Profile Info**
- Input age (6-100)
- Input weight (kg)
- Validation happens in real-time
- Click "Next"

**3. Select Equipment**
- Choose available equipment
- Multiple selections allowed
- Click "Next"

**4. Select Goals**
- Choose fitness goals (multiple allowed)
- Click "Generate Plan"

**5. View Generated Plan**
- See 7-day personalized plan
- Click day tabs to browse
- Explore exercise details
- Click "Save Plan as PDF" to download
- Click logo to go home

---

## Performance Optimizations

### Animation Performance
- **GPU Acceleration**: CSS transforms and opacity
- **Fixed Positioning**: Doodles don't trigger layout recalculations
- **Throttled Events**: Mouse tracking optimized
- **Collision Detection**: One-time calculation at component mount

### Code Splitting
- Vite automatically splits code by route
- Each step loads quickly

### Image Optimization
- Using SVG icons (Lucide) instead of raster images
- No external image dependencies

---

## Future Enhancement Roadmap

- [ ] User authentication & plan history
- [ ] Progress tracking dashboard
- [ ] Workout video tutorials per exercise
- [ ] Social sharing of plans
- [ ] Weekly plan reminders
- [ ] Advanced progress charts (Recharts integration)
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Cloud backup of plans

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## License

This project is open source and available under the MIT License.

---

## Author

**FitMap Development Team** - Route your routine! 🏋️💪

---

## Getting Help

For issues or questions:
1. Check the file structure and component hierarchy
2. Review the data flow diagrams
3. Check browser console for errors
4. Ensure all dependencies are installed: `npm install`
