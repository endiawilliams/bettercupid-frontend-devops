import React from 'react';
import { shallow } from 'enzyme';
import Register from '../pages/Register';

describe('tests for ability to register a user', () => {
    // unit test
    it('renders without crashing', () => {
        shallow(<Register />)
    })
})