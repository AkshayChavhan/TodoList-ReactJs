import React from 'react'

export const TodoItem = (props) => {
  return (
    <>
    <h5>{props.todo.title}</h5>
    <p>{props.todo.desc}</p>
    <button className='btn btn-sm btn-danger' onClick= {props.onDelete}>Delete</button>
    </> 
  )
}
