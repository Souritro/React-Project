import React from 'react'
import './App.css'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todoItems:todosData,
     //newTest:['Hello', 'World']
    }
   /* this.putToState= this.putToState.bind(this)*/
   this.handleChange=this.handleChange.bind(this)
  }
putToState(){
   const newTemp = this.state.todoItems
   console.log(newTemp)
   const yeet='YEET'
 //  this.setState({
  //  todoItems:  todosArray.concat(yeet)
  // })
   
}
handleChange(id){
  console.log("Changed")
  this.setState(prevState=>{
    const updatedTodos=prevState.todoItems.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed
       
      }
      return todo
      
    })
    return{
      todoItems:updatedTodos
    }

  })
  console.log("After statechange")
}

  render(){
    const todosArray= this.state.todoItems.map((todo)=>{
      return(
        <TodoItem task={todo.text}  key={todo.id} handleChange={this.handleChange}/>
        
      )
    })
    return(
      <div className="todo-list">
        {todosArray}
      
        {/*<button onClick={this.putToState}>Click</button>*/}
      
      </div>
    )
  }
  
}
export default App
