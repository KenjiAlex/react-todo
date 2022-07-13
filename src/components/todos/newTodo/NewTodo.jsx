import newTodo from './NewTodo.module.scss'
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../../redux/reducers/todoReducer'
import { createRef, useState } from 'react';

const NewTodo = () => {
  const dispatch = useDispatch()
  const [text, setState] = useState('')

  const addTodo = (text) => {
    if (text != '') {
      const todo = {
        text,
        id: Date.now()
      }
      dispatch(addTodoAction(todo))
      setState('')
    }
  }

  const inputRef = createRef()

  const handleChange = (event) => {
    setState(event.target.text)
  }
  return (
    <div className={newTodo.main}>
      <div className={newTodo.leftSide}>
      <h3>Type new todo here:</h3>
      <TextareaAutosize ref={inputRef} placeholder='type new todo' onChange={handleChange} maxRows={3} value={text} maxLength={138}/>
      </div>
      
    <div className={newTodo.rigthSide}>

    <button onClick={() => addTodo(inputRef.current.value)}>
        <p>Add</p>
    </button>
    </div>
    

  </div>
  )
}

export default NewTodo