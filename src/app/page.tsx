'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, GraduationCap, BookOpen, Video, Download, Trophy, User } from 'lucide-react'

export default function Homepage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-purple to-aura-accent py-20 px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            AURA BEAUTY CARE LEARNING HUB
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-aura-lavender">
            BEAUTY CARE (NAIL CARE) SERVICES NC II
          </h2>
          <p className="text-xl md:text-2xl mb-8 italic">
            "Learn the Skills. Master the Art. Build Your Future."
          </p>
          <p className="text-lg mb-8">
            Free public-access online learning platform by AURA TRAINING AND ASSESSMENT CENTER INC.
          </p>
          <Link 
            href="/course-overview" 
            className="bg-white text-aura-purple px-8 py-4 rounded-full text-lg font-bold hover:bg-aura-lavender transition-colors inline-block shadow-lg"
          >
            START LEARNING
          </Link>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4 bg-aura-lavender/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aura-purple">
            COURSE STRUCTURE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Competencies */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-aura-purple">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-aura-purple mr-3" />
                <h3 className="text-2xl font-bold">Basic Competencies</h3>
              </div>
              <p className="text-gray-600 mb-6">
                9 Units: Workplace communication, safety, innovation, entrepreneurship, and more.
              </p>
              <Link href="/basic-competencies" className="text-aura-purple font-semibold flex items-center">
                View Units <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Common Competencies */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-aura-accent">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-aura-accent mr-3" />
                <h3 className="text-2xl font-bold">Common Competencies</h3>
              </div>
              <p className="text-gray-600 mb-6">
                4 Units: Client relationships, performance management, quality standards, environment.
              </p>
              <Link href="/common-competencies" className="text-aura-accent font-semibold flex items-center">
                View Units <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Core Competencies */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-aura-purple">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-aura-purple mr-3" />
                <h3 className="text-2xl font-bold">Core Competencies</h3>
              </div>
              <p className="text-gray-600 mb-6">
                2 Units: Manicure/Pedicure & Hand/Foot Spa (Special emphasis on practical skills).
              </p>
              <Link href="/core-competencies" className="text-aura-purple font-semibold flex items-center">
                View Units <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aura-purple">
            LEARNING EXPERIENCE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-aura-lavender/50 p-6 rounded-lg text-center">
              <Video className="w-12 h-12 text-aura-purple mx-auto mb-4" />
              <h4 className="font-bold mb-2">Video Demonstrations</h4>
              <p className="text-sm text-gray-700">Professional nail care procedures</p>
            </div>
            
            <div className="bg-aura-lavender/50 p-6 rounded-lg text-center">
              <Download className="w-12 h-12 text-aura-purple mx-auto mb-4" />
              <h4 className="font-bold mb-2">Learning Resources</h4>
              <p className="text-sm text-gray-700">Downloadable PDFs and worksheets</p>
            </div>
            
            <div className="bg-aura-lavender/50 p-6 rounded-lg text-center">
              <BookOpen className="w-12 h-12 text-aura-purple mx-auto mb-4" />
              <h4 className="font-bold mb-2">Interactive Quizzes</h4>
              <p className="text-sm text-gray-700">Unit-based and mock examinations</p>
            </div>
            
            <div className="bg-aura-lavender/50 p-6 rounded-lg text-center">
              <Trophy className="w-12 h-12 text-aura-purple mx-auto mb-4" />
              <h4 className="font-bold mb-2">Progress Tracking</h4>
              <p className="text-sm text-gray-700">LocalStorage-based dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      {showDisclaimer && (
        <section className="bg-aura-dark text-white py-8 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base italic">
              ⚠️ <strong>DISCLAIMER:</strong> This online learning platform is designed for educational and review purposes. Completion of online lessons does not replace the required supervised practical training, official competency assessment, or TESDA certification.
            </p>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="mt-4 text-aura-lavender hover:underline text-sm"
            >
              Dismiss
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-aura-purple text-white py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} AURA TRAINING AND ASSESSMENT CENTER INC.
          </p>
          <p className="text-xs text-aura-lavender">
            Alaminos, Ilocos, Philippines | Contact: info@auratraining.com
          </p>
        </div>
      </footer>
    </main>
  )
}