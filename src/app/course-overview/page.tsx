import Image from 'next/image'
import Link from 'next/link'

export default function CourseOverview() {
  const categories = [
    {
      id: 'basic',
      title: 'Basic Competencies',
      count: 9,
      description: 'Workplace communication, safety, innovation, entrepreneurship, and more.',
      units: [
        { code: '400311210', title: 'Participate in Workplace Communication' },
        { code: '400311211', title: 'Work in a Team Environment' },
        { code: '400311212', title: 'Solve/Address General Workplace Problems' },
        { code: '400311213', title: 'Develop Career and Life Decisions' },
        { code: '400311214', title: 'Contribute to Workplace Innovation' },
        { code: '400311215', title: 'Present Relevant Information' },
        { code: '400311216', title: 'Practice Occupational Safety and Health Policies and Procedures' },
        { code: '400311217', title: 'Exercise Efficient and Effective Sustainable Practices in the Workplace' },
        { code: '400311218', title: 'Practice Entrepreneurial Skills in the Workplace' },
      ]
    },
    {
      id: 'common',
      title: 'Common Competencies',
      count: 4,
      description: 'Client relationships, performance management, quality standards, environment.',
      units: [
        { code: 'SOC514201', title: 'Maintain an Effective Relationship with Client/Customer' },
        { code: 'SOC514202', title: 'Manage Own Performance' },
        { code: 'SOC514203', title: 'Apply Quality Standards' },
        { code: 'SOC514204', title: 'Maintain a Safe, Clean and Efficient Environment' },
      ]
    },
    {
      id: 'core',
      title: 'Core Competencies (SPECIAL EMPHASIS)',
      count: 2,
      description: 'Major practical nail care training units: Manicure/Pedicure & Hand/Foot Spa.',
      units: [
        { code: 'SOC514311', title: 'Perform Manicure and Pedicure (20 Lessons)' },
        { code: 'SOC514312', title: 'Perform Hand and Foot Spa (23 Lessons)' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Course Overview</h1>
          <Link href="/" className="mt-2 md:mt-0 text-aura-lavender hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-aura-purple mb-4">
            BEAUTY CARE (NAIL CARE) SERVICES NC II
          </h2>
          <p className="text-gray-600 text-lg">
            15 Competency Units organized in 3 categories. Start your learning journey today.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-md border-t-4 border-aura-purple overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-aura-purple mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <span className="bg-aura-lavender text-aura-purple px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count} Units
                </span>
              </div>
              
              <div className="bg-gray-50 p-4 max-h-96 overflow-y-auto">
                <ul className="space-y-3">
                  {category.units.map((unit) => (
                    <li key={unit.code} className="flex items-start space-x-3">
                      <span className="text-aura-purple font-bold w-20">{unit.code}</span>
                      <Link href={`/competencies/${unit.code}`} className="text-gray-700 hover:text-aura-purple transition-colors">
                        {unit.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 border-t">
                <Link 
                  href={`/category/${category.id}`}
                  className="w-full text-center bg-aura-purple text-white py-2 rounded-lg font-semibold hover:bg-aura-accent transition-colors"
                >
                  View All Units
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Features */}
        <section className="mt-16 bg-aura-lavender/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-aura-purple mb-6">Learning Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-bold mb-2">Lessons</h4>
              <p className="text-sm text-gray-600">Read, watch, download</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h4 className="font-bold mb-2">Videos</h4>
              <p className="text-sm text-gray-600">Demonstrations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-bold mb-2">Quizzes</h4>
              <p className="text-sm text-gray-600">Practice & Mock Exam</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold mb-2">Progress</h4>
              <p className="text-sm text-gray-600">LocalStorage tracking</p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 p-6 bg-aura-dark text-white rounded-lg">
          <h4 className="font-bold mb-2">⚠️ Important Disclaimer</h4>
          <p className="text-sm text-aura-lavender">
            This online learning platform is designed for educational and review purposes. Completion of online lessons does not replace the required supervised practical training, official competency assessment, or TESDA certification.
          </p>
        </section>
      </main>
    </div>
  )
}