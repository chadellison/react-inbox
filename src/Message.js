import React, {Component} from 'react';

class Message extends Component {

    get messageRead() {
        return this.props.message.read ? "read" : "unread"
    }

    get messageSelected() {
        if (this.props.message.selected !== undefined) {
            return 'selected'
        }
    }

    render() {
        return (
            <div className={`row message ${this.messageRead} ${this.messageSelected}`}>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <a href="#">
                        {this.props.message.subject}
                    </a>
                </div>
            </div>)
    }
}

export default Message