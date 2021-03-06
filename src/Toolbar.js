import React, { Component } from 'react';


class Toolbar extends Component {
    get selected() {
      let selectedMessages = this.props.messages.filter((message) => message.selected)

      if(selectedMessages.length === this.props.messages.length) {
         return 'check-square-o'
      } else if(selectedMessages.length === 0) {
        return 'square-o'
      } else {
        return 'minus-square-o'
      }
    }
    render() {
        return (<div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                    <span className="badge badge">{this.props.unReadCount}</span>
                    unread messages
                </p>

                <button onClick={this.props.handleSelectAll} className="btn btn-default">
                    <i className={`fa fa-${this.selected}`}></i>
                </button>

                <button onClick={() => this.props.handleRead(true)} className="btn btn-default">
                    Mark As Read
                </button>

                <button onClick={() => this.props.handleRead(false)} className="btn btn-default">
                    Mark As Unread
                </button>

                <select className="form-control label-select">
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select">
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button onClick={this.props.handleDelete} className="btn btn-default">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>)
    }


}

export default Toolbar
