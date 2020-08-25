import React from 'react'


function TodoItem(props){
    return(
        <div className="todo-item">

            <input type="checkbox"
            checked={props.task.completed}
            onChange={props.handleChange}
            
            />
            <p>{props.task}</p>
     
        </div>
    )
}
export default TodoItem