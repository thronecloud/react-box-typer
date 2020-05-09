import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    lengthofinput:0,
    input:""
  }

  inputChangeHandeler=(event)=> {
    let len = event.target.value.length;
    this.setState({lengthofinput:len});
    this.setState({input:event.target.value})

  }

  deleteClickHandler=(index)=> {
    let inputs = this.state.input;
    // input is a string
    inputs = inputs.substring(0,index)+inputs.substring(index+1,inputs.length);
    console.log(inputs);
    this.setState({input:inputs})
  }

 
  
  render() {
  
    const charList = this.state.input.split('').map((char,index)=> {
      return <Char key={index} 
      click={()=>this.deleteClickHandler(index) }
      ch={char}/>; 
    });
  
   

    return (
      <div className="App">
        <input 
        onChange={this.inputChangeHandeler}
        value={this.state.input}
        >
        </input>
        <p> {this.state.lengthofinput} </p>
        <Validation length={this.state.lengthofinput}>  </Validation>
      
        {charList}
        
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
