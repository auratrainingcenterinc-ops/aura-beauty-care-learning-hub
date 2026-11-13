import { useLearningProgress } from '@/hooks/useLearningProgress'
import Link from 'next/link'

export default function LearningDashboard() {
  const { progress, getOverallProgress, resetProgress } = useLearningProgress()
  
  const overallProgress = getOverallProgress()
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">My Learning Progress</h1>
          <Link href="/" className="mt-2 md:mt-0 text-aura-lavender hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Progress Summary */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-aura-purple">
          <h2 className="text-2xl font-bold text-aura-purple mb-6">Overall Progress</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Progress Bar */}
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Course Completion</span>
                <span className="font-bold text-aura-purple">{overallProgress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-aura-purple h-4 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-aura-purple">{progress.completedUnits}</div>
                <div className="text-sm text-gray-600">Completed Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aura-accent">{progress.totalUnits - progress.completedUnits}</div>
                <div className="text-sm text-gray-600">Remaining Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aura-purple">{progress.completedLessons.length}</div>
                <div className="text-sm text-gray-600">Completed Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aura-accent">
                  {progress.quizScores ? Object.keys(progress.quizScores).length : 0}
                </div>
                <div className="text-sm text-gray-600">Quizzes Taken</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Basic Competencies', progress: 0, color: 'bg-aura-purple' },
            { name: 'Common Competencies', progress: 0, color: 'bg-aura-accent' },
            { name: 'Core Competencies', progress: 0, color: 'bg-aura-purple' }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4" style={{ borderColor: category.color }}>
              <h3 className="font-bold mb-4">{category.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className={`h-3 rounded-full ${category.color}`}
                  style={{ width: `${category.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">{category.progress}% Complete</p>
            </div>
          ))}
        </div>

        {/* Recently Opened Lessons */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold text-aura-purple mb-4">Recently Opened Lessons</h3>
          {progress.currentPosition ? (
            <div className="flex items-center justify-between p-4 bg-aura-lavender/30 rounded-lg">
              <div>
                <h4 className="font-bold">Current Lesson</h4>
                <p className="text-gray-600">Unit {progress.currentPosition.unitId} - Lesson {progress.currentPosition.lessonId}</p>
              </div>
              <Link 
                href={`/lessons/${progress.currentPosition.unitId}/${progress.currentPosition.lessonId}`}
                className="bg-aura-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-aura-accent transition-colors"
              >
                Continue Learning
              </Link>
            </div>
          ) : (
            <p className="text-gray-600">No recent lessons opened. Start learning!</p>
          )}
        </div>

        {/* Reset Progress */}
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-600 mb-4">Reset Progress</h3>
          <p className="text-gray-600 mb-6">
            Clear all progress data from this browser. Note: Progress is saved only on this device and browser.
          </p>
          <button
            onClick={resetProgress}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Reset All Progress
          </button>
        </div>
      </main>
    </div>
  )
}