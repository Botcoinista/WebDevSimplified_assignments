// import React from 'react'
// import Todo from "./Todo"

// const TodoList = ({todos, toggleTodo}) => {
//   return (
//     todos.map(todo => 
//         <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
//     )  
//   )
// }

// export default TodoList

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className="todo-list-container">
      <div className='todo-list'>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
