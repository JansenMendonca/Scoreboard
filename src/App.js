import React, { Component } from 'react';

import List from './List'


class App extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h2>Scoreboard</h2>
        <List />
      </div>
    );
  }
}

export default App;
