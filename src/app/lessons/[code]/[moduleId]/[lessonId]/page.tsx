import { useState } from 'react'
import { useLearningProgress } from '@/hooks/useLearningProgress'

export default function LessonViewer({ params }: { params: { code: string; moduleId: string; lessonId: string } }) {
  const { progress, completeLesson } = useLearningProgress()
  const [completed, setCompleted] = useState(false)
  
  // Sample lesson content (to be replaced with API call)
  const lesson = {
    title: 'Introduction to Manicure and Pedicure',
    content: {
      overview: 'Understanding the fundamentals of nail care services.',
      objectives: ['Define manicure and pedicure', 'Identify benefits', 'Understand safety'],
      discussion: 'Manicure and pedicure are essential beauty care services that enhance the appearance and health of nails...',
      keyConcepts: ['Nail anatomy', 'Tools and equipment', 'Sanitation'],
      steps: [
        '1. Preparation of workstation and client',
        '2. Nail shaping and filing',
        '3. Cuticle care and safe handling',
        '4. Hand and foot cleansing',
        '5. Manicure/Pedicure procedures',
        '6. Nail polishing techniques',
        '7. Post-service procedures',
        '8. Client aftercare instructions'
      ],
      examples: [
        'Scenario: Client consultation for nail shape preference',
        'Scenario: Handling client with nail disorders'
      ],
      reminders: [
        'Always sanitize tools before and after use',
        'Ensure client comfort throughout the procedure',
        'Follow safety precautions for cuticle care'
      ],
      summary: 'Master the basics before proceeding to advanced techniques. Practice makes perfect.',
      questions: [
        'What are the key steps in manicure procedure?',
        'Why is sanitation important in nail care?',
        'How to handle client consultation?'
      ]
    },
    mediaUrl: 'https://example.com/video',
    resources: [
      { name: 'Manicure Procedure Guide', url: '/pdfs/manicure-guide.pdf' },
      { name: 'Sanitation Checklist', url: '/pdfs/sanitation-checklist.pdf' }
    ]
  }
  
  const handleComplete = () => {
    completeLesson(params.lessonId, params.code)
    setCompleted(true)
  }
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <div className="mt-2 md:mt-0">
            <span className="bg-aura-lavender text-aura-purple px-3 py-1 rounded-full text-sm font-semibold">
              Unit {params.code}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Lesson Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-aura-purple">
          <h2 className="text-3xl font-bold text-aura-purple mb-6">{lesson.title}</h2>
          
          {/* Overview & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-aura-accent mb-3">Overview</h3>
              <p className="text-gray-700">{lesson.content.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-aura-accent mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                {lesson.content.objectives.map((obj, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-aura-purple rounded-full mr-2" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Discussion */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-aura-accent mb-3">Detailed Discussion</h3>
            <p className="text-gray-700 leading-relaxed">{lesson.content.discussion}</p>
          </div>
          
          {/* Key Concepts */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-aura-accent mb-3">Key Concepts</h3>
            <div className="flex flex-wrap gap-3">
              {lesson.content.keyConcepts.map((concept, i) => (
                <span key={i} className="bg-aura-lavender/30 text-aura-purple px-4 py-2 rounded-full text-sm font-semibold">
                  {concept}
                </span>
              ))}
            </div>
          </div>
          
          {/* Step-by-Step Instructions */}
          {lesson.content.steps.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-aura-accent mb-3">Step-by-Step Instructions</h3>
              <ol className="space-y-3">
                {lesson.content.steps.map((step, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-aura-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
          
          {/* Practical Examples */}
          {lesson.content.examples.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-aura-accent mb-3">Practical Workplace Examples</h3>
              <ul className="space-y-2">
                {lesson.content.examples.map((example, i) => (
                  <li key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-aura-purple">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Important Reminders */}
          {lesson.content.reminders.length > 0 && (
            <div className="mb-8 bg-aura-lavender/20 p-4 rounded-lg border border-aura-lavender/30">
              <h3 className="text-xl font-bold text-aura-accent mb-3">Important Reminders</h3>
              <ul className="space-y-2">
                {lesson.content.reminders.map((reminder, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-1" />
                    <p className="text-gray-700">{reminder}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-aura-accent mb-3">Summary</h3>
            <p className="text-gray-700 font-semibold italic">{lesson.content.summary}</p>
          </div>
          
          {/* Review Questions */}
          <div>
            <h3 className="text-xl font-bold text-aura-accent mb-3">Review Questions</h3>
            <ol className="space-y-3">
              {lesson.content.questions.map((question, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700">{question}</p>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Completion Button */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            {!completed ? (
              <button
                onClick={handleComplete}
                className="bg-aura-purple text-white px-8 py-3 rounded-lg font-bold hover:bg-aura-accent transition-colors"
              >
                Mark Lesson as Completed
              </button>
            ) : (
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                ✓ Lesson Completed
              </span>
            )}
          </div>
        </div>

        {/* Video Demonstration (if available) */}
        {lesson.mediaUrl && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-aura-purple">
            <h3 className="text-2xl font-bold text-aura-purple mb-6">Video Demonstration</h3>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              {/* In production: Embed video player */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Video Player Placeholder
              </div>
            </div>
          </div>
        )}

        {/* Learning Resources */}
        {lesson.resources && lesson.resources.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-aura-accent">
            <h3 className="text-2xl font-bold text-aura-accent mb-6">Learning Resources</h3>
            <ul className="space-y-3">
              {lesson.resources.map((resource, i) => (
                <li key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-aura-accent/10 rounded-full flex items-center justify-center text-aura-accent">
                      📄
                    </span>
                    <span className="font-semibold">{resource.name}</span>
                  </div>
                  <a
                    href={resource.url}
                    download
                    className="bg-aura-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-aura-accent transition-colors"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}