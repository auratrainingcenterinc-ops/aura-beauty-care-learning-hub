import { useState } from 'react'
import { useLearningProgress } from '@/hooks/useLearningProgress'

export default function UnitQuiz({ params }: { params: { code: string } }) {
  const { progress, saveQuizScore } = useLearningProgress()
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  
  // Sample questions (to be replaced with API call)
  const questions = [
    {
      id: 'q1',
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
      id: 'q2',
      type: 'TrueFalse',
      text: 'Manicure and pedicure procedures should follow safety protocols.',
      answer: 'True',
      explanation: 'Safety protocols protect both client and technician.'
    },
    {
      id: 'q3',
      type: 'Identification',
      text: 'Name three essential tools for manicure procedure.',
      answer: 'Nail file, cuticle pusher, nail polish',
      explanation: 'These are fundamental tools required for manicure.'
    }
  ]
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }
  
  const handleSubmit = () => {
    let correct = 0
    questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        correct++
      }
    })
    
    const finalScore = (correct / questions.length) * 100
    setScore(finalScore)
    setCompleted(true)
    saveQuizScore(params.code, finalScore)
  }
  
  const handleRetake = () => {
    setCompleted(false)
    setAnswers({})
    setScore(0)
  }
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Unit Quiz: {params.code}</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto border-t-4 border-aura-purple">
          {!completed ? (
            <div>
              <h2 className="text-2xl font-bold text-aura-purple mb-6 text-center">
                Unit Quiz - {params.code}
              </h2>
              
              <div className="space-y-8">
                {questions.map((question, index) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-aura-accent mb-4">
                      Question {index + 1}: {question.text}
                    </h3>
                    
                    {question.type === 'MultipleChoice' && (
                      <div className="space-y-3">
                        {Object.entries(question.options!).map(([key, option]) => (
                          <label key={key} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name={`q${question.id}`}
                              value={key}
                              onChange={(e) => handleAnswer(question.id, e.target.value)}
                              className="w-5 h-5 text-aura-purple"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    
                    {question.type === 'TrueFalse' && (
                      <div className="space-y-3">
                        {['True', 'False'].map(option => (
                          <label key={option} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name={`q${question.id}`}
                              value={option}
                              onChange={(e) => handleAnswer(question.id, e.target.value)}
                              className="w-5 h-5 text-aura-purple"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    
                    {question.type === 'Identification' && (
                      <input
                        type="text"
                        placeholder="Enter your answer..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-purple focus:border-transparent"
                        onChange={(e) => handleAnswer(question.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-aura-purple text-white py-3 rounded-lg font-bold mt-8 hover:bg-aura-accent transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">{score >= 70 ? '✅' : '❌'}</span>
              </div>
              <h2 className="text-3xl font-bold text-aura-purple mb-2">
                Quiz Completed!
              </h2>
              <p className="text-2xl font-bold text-gray-700 mb-6">
                Score: {score.toFixed(0)}%
              </p>
              
              {score >= 70 ? (
                <p className="text-green-600 font-semibold mb-6">
                  Congratulations! You passed the unit quiz.
                </p>
              ) : (
                <p className="text-red-600 font-semibold mb-6">
                  Keep studying! Review the lessons and try again.
                </p>
              )}
              
              {/* Answer Explanations */}
              <div className="space-y-6 mb-8">
                {questions.map((question, index) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-aura-purple mb-2">Question {index + 1}</h4>
                    <p className="text-gray-700 mb-2">{question.text}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      Your answer: {answers[question.id] || 'Not answered'}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Correct answer: {question.answer}
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleRetake}
                className="bg-aura-lavender text-aura-purple px-6 py-2 rounded-lg font-semibold hover:bg-aura-purple/20 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}