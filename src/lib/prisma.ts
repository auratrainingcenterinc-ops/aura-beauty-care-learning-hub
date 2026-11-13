import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// Database connection utility
export async function connectDatabase() {
  try {
    await prisma.$connect()
    console.log('Database connected successfully')
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

// Seed initial curriculum data (15 competency units)
export async function seedCurriculum() {
  try {
    // Check if already seeded
    const count = await prisma.competencyUnit.count()
    if (count > 0) {
      console.log('Curriculum already seeded')
      return
    }
    
    // Import curriculum data
    const { ALL_COMPETENCIES } = await import('@/content/curriculum')
    
    // Create units
    const createdUnits = await Promise.all(
      ALL_COMPETENCIES.map(unit =>
        prisma.competencyUnit.create({
          data: {
            code: unit.code,
            title: unit.title,
            category: unit.category,
            description: unit.description
          }
        })
      )
    )
    
    console.log(`Seeded ${createdUnits.length} competency units`)
    return createdUnits
    
  } catch (error) {
    console.error('Failed to seed curriculum:', error)
    throw error
  }
}

// Export database client
export default prisma
