import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'
import seedMessages from './seeds.json'
import Messages from "./Messages";

class App extends Component {
    constructor(){
        super()
        this.state = {
            messages: seedMessages
        }
    }

  render() {
    return (
      <div className="App">
          <Toolbar className="Toolbar"/>
          <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
