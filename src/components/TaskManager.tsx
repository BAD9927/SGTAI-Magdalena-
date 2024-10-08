import React, { useState } from 'react'

interface Task {
  id: number
  title: string
  description: string
  assignedTo: string
  status: 'pendiente' | 'en progreso' | 'completada'
}

const initialTasks: Task[] = [
  { id: 1, title: 'Preparar informe mensual', description: 'Elaborar el informe de actividades del mes', assignedTo: 'Dinamizador', status: 'pendiente' },
  { id: 2, title: 'Actualizar base de datos', description: 'Actualizar la información de los estudiantes en el sistema', assignedTo: 'Infocenter', status: 'en progreso' },
  { id: 3, title: 'Sesión de orientación', description: 'Realizar sesión de orientación con nuevos aprendices', assignedTo: 'Psicopedagogo', status: 'completada' },
]

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTask, setNewTask] = useState({ title: '', description: '', assignedTo: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewTask({ ...newTask, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const task: Task = {
      id: tasks.length + 1,
      ...newTask,
      status: 'pendiente'
    }
    setTasks([...tasks, task])
    setNewTask({ title: '', description: '', assignedTo: '' })
  }

  const updateTaskStatus = (id: number, newStatus: 'pendiente' | 'en progreso' | 'completada') => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Gestión de Tareas</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Agregar Nueva Tarea</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block mb-1">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="assignedTo" className="block mb-1">Asignado a</label>
            <select
              id="assignedTo"
              name="assignedTo"
              value={newTask.assignedTo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Seleccionar rol</option>
              <option value="Dinamizador">Dinamizador</option>
              <option value="Infocenter">Infocenter</option>
              <option value="Psicopedagogo">Psicopedagogo</option>
              <option value="Facilitador">Facilitador</option>
              <option value="Aprendiz Tecnoacademia">Aprendiz Tecnoacademia</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block mb-1">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={3}
            required
          ></textarea>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Agregar Tarea
        </button>
      </form>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Lista de Tareas</h2>
        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="border-b pb-4">
              <h3 className="text-lg font-medium">{task.title}</h3>
              <p className="text-gray-600 mb-2">{task.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Asignado a: {task.assignedTo}</span>
                <select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value as 'pendiente' | 'en progreso' | 'completada')}
                  className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="en progreso">En Progreso</option>
                  <option value="completada">Completada</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskManager