import React from 'react'

const todoList = ({handleDelete, handleEdit, todos}) => {
  return (
    <ul className='allToDos'>
    {
      todos.map((t) => (
        <li className='singleToDo'>
        <span className='todoText' key={t.id}>{t.todo}</span>
        <button onClick={() => handleEdit(t.id)}>Edit</button>
        <button onClick={() => handleDelete(t.id)}>Delete</button>
      </li>    
      ))
    }  
  </ul>
  )
}

export default todoList
