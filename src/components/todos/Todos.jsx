import todo from './Todos.module.scss'
import Todo from './todo/Todo'
import { useScrollbar } from './useScrollbar'
import { useSelector } from 'react-redux'
import NewTodo from './newTodo/NewTodo'
import { useRef } from 'react'

const Todos = () => {
  const todos = useSelector(state => state.todo.todos)
  const isScroll = todos.length > 6
  const todoWrapper = useRef(null)

  useScrollbar(todoWrapper, isScroll)

  return(
    <div className={todo.main}>
      <h1>Your todos:</h1>
        <div className={todo.separator}></div>
      <div/>
        <NewTodo />
      <div className={todo.todos} style={{height: isScroll ? '100%' : '100%'}} ref={todoWrapper}>
        {todos.length>0 ? 
        <div className={todo.todo}>
          {todos.map(todo => 
            <Todo text={todo.text} todoId={todo.id} key={todo.id} />
          )}
        </div>
        : 
        <div className={todo.noTodo}><h3>no todos</h3></div>}
      </div>
    </div>
  )
}

export default Todos