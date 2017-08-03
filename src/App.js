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
        this.handleRead = this.handleRead.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleRead(value) {
        let updatedMessages = this.state.messages
        updatedMessages.forEach((message) => {
          if (message.selected) {
            message.read = value
          }
        })

        this.setState({
            messages: updatedMessages
        })
    }

    handleSelected(message) {
        let updatedMessages = this.state.messages

        updatedMessages.forEach((eachMessage) => {
          if(message === eachMessage) {
            eachMessage.selected ? eachMessage.selected = false : eachMessage.selected = true
          }
        })


        this.setState({
            messages: updatedMessages
        })

    }

    handleStarred(message) {
        let updatedMessages = this.state.messages

        updatedMessages.forEach((eachMessage) => {
          if(message === eachMessage) {
            eachMessage.starred = !message.starred
          }
        })
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

    handleDelete() {
      this.setState({
        messages: this.state.messages.filter((message) => !message.selected)
      })
    }

    render() {
        return (
            <div className="App">
                <Toolbar
                  className="Toolbar"
                  handleSelectAll={this.handleSelectAll}
                  handleRead={this.handleRead}
                  unReadCount={this.state.messages.filter((message) => !message.read).length}
                  handleDelete={this.handleDelete}
                />
                <Messages messages={this.state.messages} handleStarred={this.handleStarred} handleSelected={this.handleSelected}/>
            </div>
        );
    }
}

export default App;
