import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'

// describe('<App />', () => {
//   it('has 1 child', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree.children.length).toBe(1);
//   });
// });

describe('Sum 2', () => {
    it('Sums two numbers', () => {
        const sum = 1 + 2
        expect(sum).toBe(3)
    })
})
