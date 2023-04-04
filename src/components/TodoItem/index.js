// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDelete} = props
  const {title, id} = eachTodo

  const deleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="item">
      <p>{title}</p>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
