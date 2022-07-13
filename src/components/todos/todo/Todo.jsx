import todo from './Todo.module.scss'
import {RiDeleteBinLine} from 'react-icons/ri'
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { removeTodoAction } from '../../../redux/reducers/todoReducer';

const Todo = (props) => {
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(removeTodoAction(id))
  }
  return(
    <div className={todo.main}>
      <TextareaAutosize disabled placeholder="type your todo" value={props.text} maxRows={3} maxLength={138}/>
      <button onClick={() => removeTodo(props.todoId)}>
        <RiDeleteBinLine />
      </button>
    </div>
  )
}

export default Todo