import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {

    get messages() {
        return(this.props.messages.map((message, i) =>{
            return (<Message key={i} message={message} handleStarred={this.props.handleStarred} />)
        }))
    }

    render() {
        return(<div>
            {this.messages}
        </div>)
    }
}

export default Messages