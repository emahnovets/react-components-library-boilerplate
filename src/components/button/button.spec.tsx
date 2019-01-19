import { shallow } from 'enzyme'
import * as React from 'react'
import Button from './index'

test('Button rendered with correct text', () => {
  const clickStub = jest.fn()
  const button = shallow(<Button onClick={clickStub}>Hello World</Button>)

  // Interaction demo
  expect(button.text()).toEqual('Hello World')
  button.simulate('click')
  expect(clickStub).toHaveBeenCalledTimes(1)

  // Snapshot demo
  expect(button).toMatchSnapshot()
})
