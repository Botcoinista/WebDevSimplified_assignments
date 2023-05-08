import { useState, useRef, useEffect } from 'react'
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid"
import Todo from './Todo'
 
const LOCAL_STORAGE_KEY = "todoApp.todos" 


export const App = () => {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleClearTodo = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }



  //Lägg till Todo
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, colpeted: false
       }]
    })
    todoNameRef.current.value = null
  }
  

  return (
    <>
    <div className="container">
      <div className="card">
        <input className='inputTodo' ref={todoNameRef} type="text" placeholder= 'Type here' />
        <div className="buttons">
          <button onClick={handleAddTodo} className='add-btn' >Add Todo</button>
          <button onClick={handleClearTodo} className='clear-btn' >Clear Completed Todos</button>
        </div>
        <p> {todos.filter(todo => !todo.complete).length} left to do </p>
      </div>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    
    </div>
    </>

    
  )
}

export default App
