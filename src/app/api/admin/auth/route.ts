import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Admin authentication (Simple implementation for demo)
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    // In production: Verify against database and hash
    // For demo: Simple check
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = Buffer.from(`${email}:${password}`).toString('base64')
      
      return NextResponse.json({
        success: true,
        token,
        message: 'Admin authenticated successfully'
      })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Invalid credentials'
    }, { status: 401 })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 })
  }
}

// Get all competency units
export async function GET() {
  try {
    const units = await prisma.competencyUnit.findMany({
      include: {
        modules: {
          include: {
            lessons: true
          }
        },
        quizzes: true
      }
    })
    
    return NextResponse.json({
      success: true,
      data: units
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch units'
    }, { status: 500 })
  }
}
