import todo from './Todo.module.scss'
import {RiDeleteBinLine} from 'react-icons/ri'
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoAction } from '../../../redux/reducers/todoReducer';

const Todo = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos)
  const removeTodo = (id) => {
    dispatch(removeTodoAction(id))
  }
  return(
    <div className={todo.main} style={{width: todos.length > 6 ? 'calc(100% - 3rem)' : 'calc(100% - 2rem)'}}>
      <TextareaAutosize disabled placeholder="type your todo" value={props.text} maxRows={3} maxLength={138}/>
      <button onClick={() => removeTodo(props.todoId)}>
        <RiDeleteBinLine />
      </button>
    </div>
  )
}

export default Todo