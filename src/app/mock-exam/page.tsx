import { useState } from 'react'
import { useLearningProgress } from '@/hooks/useLearningProgress'

export default function MockExamination() {
  const { progress, saveQuizScore } = useLearningProgress()
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timer, setTimer] = useState(3000) // 50 minutes in seconds
  const [timerActive, setTimerActive] = useState(false)
  
  // Sample comprehensive questions (15 units mixed)
  const questions = [
    {
      id: 'q1',
      unit: '400311210',
      type: 'MultipleChoice',
      text: 'What is the primary purpose of workplace communication in beauty care?',
      options: {
        A: 'Socialize with clients',
        B: 'Ensure service quality and safety',
        C: 'Reduce working hours',
        D: 'Increase profits'
      },
      answer: 'B',
      explanation: 'Effective communication ensures service quality and workplace safety.'
    },
    {
      id: 'q2',
      unit: 'SOC514311',
      type: 'Identification',
      text: 'Name three essential steps in manicure procedure.',
      answer: 'Preparation, Procedure, Aftercare',
      explanation: 'These are the core phases of manicure service.'
    },
    {
      id: 'q3',
      unit: 'SOC514312',
      type: 'TrueFalse',
      text: 'Hand and foot spa treatments require proper sanitation.',
      answer: 'True',
      explanation: 'Sanitation is critical for client safety in spa treatments.'
    }
  ]
  
  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      handleSubmit()
    }
    return () => clearInterval(interval)
  }, [timerActive, timer])
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }
  
  const handleSubmit = () => {
    setTimerActive(false)
    let correct = 0
    questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        correct++
      }
    })
    
    const finalScore = (correct / questions.length) * 100
    setScore(finalScore)
    setCompleted(true)
    saveQuizScore('MOCK_EXAM', finalScore)
  }
  
  const handleRetake = () => {
    setCompleted(false)
    setAnswers({})
    setScore(0)
    setTimer(3000)
  }
  
  const startExam = () => {
    setTimerActive(true)
  }
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Comprehensive Mock Examination</h1>
          {timerActive && (
            <div className="bg-aura-accent text-white px-4 py-2 rounded-lg font-bold">
              Time Remaining: {formatTime(timer)}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto border-t-4 border-aura-purple">
          {!completed ? (
            <div>
              <h2 className="text-2xl font-bold text-aura-purple mb-6 text-center">
                Comprehensive Mock Examination
              </h2>
              
              <div className="bg-aura-lavender/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-aura-accent mb-3">Instructions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 15 competency units mixed (Basic, Common, Core)</li>
                  <li>• Multiple-choice, True/False, Identification questions</li>
                  <li>• 50 minutes time limit</li>
                  <li>• Automatic scoring with explanations</li>
                  <li>• Progress saved to LocalStorage</li>
                </ul>
              </div>
              
              {!timerActive ? (
                <div className="text-center py-8">
                  <button
                    onClick={startExam}
                    className="bg-aura-purple text-white px-8 py-3 rounded-lg font-bold hover:bg-aura-accent transition-colors text-xl"
                  >
                    START EXAMINATION
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {questions.map((question, index) => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-aura-accent">
                          Question {index + 1}: {question.text}
                        </h3>
                        <span className="text-sm text-gray-500">Unit: {question.unit}</span>
                      </div>
                      
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
                  Submit Examination
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">{score >= 70 ? '✅' : '❌'}</span>
              </div>
              <h2 className="text-3xl font-bold text-aura-purple mb-2">
                Examination Completed!
              </h2>
              <p className="text-2xl font-bold text-gray-700 mb-6">
                Score: {score.toFixed(0)}%
              </p>
              
              {score >= 70 ? (
                <p className="text-green-600 font-semibold mb-6">
                  Congratulations! You passed the comprehensive mock examination.
                </p>
              ) : (
                <p className="text-red-600 font-semibold mb-6">
                  Keep studying! Review the units and try again.
                </p>
              )}
              
              {/* Answer Explanations */}
              <div className="space-y-6 mb-8">
                {questions.map((question, index) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-aura-purple mb-2">Question {index + 1} (Unit: {question.unit})</h4>
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
                Retake Examination
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// Add useEffect import at the top
import { useEffect } from 'react'