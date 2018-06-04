import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Ada&apos;s Inspiration Board</h1>
        </header>
        <Board url="https://inspiration-bard.herokuapp.com/boards/"
 boardId={1} />
      </div>
    );
  }
}

export default App;
