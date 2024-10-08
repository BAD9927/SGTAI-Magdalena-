import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Briefcase, FolderOpen, Users } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center">
          <img src="/logo.png" alt="TecnoAcademia Magdalena" className="h-12 mr-2" />
        </Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-500"><Home className="inline-block mr-1" size={18} /> Inicio</Link>
          <Link to="/tasks" className="text-gray-600 hover:text-blue-500"><Briefcase className="inline-block mr-1" size={18} /> Tareas</Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-blue-500"><FolderOpen className="inline-block mr-1" size={18} /> Portafolio</Link>
          <Link to="/users" className="text-gray-600 hover:text-blue-500"><Users className="inline-block mr-1" size={18} /> Usuarios</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar