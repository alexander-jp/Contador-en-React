import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Formularios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  sincronizarEmail(email) {
    this.setState({
      email: email
    })
  }

  sincronizarPass(password) {
    this.setState({
      password: password
    })
  }

  sincronizarCambios(value, property) {
    let state = {}
    state[property] = value;
    this.setState(state);
  }

  submitLogin = () => {
    console.log("tu email: " + this.state.email + " tu password: " + this.state.password)
  }

  render() {
    return (
      <div>
        <input
          placeholder="Email"
          type="email"
          value={this.state.email}
          onChange={(ev) => { this.sincronizarCambios(ev.target.value, 'email') }} />

        <input
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={(ev) => { this.sincronizarPass(ev.target.value, 'password') }} />

        <h4>Tu nombre es: {this.state.email}</h4>
        <input
          type="submit"
          onClick={this.submitLogin}
          value="Ingresar" />
      </div>
    );
  }
}

class Lista extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lista: []
    };
  };


  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
    promesa.then((response)=> response.json()).then((data)=>{
      console.log(data)
    })

    response.then((response)=>{
      response.json().then((data)=>{
        console.log(data)
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>Lista de nombres</li>
          <li>{this.state.lista.map((valor) => {
            return <li>{valor['nombre']}</li>
          })
          }</li>
        </ul>
      </div>
    );
  }

}

class ListarNombres extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lista: [
        {
          nombre: 'Alexander',
          edad: '20',
          ciudad: 'Mexico'
        },
        {
          nombre: 'Julio',
          edad: '20',
          ciudad: 'Sabanilla'
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.lista.map((title) => {
          return <p>{title['nombre']} {title['ciudad']}</p>
        })
        }
        </h1>
      </div>
    )
  }

}


class IncrementarState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    }
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador += 1
    })
  }

  render() {
    return (
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
  render() {
    return (
      <div>
        <Lista />
      </div>
    );
  }
}

export default App;
