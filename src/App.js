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
    }

    handleRead(message) {
        let updatedMessages = this.state.messages
        updatedMessages[message.id - 1].read = true
        this.setState({
            messages: updatedMessages
        })
    }

    handleSelected(message) {
        if(message.selected === undefined) {
            let updatedMessages = this.state.messages
            updatedMessages[message.id - 1].selected = true

            this.setState({
                messages: updatedMessages
            })
        }
    }

    handleStarred(message) {
        let updatedMessages = this.state.messages
        updatedMessages[message.id - 1].starred = !message.starred
        this.setState({
            message: updatedMessages
        })
    }

    render() {
        return (
            <div className="App">
                <Toolbar className="Toolbar"/>
                <Messages messages={this.state.messages} handleStarred={this.handleStarred}/>
            </div>
        );
    }
}

export default App;
