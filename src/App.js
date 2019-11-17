import React, {Component} from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class IncrementarState extends Component{
  constructor(props) {
    super(props);

    this.state = {
      contador:0
    }
  }

  aumentar = ()=>{
    this.setState({
      contador: this.state.contador+=1
    })
  }

  render(){
    return(
      <div>
      <h1>contador: {this.state.contador}</h1>
      <button onClick={
        this.aumentar
        //this.state.contador +=1;
      }>Click me</button>
      </div>);
  }
}


class App extends Component {
  render(){
    return (
      <div>
      <IncrementarState/>
      </div>
      );
    } 
  }

  export default App;
