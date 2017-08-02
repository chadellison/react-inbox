import React from 'react';
import Message from './Message'
import {shallow} from 'enzyme';

describe('#messageRead', () => {
    it('returns read if the read property on message is true', () => {
        const messageObject = {
            'id': 4,
            'subject': 'We need to program the primary TCP hard drive!',
            'read': true,
            'starred': false,
            'selected': true,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().messageRead).toBe('read')

    })

    it('returns unread if the read property on message is false', () => {
        const messageObject = {
            'id': 4,
            'subject': 'We need to program the primary TCP hard drive!',
            'read': false,
            'starred': false,
            'selected': true,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().messageRead).toBe('unread')

    })
})

describe('#messageSelected', () => {
    it('returns undefined when not selected', () => {
        const messageObject = {
            'id': 4,
            'subject': 'We need to program the primary TCP hard drive!',
            'read': false,
            'starred': false,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().messageSelected).toBe(undefined)
    });

    it('returns selected when selected is true', () => {
        const messageObject = {
            'id': 4,
            'subject': 'We need to program the primary TCP hard drive!',
            'read': false,
            'starred': false,
            'selected': true,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().messageSelected).toBe('selected')
    });
})

describe('#messageChecked', () => {
    it('returns empty string when not checked', () => {
        const messageObject = {
            'id': 4,
            'subject': 'We need to program the primary TCP hard drive!',
            'read': false,
            'starred': false,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().messageChecked).toBe('')

    });

    it('returns checked string when selected is true', () => {
        const messageObject = {
            'id': 4,
            'subject': 'We need to program the primary TCP hard drive!',
            'read': false,
            'starred': false,
            'selected': true,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().messageChecked).toBe('checked')

    });

});

describe('#labels', () => {
    it('labels returns array of spans when labels populated', () => {
        const messageObject = {
            'id': 7,
            'subject': 'We need to index the mobile PCI bus!',
            'read': true,
            'starred': false,
            'labels': ['dev', 'personal']
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().labels.length).toBe(2)
    })

    it('labels returns an empty array when labels is an empty array', () => {
        const messageObject = {
            'id': 7,
            'subject': 'We need to index the mobile PCI bus!',
            'read': true,
            'starred': false,
            'labels': []
        }

        const div = document.createElement('div')
        const messageComponent = shallow(<Message message={messageObject}/>, div)
        expect(messageComponent.instance().labels.length).toBe(0)
    })

})
