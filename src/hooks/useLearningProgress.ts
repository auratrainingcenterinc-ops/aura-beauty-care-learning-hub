'use client'

import { useEffect, useState } from 'react'

// Progress tracking using LocalStorage (No registration required)
export interface ProgressData {
  completedLessons: string[] // Lesson IDs
  quizScores: Record<string, number> // Unit ID -> Score
  currentPosition: { unitId: string; lessonId: string } | null
  lastAccessed: Date
  totalUnits: number
  completedUnits: number
}

export const useLearningProgress = () => {
  const [progress, setProgress] = useState<ProgressData>({
    completedLessons: [],
    quizScores: {},
    currentPosition: null,
    lastAccessed: new Date(),
    totalUnits: 15,
    completedUnits: 0
  })

  // Load progress from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('aura_learning_progress')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setProgress(parsed)
      } catch (error) {
        console.error('Failed to load progress', error)
      }
    }
  }, [])

  // Save progress to LocalStorage
  const saveProgress = (newProgress: Partial<ProgressData>) => {
    const updated = { ...progress, ...newProgress, lastAccessed: new Date() }
    setProgress(updated)
    localStorage.setItem('aura_learning_progress', JSON.stringify(updated))
  }

  // Mark lesson as completed
  const completeLesson = (lessonId: string, unitId: string) => {
    if (!progress.completedLessons.includes(lessonId)) {
      const newCompleted = [...progress.completedLessons, lessonId]
      
      // Calculate unit completion
      const unitLessons = getLessonsForUnit(unitId) // Implementation needed
      const completedInUnit = newCompleted.filter(id => unitLessons.includes(id)).length
      const unitCompleted = completedInUnit === unitLessons.length
      
      saveProgress({
        completedLessons: newCompleted,
        completedUnits: unitCompleted ? progress.completedUnits + 1 : progress.completedUnits
      })
    }
  }

  // Save quiz score
  const saveQuizScore = (unitId: string, score: number) => {
    const newScores = { ...progress.quizScores, [unitId]: score }
    saveProgress({ quizScores: newScores })
  }

  // Reset progress
  const resetProgress = () => {
    localStorage.removeItem('aura_learning_progress')
    setProgress({
      completedLessons: [],
      quizScores: {},
      currentPosition: null,
      lastAccessed: new Date(),
      totalUnits: 15,
      completedUnits: 0
    })
  }

  // Calculate overall progress percentage
  const getOverallProgress = () => {
    return (progress.completedUnits / progress.totalUnits) * 100
  }

  // Get progress by category
  const getCategoryProgress = (category: 'Basic' | 'Common' | 'Core') => {
    const categoryUnits = getUnitsByCategory(category) // Implementation needed
    const completed = progress.completedUnits // Filter by category
    return (completed / categoryUnits.length) * 100
  }

  return {
    progress,
    completeLesson,
    saveQuizScore,
    resetProgress,
    getOverallProgress,
    getCategoryProgress
  }
}

// Helper functions (to be implemented with actual curriculum data)
function getLessonsForUnit(unitId: string): string[] {
  // Return lesson IDs for the unit
  return []
}

function getUnitsByCategory(category: 'Basic' | 'Common' | 'Core'): string[] {
  // Return unit IDs for the category
  return []
}
