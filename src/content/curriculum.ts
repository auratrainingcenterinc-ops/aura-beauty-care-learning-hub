import { CompetencyUnit, Module, Lesson, Quiz, Question } from '@prisma/client'

// CATEGORY A: BASIC COMPETENCIES (Units 1-9)
export const BASIC_COMPETENCIES: CompetencyUnit[] = [
  {
    code: '400311210',
    title: 'Participate in Workplace Communication',
    category: 'Basic',
    description: 'Develop effective communication skills in the beauty care workplace.'
  },
  {
    code: '400311211',
    title: 'Work in a Team Environment',
    category: 'Basic',
    description: 'Collaborate effectively with salon team members and colleagues.'
  },
  {
    code: '400311212',
    title: 'Solve/Address General Workplace Problems',
    category: 'Basic',
    description: 'Identify and resolve common salon workplace issues.'
  },
  {
    code: '400311213',
    title: 'Develop Career and Life Decisions',
    category: 'Basic',
    description: 'Plan professional growth in the beauty care industry.'
  },
  {
    code: '400311214',
    title: 'Contribute to Workplace Innovation',
    category: 'Basic',
    description: 'Suggest improvements in salon operations and services.'
  },
  {
    code: '400311215',
    title: 'Present Relevant Information',
    category: 'Basic',
    description: 'Communicate service information to clients and team.'
  },
  {
    code: '400311216',
    title: 'Practice Occupational Safety and Health Policies and Procedures',
    category: 'Basic',
    description: 'Ensure safe workplace practices and sanitation.'
  },
  {
    code: '400311217',
    title: 'Exercise Efficient and Effective Sustainable Practices in the Workplace',
    category: 'Basic',
    description: 'Implement eco-friendly salon practices.'
  },
  {
    code: '400311218',
    title: 'Practice Entrepreneurial Skills in the Workplace',
    category: 'Basic',
    description: 'Apply business skills in beauty care services.'
  }
]

// CATEGORY B: COMMON COMPETENCIES (Units 10-13)
export const COMMON_COMPETENCIES: CompetencyUnit[] = [
  {
    code: 'SOC514201',
    title: 'Maintain an Effective Relationship with Client/Customer',
    category: 'Common',
    description: 'Build and maintain positive client relationships.'
  },
  {
    code: 'SOC514202',
    title: 'Manage Own Performance',
    category: 'Common',
    description: 'Self-manage work quality and productivity.'
  },
  {
    code: 'SOC514203',
    title: 'Apply Quality Standards',
    category: 'Common',
    description: 'Ensure service quality meets industry standards.'
  },
  {
    code: 'SOC514204',
    title: 'Maintain a Safe, Clean and Efficient Environment',
    category: 'Common',
    description: 'Keep salon workspace safe and organized.'
  }
]

// CATEGORY C: CORE COMPETENCIES (Units 14-15) - SPECIAL EMPHASIS
export const CORE_COMPETENCIES: CompetencyUnit[] = [
  {
    code: 'SOC514311',
    title: 'Perform Manicure and Pedicure',
    category: 'Core',
    description: 'Master professional manicure and pedicure procedures with 20 comprehensive lessons.'
  },
  {
    code: 'SOC514312',
    title: 'Perform Hand and Foot Spa',
    category: 'Core',
    description: 'Execute complete hand and foot spa treatments with 23 practical lessons.'
  }
]

// COMBINED LIST
export const ALL_COMPETENCIES = [
  ...BASIC_COMPETENCIES,
  ...COMMON_COMPETENCIES,
  ...CORE_COMPETENCIES
]

// SAMPLE CONTENT FOR CORE COMPETENCIES (UNIT 14: MANICURE/PEDICURE)
export const UNIT_14_LESSONS: Lesson[] = [
  {
    title: 'Introduction to Manicure and Pedicure',
    content: {
      overview: 'Understanding the fundamentals of nail care services.',
      objectives: ['Define manicure and pedicure', 'Identify benefits', 'Understand safety'],
      discussion: 'Manicure and pedicure are essential beauty care services...',
      keyConcepts: ['Nail anatomy', 'Tools and equipment', 'Sanitation'],
      steps: ['Preparation', 'Procedure', 'Aftercare'],
      examples: ['Salon service scenarios', 'Client consultation'],
      reminders: ['Safety first', 'Proper sanitation', 'Client comfort'],
      summary: 'Master the basics before proceeding to advanced techniques.',
      questions: ['What is manicure?', 'Why is sanitation important?']
    },
    order: 1,
    isActive: true
  },
  // ... 19 more lessons for Unit 14 (Anatomy, Diseases, Tools, Consultation, etc.)
]

// SAMPLE CONTENT FOR CORE COMPETENCIES (UNIT 15: HAND/FOOT SPA)
export const UNIT_15_LESSONS: Lesson[] = [
  {
    title: 'Introduction to Hand and Foot Spa',
    content: {
      overview: 'Comprehensive spa treatments for hands and feet.',
      objectives: ['Define spa treatments', 'Identify benefits', 'Understand procedures'],
      discussion: 'Hand and foot spa treatments provide relaxation and care...',
      keyConcepts: ['Anatomy', 'Products', 'Equipment'],
      steps: ['Soaking', 'Exfoliation', 'Massage', 'Mask', 'Moisturizing'],
      examples: ['Client scenarios', 'Treatment plans'],
      reminders: ['Hygiene', 'Client comfort', 'Product safety'],
      summary: 'Spa treatments enhance nail care services.',
      questions: ['What are spa benefits?', 'How to prepare workstation?']
    },
    order: 1,
    isActive: true
  },
  // ... 22 more lessons for Unit 15 (Soaking, Exfoliation, Massage, etc.)
]

// SAMPLE QUIZ QUESTIONS
export const SAMPLE_QUIZ_QUESTIONS: Question[] = [
  {
    type: 'MultipleChoice',
    text: 'What is the primary purpose of sanitation in nail care?',
    options: {
      A: 'Make salon look clean',
      B: 'Prevent infection transmission',
      C: 'Speed up service',
      D: 'Reduce costs'
    },
    answer: 'B',
    explanation: 'Sanitation prevents the spread of infections between clients.'
  },
  {
    type: 'TrueFalse',
    text: 'Manicure and pedicure procedures should follow safety protocols.',
    answer: 'True',
    explanation: 'Safety protocols protect both client and technician.'
  }
]
