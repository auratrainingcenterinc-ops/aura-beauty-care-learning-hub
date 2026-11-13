import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Get competency units by category
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') as 'Basic' | 'Common' | 'Core' | null
  
  try {
    let units
    
    if (category) {
      units = await prisma.competencyUnit.findMany({
        where: { category },
        orderBy: { code: 'asc' },
        include: {
          modules: true
        }
      })
    } else {
      units = await prisma.competencyUnit.findMany({
        orderBy: { category: 'asc', code: 'asc' },
        include: {
          modules: true
        }
      })
    }
    
    return NextResponse.json({
      success: true,
      data: units,
      total: units.length
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch competency units'
    }, { status: 500 })
  }
}

// Get specific unit details
export async function GET_UNIT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const unit = await prisma.competencyUnit.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        modules: {
          include: {
            lessons: true
          }
        },
        quizzes: {
          include: {
            questions: true
          }
        }
      }
    })
    
    if (!unit) {
      return NextResponse.json({
        success: false,
        message: 'Unit not found'
      }, { status: 404 })
    }
    
    return NextResponse.json({
      success: true,
      data: unit
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch unit details'
    }, { status: 500 })
  }
}
