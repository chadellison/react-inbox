import React from 'react';
import Toolbar from './Toolbar'
import {shallow} from 'enzyme';
import jsonMessages from './seeds.json'

describe('Toolbar', () => {
  describe('#selected', () => {
    it('returns check-square-o when all messages are selected', () => {
      const div = document.createElement('div')
      let selectedMessages = jsonMessages.map((message) => {
        message.selected = true
        return message
      })

      const toolbar = shallow(<Toolbar messages={selectedMessages}/>, div)
      expect(toolbar.instance().selected).toBe('check-square-o')
    })

    it('returns square-o when none of the messages are selected', () => {
      const div = document.createElement('div')
      let selectedMessages = jsonMessages.map((message) => {
        message.selected = false
        return message
      })

      const toolbar = shallow(<Toolbar messages={selectedMessages}/>, div)
      expect(toolbar.instance().selected).toBe('square-o')
    })

    it('returns minus-square-o when some of the messages are selected', () => {
      const div = document.createElement('div')
      let selectedMessages = jsonMessages.map((message, index) => {
        if(index % 2 === 0) {
            message.selected = false
        } else {
          message.selected = true
        }

        return message
      })

      const toolbar = shallow(<Toolbar messages={selectedMessages}/>, div)
      expect(toolbar.instance().selected).toBe('minus-square-o')
    })
  })
})
