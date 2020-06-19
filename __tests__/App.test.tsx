import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'

describe('Sum 2', () => {
    it('Sums two numbers', () => {
        const sum = 1 + 2
        expect(sum).toBe(3)
    })
})
