import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

//import ProductsList from './components/ProductsList';

class App extends Component {
  constructor(){
    super();
    this.state={
      products: [

       ]};
  };
  compponentDidMount(){
    fetch('http://myfelight.firebaseapp.com/shriproducts.json')
    .then(response=>response.json())
    .then(items=>this.setState({products:items}));
  }
  render(){
    return(
      <div className="App">
      {this.state.products.map(product=>
        (<div key={product.id}><h1>{product.name}</h1>
          <h2>{product.price}</h2></div>))}
          </div> ) 
  }  
}

export default App;