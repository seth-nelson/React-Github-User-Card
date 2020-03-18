import React from 'react';
import axios from 'axios';
import FollowerList from './Components/FollowerList';
import User from './Components/User';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/seth-nelson')
      .then(response => {
        console.log('user data', response)
        this.setState({ user: response.data });
      })

      axios.get('https://api.github.com/users/seth-nelson/followers')
      .then(response => {
        console.log('follower data', response)
        this.setState({ followers: response.data });
      })
      .catch((error) => console.log('Error!'))
  }


  render () {
    return (
      <div className='App'>
        <header className='header'>
          <h1>GitHub Users</h1>
        </header>
        <div className='main-container'>
          <User user={this.state.user} />
          <FollowerList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;