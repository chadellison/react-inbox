import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {

    get messages() {
        return(this.props.messages.map((message, index) =>{
            return (
              <Message
                key={index}
                message={message}
                handleStarred={this.props.handleStarred}
                handleSelected={this.props.handleSelected}
              />
            )
        }))
    }

    render() {
        return(<div>
            {this.messages}
        </div>)
    }
}

export default Messages
