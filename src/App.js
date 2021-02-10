import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      email: ''
    }
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  render(){
    return (
      <div className="App">
        <input onChange={ e => this.changeHandler(e)} name="username" type="text" value={this.state.username} placeholder="Username"/>
        <input onChange={ e => this.changeHandler(e)} name="email" type="text" value={this.state.email} placeholder="Email"/>
      </div>
    );
  }
}

export default App;
