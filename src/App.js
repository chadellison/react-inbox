import React, {Component} from 'react';
import './App.css';
import Toolbar from './Toolbar'
import seedMessages from './seeds.json'
import Messages from "./Messages";

class App extends Component {
    constructor() {
        super()
        this.state = {
            messages: seedMessages
        }

        this.handleStarred = this.handleStarred.bind(this)
        this.handleSelected = this.handleSelected.bind(this)
        this.handleSelectAll = this.handleSelectAll.bind(this)
    }

    handleRead(message) {
        let updatedMessages = this.state.messages
        updatedMessages[message.id - 1].read = true
        this.setState({
            messages: updatedMessages
        })
    }

    handleSelected(message) {
        let updatedMessages = this.state.messages

        if(!message.selected) {
            updatedMessages[message.id - 1].selected = true
        } else {
          updatedMessages[message.id - 1].selected = false
        }

        this.setState({
            messages: updatedMessages
        })

    }

    handleStarred(message) {
        let updatedMessages = this.state.messages
        updatedMessages[message.id - 1].starred = !message.starred
        this.setState({
            message: updatedMessages
        })
    }

    handleSelectAll() {
      let updatedMessages = this.state.messages
      let selected = this.state.messages.reduce((value, message) => {
        if(!message.selected) {
          value = true
        }
        return value
      }, false)

      updatedMessages.forEach((message) => {
        message.selected = selected
      })

      this.setState({
        message: updatedMessages
      })
    }

    render() {
        return (
            <div className="App">
                <Toolbar className="Toolbar" handleSelectAll={this.handleSelectAll}/>
                <Messages messages={this.state.messages} handleStarred={this.handleStarred} handleSelected={this.handleSelected}/>
            </div>
        );
    }
}

export default App;
