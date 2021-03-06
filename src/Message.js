import React, {Component} from 'react';

class Message extends Component {

    get messageRead() {
        return this.props.message.read ? "read" : "unread"
    }

    get messageSelected() {
        if (this.props.message.selected) {
            return 'selected'
        } else {
          return ''
        }
    }

    get messageChecked() {
      if(this.props.message.selected) {
        return 'checked'
      } else {
        return ''
      }
    }

    get labels() {
        let messageLabels = this.props.message.labels

        return messageLabels.map((label, index) => {
            return <span key={index} className="label label-warning">{label}</span>
        })
    }

    get starred() {
        return this.props.message.starred ? 'star fa fa-star' : 'star fa fa-star-o'
    }


    render() {
        return (
            <div className={`row message ${this.messageRead} ${this.messageSelected}`}>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input onClick={() => this.props.handleSelected(this.props.message)} type="checkbox" checked={`${this.messageChecked}`} />
                        </div>
                        <div className="col-xs-2">
                            <i className={this.starred} onClick={() => this.props.handleStarred(this.props.message)}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    {this.labels}
                    <a href="#">
                        {this.props.message.subject}
                    </a>
                </div>
            </div>)
    }
}

export default Message
