import { useState } from 'react'

export default function ToDoItem({ todo, onDelete, onToggle, onStartEdit, onSaveEdit }) {
  const [editText, setEditText] = useState(todo.text)

  const handleEditSubmit = (e) => {
    e.preventDefault()
    onSaveEdit(todo.id, editText)
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span>{todo.text}</span>
          <div className="actions">
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => onStartEdit(todo.id)}>Edit</button>
          </div>
        </>
      )}
    </li>
  )
}