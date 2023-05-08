import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }

  return (
    
    // <div className='checkbox-container' >
        <div className='checkbox-card' >
        <label htmlFor="">
            <input className='checkbox-input' type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            <div className='todo-name'>{todo.name}</div>
        </label>
        </div>
    // </div>
   
  )
}

export default Todo