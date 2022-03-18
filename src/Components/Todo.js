import React from 'react'
import { TodoItem } from './TodoItem'



export const Todo = (props) => {

    let style = {
        minHeight: "80vh",
        marginLeft: "60px",
    }


    return (
        <div style = {style} >
            <h2 className="text-center">Todo List</h2>

            {props.todolist.length === 0 ? "Np Todo to display" :
                props.todolist.map((todo) => {
                    return (<TodoItem todo={todo} onDelete={props.onDelete} />
                    )
                })}
        </div>
    )
}
