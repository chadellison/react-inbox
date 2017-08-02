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
