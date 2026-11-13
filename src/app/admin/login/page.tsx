import Link from 'next/link'
import { ChevronDown, GraduationCap, BookOpen, Video, Download, Trophy, User, ShieldCheck } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // In production: Call /api/admin/auth
    // For demo: Simple check
    if (email === 'admin@auratraining.com' && password === 'admin123') {
      // Redirect to admin dashboard
      window.location.href = '/admin/dashboard'
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }
  
  return (
    <div className="min-h-screen bg-aura-white flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full border-t-4 border-aura-purple">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-aura-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-aura-purple" />
          </div>
          <h1 className="text-3xl font-bold text-aura-purple">Administrator Login</h1>
          <p className="text-gray-600 mt-2">AURA BEAUTY CARE LEARNING HUB</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Administrator Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@auratraining.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-purple focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aura-purple focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-aura-purple text-white py-3 rounded-lg font-bold hover:bg-aura-accent transition-colors"
          >
            Login to Admin Panel
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AURA TRAINING AND ASSESSMENT CENTER INC.</p>
          <p className="mt-1">Alaminos, Ilocos, Philippines</p>
        </div>
      </div>
    </div>
  )
}

// Add useState import at the top
import { useState } from 'react'