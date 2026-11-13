import Link from 'next/link'
import { ChevronRight, GraduationCap, BookOpen, Video, Download, Trophy, User, ShieldCheck, LayoutDashboard, Settings, FileText, BarChart3 } from 'lucide-react'

export default function AdminDashboard() {
  // Admin dashboard content
  const stats = [
    { label: 'Competency Units', value: 15, color: 'bg-aura-purple' },
    { label: 'Learning Modules', value: 45, color: 'bg-aura-accent' },
    { label: 'Lessons', value: 150, color: 'bg-aura-purple' },
    { label: 'Active Students', value: 1250, color: 'bg-aura-accent' }
  ]
  
  return (
    <div className="min-h-screen bg-aura-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-aura-dark text-white flex flex-col hidden md:flex">
        <div className="p-6 border-b border-aura-purple/30">
          <h1 className="text-2xl font-bold text-aura-lavender">AURA ADMIN</h1>
          <p className="text-xs text-aura-lavender/70 mt-1">BEAUTY CARE NC II</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center space-x-3 p-3 bg-aura-purple/10 text-aura-lavender rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/competencies" className="flex items-center space-x-3 p-3 text-aura-lavender/70 hover:bg-aura-purple/10 hover:text-aura-lavender rounded-lg transition-colors">
            <BookOpen className="w-5 h-5" />
            <span>Competency Management</span>
          </Link>
          <Link href="/admin/modules" className="flex items-center space-x-3 p-3 text-aura-lavender/70 hover:bg-aura-purple/10 hover:text-aura-lavender rounded-lg transition-colors">
            <FileText className="w-5 h-5" />
            <span>Module & Lesson Management</span>
          </Link>
          <Link href="/admin/media" className="flex items-center space-x-3 p-3 text-aura-lavender/70 hover:bg-aura-purple/10 hover:text-aura-lavender rounded-lg transition-colors">
            <Video className="w-5 h-5" />
            <span>Media Management</span>
          </Link>
          <Link href="/admin/analytics" className="flex items-center space-x-3 p-3 text-aura-lavender/70 hover:bg-aura-purple/10 hover:text-aura-lavender rounded-lg transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics & Reports</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center space-x-3 p-3 text-aura-lavender/70 hover:bg-aura-purple/10 hover:text-aura-lavender rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span>Website Settings</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-aura-purple/30">
          <button className="w-full text-left text-sm text-aura-lavender/70 hover:text-aura-lavender transition-colors">
            Logout
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="md:ml-64 min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-aura-purple">Administrator Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <div className="w-8 h-8 bg-aura-purple rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>
        
        {/* Content */}
        <div className="p-8">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-md p-6 ${stat.color} border-l-4`}>
                <h3 className="text-sm font-semibold text-aura-purple/70 mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold text-aura-purple">{stat.value}</p>
              </div>
            ))}
          </div>
          
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-aura-purple mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {[
                { activity: 'Unit 14 (Manicure/Pedicure) updated', time: '2 hours ago', type: 'update' },
                { activity: 'New video uploaded: Hand Spa Procedure', time: '5 hours ago', type: 'upload' },
                { activity: 'Quiz questions added for Unit 10', time: '1 day ago', type: 'add' },
                { activity: 'Student progress report exported', time: '2 days ago', type: 'export' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 border-b border-gray-100 pb-4">
                  <div className={`w-2 h-2 rounded-full mt-1 ${
                    item.type === 'update' ? 'bg-aura-purple' :
                    item.type === 'upload' ? 'bg-aura-accent' :
                    item.type === 'add' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-gray-700 font-semibold">{item.activity}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/admin/competencies/add" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
              <BookOpen className="w-10 h-10 text-aura-purple mb-3" />
              <h4 className="font-bold text-gray-700">Add Competency Unit</h4>
              <p className="text-sm text-gray-500 mt-1">Create new unit</p>
            </Link>
            <Link href="/admin/media/upload" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
              <Video className="w-10 h-10 text-aura-accent mb-3" />
              <h4 className="font-bold text-gray-700">Upload Media</h4>
              <p className="text-sm text-gray-500 mt-1">Videos & Images</p>
            </Link>
            <Link href="/admin/reports" className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
              <BarChart3 className="w-10 h-10 text-aura-purple mb-3" />
              <h4 className="font-bold text-gray-700">Export Reports</h4>
              <p className="text-sm text-gray-500 mt-1">Excel & CSV</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

// Add Link import at the top
import Link from 'next/link'