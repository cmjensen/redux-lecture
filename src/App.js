import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { loginUser } from './redux/reducer'

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

  handleClick = () => {
    const { username, email } = this.state
    let user = { username, email }
    //below is my action creator from reducer.js Redux
    this.props.loginUser(user)
    this.setState({
      username: '',
      email: ''
    })
  }

  render(){
    return (
      <div className="App">
        <input onChange={ e => this.changeHandler(e)} name="username" type="text" value={this.state.username} placeholder="Username"/>
        <input onChange={ e => this.changeHandler(e)} name="email" type="text" value={this.state.email} placeholder="Email"/>
        <button onClick={ this.handleClick }>Add User</button>
        <h3>The username is: { this.props.user.username }</h3>
      </div>
    );
  }
}

//takes in Redux state, adds it to props so it can be used in this component (ex. line 38)
const mapStateToProps = state => state

export default connect(mapStateToProps, { loginUser })(App);
