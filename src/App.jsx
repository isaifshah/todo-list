import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './index.css'

export default function App() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  // Add new todo
  const handleAddTodo = (e) => {
    e.preventDefault()
    if (inputText.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputText,
        completed: false,
        isEditing: false
      }])
      setInputText('')
    }
  }

  // Delete todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  // Start editing
  const startEditing = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, isEditing: true} : todo
    ))
  }

  // Save edited text
  const saveEdit = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, text: newText, isEditing: false} : todo
    ))
  }

  return (
    <div className="app">
      <Header />
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ToDoList 
        todos={todos}
        onDelete={handleDelete}
        onToggle={toggleComplete}
        onStartEdit={startEditing}
        onSaveEdit={saveEdit}
      />
    </div>
  )
}