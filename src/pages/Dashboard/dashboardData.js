export const overviewStats = [
  { key: 'weight', label: 'Weight balance', value: '73', unit: 'kg' },
  { key: 'heart', label: 'Heart rate', value: '90', unit: 'bpm' },
  { key: 'hydration', label: 'Hydration level', value: '86', unit: '%' },
  { key: 'blood', label: 'Blood cells', value: '1100', unit: 'ul' },
]

export const bodyProgress = {
  percent: 87,
  label: '1,980ML',
  metrics: [
    { key: 'calories', label: 'Calories burn', value: '31.2%', trend: '0.22%', dotClass: 'bg-accent' },
    { key: 'carbs', label: 'Carbs', value: '23.2%', trend: '3.06%', dotClass: 'bg-cyan-400' },
    { key: 'protein', label: 'Protein', value: '11.9%', trend: '2.22%', dotClass: 'bg-fuchsia-400' },
  ],
}

export const heartRateSeries = [
  { t: '6am', bpm: 68 },
  { t: '8am', bpm: 82 },
  { t: '10am', bpm: 74 },
  { t: '12pm', bpm: 88 },
  { t: '2pm', bpm: 79 },
  { t: '4pm', bpm: 94 },
  { t: '6pm', bpm: 85 },
  { t: '8pm', bpm: 90 },
]

export const heartRateStats = [
  { key: 'current', label: 'Current', value: '1.6', unit: 'sec/sqt' },
  { key: 'average', label: 'Average', value: '2.2', unit: 'sec/sqt' },
  { key: 'max', label: 'Max', value: '4.2', unit: 'sec/sqt' },
]

export const fitnessGoals = [
  { id: 'g1', count: 10, unit: 'MIN', title: 'ABS & Stretch', frequency: '10 min / day', progress: 65 },
  { id: 'g2', count: 12, unit: 'SETS', title: 'Side planks', frequency: '12 sets / day', progress: 35 },
  { id: 'g3', count: 10, unit: 'SETS', title: 'Rope lifting', frequency: '10 sets / day', progress: 50 },
]

export const recommendedActivities = [
  {
    id: 'a1',
    title: 'Fitness for Beginner',
    startLabel: 'Start from 20 June 2024',
    time: '7:00 AM to 9:00 AM',
    price: '$11.70/m',
    icon: 'run',
  },
  {
    id: 'a2',
    title: 'Beginner to Advance gym',
    startLabel: 'Start from 01 July 2024',
    time: '08:00 AM to 9:00 AM',
    price: '$15.70/m',
    icon: 'dumbbell',
  },
  {
    id: 'a3',
    title: 'Ultimate Body Workout',
    startLabel: 'Start from 24 June 2024',
    time: '7:30 AM to 9:00 AM',
    price: '$8.70/m',
    icon: 'body',
  },
  {
    id: 'a4',
    title: 'Beginner to Advance gym',
    startLabel: 'Start from 30 July 2025',
    time: '7:00 AM to 9:00 AM',
    price: '$11.70/m',
    icon: 'stretch',
  },
]

export const trainers = [
  {
    id: 't1',
    name: 'John Arnold',
    specialty: 'Cardio specialist',
    photo: 'https://i.pravatar.cc/240?img=12',
  },
  {
    id: 't2',
    name: 'Kathryn Murphy',
    specialty: 'Weightlifting specialist',
    photo: 'https://i.pravatar.cc/240?img=51',
  },
  {
    id: 't3',
    name: 'Harry Walker',
    specialty: 'Cardio specialist',
    photo: 'https://i.pravatar.cc/240?img=14',
  },
]
