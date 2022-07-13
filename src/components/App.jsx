import app from './App.module.scss'
import Todos from './todos/Todos'

const App = () => {

  return (
    <div className={app.main}>
      <Todos />
    </div>
  )
}

export default App
