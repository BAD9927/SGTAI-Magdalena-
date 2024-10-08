import React, { useState } from 'react'
import { FolderPlus, File, Folder } from 'lucide-react'

interface PortfolioItem {
  id: number
  name: string
  type: 'folder' | 'file'
  parentId: number | null
}

const initialItems: PortfolioItem[] = [
  { id: 1, name: 'Documentos Generales', type: 'folder', parentId: null },
  { id: 2, name: 'Informes Mensuales', type: 'folder', parentId: null },
  { id: 3, name: 'Proyectos', type: 'folder', parentId: null },
  { id: 4, name: 'Reglamento.pdf', type: 'file', parentId: 1 },
  { id: 5, name: 'Informe Enero 2024.docx', type: 'file', parentId: 2 },
  { id: 6, name: 'Proyecto Innovación.pptx', type: 'file', parentId: 3 },
]

const Portfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>(initialItems)
  const [currentFolder, setCurrentFolder] = useState<number | null>(null)
  const [newItemName, setNewItemName] = useState('')
  const [newItemType, setNewItemType] = useState<'folder' | 'file'>('file')

  const currentItems = items.filter(item => item.parentId === currentFolder)

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem: PortfolioItem = {
      id: items.length + 1,
      name: newItemName,
      type: newItemType,
      parentId: currentFolder,
    }
    setItems([...items, newItem])
    setNewItemName('')
  }

  const navigateToFolder = (folderId: number | null) => {
    setCurrentFolder(folderId)
  }

  const getBreadcrumbs = () => {
    const breadcrumbs = []
    let currentId = currentFolder
    while (currentId !== null) {
      const folder = items.find(item => item.id === currentId)
      if (folder) {
        breadcrumbs.unshift(folder)
        currentId = folder.parentId
      } else {
        break
      }
    }
    return breadcrumbs
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Portafolio de Documentos</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <button onClick={() => navigateToFolder(null)} className="text-blue-500 hover:underline">Inicio</button>
          {getBreadcrumbs().map((folder, index) => (
            <React.Fragment key={folder.id}>
              <span className="mx-2">/</span>
              <button onClick={() => navigateToFolder(folder.id)} className="text-blue-500 hover:underline">
                {folder.name}
              </button>
            </React.Fragment>
          ))}
        </div>
        
        <form onSubmit={handleAddItem} className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Nombre del nuevo elemento"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <select
            value={newItemType}
            onChange={(e) => setNewItemType(e.target.value as 'folder' | 'file')}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="file">Archivo</option>
            <option value="folder">Carpeta</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            <FolderPlus className="w-5 h-5" />
          </button>
        </form>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map(item => (
            <div key={item.id} className="flex flex-col items-center p-4 border rounded-md hover:bg-gray-50 cursor-pointer">
              {item.type === 'folder' ? (
                <Folder className="w-12 h-12 text-yellow-500 mb-2" onClick={() => navigateToFolder(item.id)} />
              ) : (
                <File className="w-12 h-12 text-blue-500 mb-2" />
              )}
              <span className="text-center text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio