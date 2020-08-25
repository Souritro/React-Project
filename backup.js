import React from 'react';
import Header from './Header.js'
import './App.css'

class App2 extends React.Component{
  constructor(){
    super()
    this.state = {
      value:0,
      testarray:['hello','world']
    }
    this.doIncrease = this.doIncrease.bind(this)
    this.doDecrease=this.doDecrease.bind(this)
    this.testFunction=this.testFunction.bind(this)
  }
  
  doIncrease(){
    this.setState(() => {
      const temp = this.state.value + 1
      console.log("value: ", this.state.value)
      return {value:temp}
    });
  }
  doDecrease(){
    this.setState(() => {
      const temporary=this.state.value-1
      return {value:temporary}
    })
  }
  testFunction(){
    const newarray= this.state.testarray.map(function(test){
      return <h3>{test}</h3>
    })
  }
 render(){
   const string="{this.state.value}>0?<h1>{this.state.value}</h1>:<h1>Cannot be less than 0</h1>"
   //const date= new Date();
  // const hours= date.getHours()
   //const min=date.getMinutes();
   //const second=date.getSeconds();
   //console.log(hours,min,second)
   
  return (
    <div>
      <Header text="This is my first React Text with Props"/>
      <Header text="This is another text"/>
      <button onClick={this.doIncrease}>Add</button>
      <button onClick={this.doDecrease}>Decrease</button>
      <button onClick={this.testFunction}>Try Function</button>
      <h1 className="headtext">The Value is:{this.state.value} </h1>
      
     
      
    </div>
  )
 }
}

export default App;