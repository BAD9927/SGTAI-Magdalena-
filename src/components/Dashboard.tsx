import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, FolderOpen, Users } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Bienvenido a Tecnoacademia Magdalena</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/tasks" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Briefcase className="w-12 h-12 mb-4 text-blue-500 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Gestión de Tareas</h2>
          <p className="text-gray-600 text-center">Asigna y administra tareas para cada rol</p>
        </Link>
        <Link to="/portfolio" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FolderOpen className="w-12 h-12 mb-4 text-green-500 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Portafolio</h2>
          <p className="text-gray-600 text-center">Accede y organiza documentos importantes</p>
        </Link>
        <Link to="/users" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Users className="w-12 h-12 mb-4 text-purple-500 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Gestión de Usuarios</h2>
          <p className="text-gray-600 text-center">Administra los usuarios y sus roles</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard