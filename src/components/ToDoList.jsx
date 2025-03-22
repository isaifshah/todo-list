import ToDoItem from './ToDoItem'

export default function ToDoList({ todos, onDelete, onToggle, onStartEdit, onSaveEdit }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onStartEdit={onStartEdit}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  )
}