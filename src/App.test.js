import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Messages from './Messages'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('has an initial state of 8 messages', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);

    expect(app.state().messages.length).toBe(8)

})

it('passes messages to Messages Component via props', () => {
    const div = document.createElement('div');

    const app = shallow(<App />, div);
    const messageList = app.find(Messages.name)
    expect(messageList.props().messages.length).toBe(8)

})

describe('#handleRead', () => {
    it('updates the state of a message to read', () => {
        const div = document.createElement('div')
        const  app = shallow(<App />, div)
        app.instance().handleRead(app.state().messages[2])
        expect(app.state().messages[2].read).toBe(true)

    })
})

describe('#handleSelected', () => {
    it('updates the state of selected when the message property did not exist', () => {
        const div = document.createElement('div')
        const app = shallow(<App />, div)
        app.instance().handleSelected(app.state().messages[2])
        expect(app.state().messages[2].selected).toBe(true)
    })

    it('updates the state of selected to true when selected is false', () => {
        const div = document.createElement('div')
        const app = shallow(<App />, div)
        app.state().messages[2].selected = false
        app.instance().handleSelected(app.state().messages[2])
        expect(app.state().messages[2].selected).toBe(true)
    })

    it('updates the state of selected to false when it is true', () => {
        const div = document.createElement('div')
        const app = shallow(<App />, div)
        app.state().messages[2].selected = true
        app.instance().handleSelected(app.state().messages[2])
        expect(app.state().messages[2].selected).toBe(false)
    })
})

describe('#handleStarred', () => {
    it('updates the state of the message to starred', () => {
        const div = document.createElement('div')
        const app = shallow(<App />, div)
        app.instance().handleStarred(app.state().messages[2])
        expect(app.state().messages[2].starred).toBe(false)

        app.instance().handleStarred(app.state().messages[3])
        expect(app.state().messages[3].starred).toBe(true)
    })
})

describe('#handleSelectAll', () => {
  it('updates the state of all the messages to selected if not all of them are selected', () => {
    const div = document.createElement('div')
    const app = shallow(<App />, div)

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
    const div = document.createElement('div')
    const app = shallow(<App />, div)

    app.instance().handleSelectAll()
    app.instance().handleSelectAll
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
