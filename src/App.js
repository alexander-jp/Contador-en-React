import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

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


  componentDidMount() {
    let promesa = fetch('https://cors-anywhere.herokuapp.com/https://cinetux.herokuapp.com/recientes/', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    promesa.then((response) => response.json()).then((data) => {
      this.setState({
        lista: data.resultado
      })
    })
  }

  render() {
    return (
      <div>

        <p className="palabra">{this.state.lista.map((valor) => {
          return <ul className="media-list">
            <li className="media">
              <div className="media-left">
                <a href="https://www.google.com">
                  <img className="media-object contenedor" src={valor.url_img} alt={valor.movie_name}/>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{valor.movie_name}</h4>
                <h3 className="media-heading">{valor.movie_url}</h3>
              </div>
            </li>
          </ul>
        })
        }
        </p>
      </div>
    )
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
