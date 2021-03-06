import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Messages from './Messages'
import { shallow } from 'enzyme';

beforeEach(() => {
  const div = document.createElement('div')
  const app = shallow(<App />, div)

  app.state().messages.forEach((message, index) => {
    if(index % 2 === 0) {
      message.selected = true
    } else {
      message.selected = false
    }
  })

})

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('has an initial state of 8 messages', () => {
    const div = document.createElement('div')
    const app = shallow(<App />, div)
    expect(app.state().messages.length).toBe(8)
})

it('passes messages to Messages Component via props', () => {
    const div = document.createElement('div')
    const app = shallow(<App />, div)
    const messageList = app.find(Messages.name)
    expect(messageList.props().messages.length).toBe(8)

})

describe('#handleRead', () => {
    const div = document.createElement('div')
    const app = shallow(<App />, div)

    it('updates the state of all selected messages to read when true is passed in', () => {
        app.instance().handleRead(true)
        expect(app.state().messages[0].read).toBe(true)
        expect(app.state().messages[2].read).toBe(true)

    })

    it('updates the state of all selected messages to unread when false is passed in', () => {
        app.instance().handleRead(false)
        expect(app.state().messages[0].read).toBe(false)
        expect(app.state().messages[2].read).toBe(false)

    })
})

describe('#handleSelected', () => {
    const div = document.createElement('div')
    const app = shallow(<App />, div)

    it('updates the state of selected when the message property did not exist', () => {
        app.state().messages[1].selected = undefined
        app.instance().handleSelected(app.state().messages[1])
        expect(app.state().messages[1].selected).toBe(true)
    })

    it('updates the state of selected to true when selected is false', () => {
        app.state().messages[2].selected = false
        app.instance().handleSelected(app.state().messages[2])
        expect(app.state().messages[2].selected).toBe(true)
    })

    it('updates the state of selected to false when it is true', () => {
        app.state().messages[2].selected = true
        app.instance().handleSelected(app.state().messages[2])
        expect(app.state().messages[2].selected).toBe(false)
    })
})

describe('#handleStarred', () => {
    const div = document.createElement('div')
    const app = shallow(<App />, div)

    it('updates the state of the message to starred', () => {
        app.instance().handleStarred(app.state().messages[2])
        expect(app.state().messages[2].starred).toBe(false)

        app.instance().handleStarred(app.state().messages[3])
        expect(app.state().messages[3].starred).toBe(true)
    })
})

describe('#handleSelectAll', () => {
  const div = document.createElement('div')
  const app = shallow(<App />, div)

  it('updates the state of all the messages to selected if not all of them are selected', () => {
    app.instance().handleSelectAll()
    expect(app.state().messages[0].selected).toBe(true)
    expect(app.state().messages[1].selected).toBe(true)
    expect(app.state().messages[2].selected).toBe(true)
    expect(app.state().messages[3].selected).toBe(true)
    expect(app.state().messages[4].selected).toBe(true)
    expect(app.state().messages[5].selected).toBe(true)
    expect(app.state().messages[6].selected).toBe(true)
    expect(app.state().messages[7].selected).toBe(true)
  })

  it('updates the state of all the messages to unselected if all of them are selected', () => {
    app.state().messages.forEach((message) => message.selected = true)
    app.instance().handleSelectAll()
    expect(app.state().messages[0].selected).toBe(false)
    expect(app.state().messages[1].selected).toBe(false)
    expect(app.state().messages[2].selected).toBe(false)
    expect(app.state().messages[3].selected).toBe(false)
    expect(app.state().messages[4].selected).toBe(false)
    expect(app.state().messages[5].selected).toBe(false)
    expect(app.state().messages[6].selected).toBe(false)
    expect(app.state().messages[7].selected).toBe(false)
  })
})

describe('#handleDelete', () => {
  const div = document.createElement('div')
  const app = shallow(<App />, div)

  it('deletes all selected messages', () => {
  app.instance().handleDelete()
    expect(app.state().messages.length).toBe(4)
    expect(app.state().messages[0].selected).toBe(false)
    expect(app.state().messages[1].selected).toBe(false)
    expect(app.state().messages[2].selected).toBe(false)
    expect(app.state().messages[3].selected).toBe(false)

  })
})
