import { generateCertificatePDF, generateReferenceNumber } from '@/lib/certificateGenerator'
import { useState } from 'react'

export default function CertificatePage() {
  const [fullName, setFullName] = useState('')
  const [generated, setGenerated] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')
  
  const handleGenerate = () => {
    if (!fullName.trim()) {
      alert('Please enter your full name')
      return
    }
    
    const refNum = generateReferenceNumber()
    setReferenceNumber(refNum)
    
    const data = {
      fullName,
      completionDate: new Date(),
      referenceNumber: refNum,
      completedUnits: 15, // For demo - should come from progress
      totalUnits: 15,
      progressPercentage: 100
    }
    
    generateCertificatePDF(data)
    setGenerated(true)
  }
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Header */}
      <header className="bg-aura-purple text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Certificate of Completion</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto border-t-4 border-aura-purple">
          <h2 className="text-2xl font-bold text-aura-purple mb-6 text-center">
            Generate Your Certificate
          </h2>
          
          {!generated ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name (as it should appear on certificate)
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Juan Dela Cruz"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-purple focus:border-transparent"
                />
              </div>
              
              <div className="text-sm text-gray-600">
                <p>⚠️ <strong>IMPORTANT:</strong> This certificate is for online learning completion only.</p>
                <p>It does not replace TESDA National Certificate or official competency assessment.</p>
              </div>
              
              <button
                onClick={handleGenerate}
                className="w-full bg-aura-purple text-white py-3 rounded-lg font-bold hover:bg-aura-accent transition-colors"
              >
                Generate & Download Certificate
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-aura-purple mb-2">Certificate Generated!</h3>
              <p className="text-gray-600 mb-4">
                Reference Number: <span className="font-bold text-aura-purple">{referenceNumber}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                The PDF certificate has been downloaded to your device.
              </p>
              <button
                onClick={() => {
                  setGenerated(false)
                  setFullName('')
                  setReferenceNumber('')
                }}
                className="bg-aura-lavender text-aura-purple px-6 py-2 rounded-lg font-semibold hover:bg-aura-purple/20 transition-colors"
              >
                Generate Another Certificate
              </button>
            </div>
          )}
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AURA TRAINING AND ASSESSMENT CENTER INC.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Alaminos, Ilocos, Philippines | www.auratraining.com
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}