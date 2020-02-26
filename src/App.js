import React, { Component } from 'react';



class App extends Component{
  constructor(){
    super();
    this.state={items:[],currentItem: {text:'',key:''}}
  }
  handleInput(e){
    this.setState({currentItem:{text:e.target.value, key:Date.now()}}

    )
  }
  addItem(e){
e.preventDefault();
  }
  render(){
    return(
      <form id="to-do-form" onSumbit={this.addItem}>
      <input type="text" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleInput}></input>
      <button type="submit">+</button>
      </form>
    )
  }
}
export default App;