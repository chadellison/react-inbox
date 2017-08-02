import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('App passes messages to Messages Component via props', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);

    expect(app.state().messages.length).toBe(8)

})
