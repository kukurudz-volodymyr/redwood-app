import { render } from '@redwoodjs/testing/web'

import HomePageHeader from './HomePageHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomePageHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePageHeader />)
    }).not.toThrow()
  })
})
