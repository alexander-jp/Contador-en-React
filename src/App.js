import React, {Component} from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Formularios extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:''
    }
  }

  sincronizarEmail(email){
    this.setState({
      email:email
    })
  }

  sincronizarPass(password){
    this.setState({
      password:password
    })
  }

  submitLogin = ()=>{
    console.log("tu email: "+ this.state.email + " tu password: "+ this.state.password)
  }

  render() {
    return (
       <div>
         <input 
         placeholder="Email"
          type="email"
          value={this.state.email}
          onChange={(ev)=>{this.sincronizarEmail(ev.target.value)}}/>

         <input 
         placeholder="Password"
         type="password"
         value={this.state.password}
         onChange={(ev)=>{this.sincronizarPass(ev.target.value)}}/>

         <h4>Tu nombre es: {this.state.email}</h4>
         <input
         type="submit"
         onClick={this.submitLogin}
         value="Ingresar"/>
       </div>
    );
  }
}

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
      <Formularios/>
      </div>
      );
    } 
  }

  export default App;
