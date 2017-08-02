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
