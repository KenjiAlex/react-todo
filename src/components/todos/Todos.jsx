import todo from './Todos.module.scss'
import Todo from './todo/Todo'
import { useSelector } from 'react-redux'
import NewTodo from './newTodo/NewTodo'

const Todos = () => {
  const todos = useSelector(state => state.todo.todos)
  return(
    <div className={todo.main}>
      <h1>Your todos:</h1>
      <div className={todo.separator}></div>
      <div/>
      <NewTodo />
      {todos.length>0 ? 
      <div className={todo.todo}>
        {todos.map(todo => 
          <Todo text={todo.text} todoId={todo.id} key={todo.id} />
        )}
      </div>
      : 
      <div><h3>no todos</h3></div>}
    </div>
  )
}

export default Todos