import React from 'react';
import { shallow } from 'enzyme';
import Browse from '../pages/Browse';
import BrowseResults from '../components/BrowseResults';

describe('tests that the browse page is working', () => {
    // unit tests
    it('renders without crashing', () => {
        shallow(<Browse />)
    })
    it('renders three <BrowseResults /> components', () => {
        const wrapper = shallow(<Browse />)
        expect(wrapper.find(BrowseResults)).toHaveLength(3)
    })
})