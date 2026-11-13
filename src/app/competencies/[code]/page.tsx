import Link from 'next/link'
import { ChevronRight, GraduationCap, BookOpen, Video, Download, Trophy, User } from 'lucide-react'

export default function CompetencyUnitDetails({ params }: { params: { code: string } }) {
  // In production: Fetch unit data from API
  // For demo: Use sample data based on code
  
  const unit = getUnitByCode(params.code)
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link href="/course-overview" className="flex items-center text-aura-lavender hover:underline">
            ← Back to Course Overview
          </Link>
          <h1 className="text-2xl font-bold mt-2 md:mt-0">{unit.title}</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Unit Overview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-aura-purple">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="bg-aura-lavender text-aura-purple px-3 py-1 rounded-full text-sm font-semibold">
                {unit.category} Competency
              </span>
              <h2 className="text-3xl font-bold text-aura-purple mt-2">{unit.title}</h2>
              <p className="text-gray-600 mt-2">Code: {unit.code}</p>
            </div>
            {unit.category === 'Core' && (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                SPECIAL EMPHASIS
              </span>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">
            {unit.description || 'Comprehensive learning package covering all aspects of the competency.'}
          </p>
          
          {/* Learning Modules */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-aura-purple">Learning Modules</h3>
            
            {unit.modules.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="text-aura-purple font-bold w-8">{index + 1}</span>
                    <h4 className="font-semibold">{module.title}</h4>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                
                {/* Lessons */}
                <div className="p-4 bg-white">
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start space-x-3">
                        <span className="text-aura-accent font-bold w-6">{lessonIndex + 1}</span>
                        <Link 
                          href={`/lessons/${unit.code}/${module.id}/${lesson.id}`}
                          className="text-gray-700 hover:text-aura-purple transition-colors flex items-center"
                        >
                          {lesson.title}
                          <span className="ml-2 text-xs text-gray-400">
                            {lesson.mediaUrl ? '🎥 Video' : '📚 Text'}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-aura-accent">
          <h3 className="text-2xl font-bold text-aura-accent mb-6">Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <BookOpen className="w-12 h-12 text-aura-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">PDF Materials</h4>
              <p className="text-sm text-gray-600">Downloadable worksheets</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Video className="w-12 h-12 text-aura-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">Video Demonstrations</h4>
              <p className="text-sm text-gray-600">Professional procedures</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Download className="w-12 h-12 text-aura-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">Reference Documents</h4>
              <p className="text-sm text-gray-600">TESDA aligned materials</p>
            </div>
          </div>
        </div>

        {/* Assessment */}
        <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-aura-purple">
          <h3 className="text-2xl font-bold text-aura-purple mb-6">Assessment & Quizzes</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href={`/quiz/${unit.code}`}
              className="flex-1 bg-aura-purple text-white py-3 rounded-lg font-bold text-center hover:bg-aura-accent transition-colors"
            >
              Take Unit Quiz
            </Link>
            <Link 
              href="/mock-exam"
              className="flex-1 bg-aura-accent text-white py-3 rounded-lg font-bold text-center hover:bg-aura-purple transition-colors"
            >
              Comprehensive Mock Exam
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper function (to be replaced with API call)
function getUnitByCode(code: string) {
  const units = {
    '400311210': {
      code: '400311210',
      title: 'Participate in Workplace Communication',
      category: 'Basic',
      description: 'Develop effective communication skills in the beauty care workplace.',
      modules: [
        {
          id: 1,
          title: 'Communication Fundamentals',
          lessons: [
            { id: 1, title: 'Introduction to Communication', mediaUrl: null },
            { id: 2, title: 'Verbal Communication Techniques', mediaUrl: null },
            { id: 3, title: 'Non-Verbal Communication', mediaUrl: null }
          ]
        }
      ]
    },
    // ... Add other units
    'SOC514311': {
      code: 'SOC514311',
      title: 'Perform Manicure and Pedicure',
      category: 'Core',
      description: 'Master professional manicure and pedicure procedures with 20 comprehensive lessons.',
      modules: [
        {
          id: 1,
          title: 'Introduction & Anatomy',
          lessons: [
            { id: 1, title: 'Introduction to Manicure and Pedicure', mediaUrl: 'https://example.com/video1' },
            { id: 2, title: 'Anatomy and Structure', mediaUrl: null },
            { id: 3, title: 'Nail Diseases and Disorders', mediaUrl: null }
          ]
        },
        {
          id: 2,
          title: 'Tools & Procedures',
          lessons: [
            { id: 4, title: 'Tools and Equipment', mediaUrl: null },
            { id: 5, title: 'Sanitation and Disinfection', mediaUrl: 'https://example.com/video2' },
            { id: 6, title: 'Manicure Procedures', mediaUrl: 'https://example.com/video3' }
          ]
        }
      ]
    }
  }
  
  return units[code] || {
    code,
    title: 'Competency Unit',
    category: 'Basic',
    description: 'Loading unit data...',
    modules: []
  }
}