import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import BrowseResults from '../components/BrowseResults';

const profile = {
    displayName: "John Smith",
    city: "Detroit",
    state: "Michigan",
    userId: 1,
    image: "https://i.imgur.com/kOJm5J1.jpg"
}

describe('tests that browse result component is rendering correctly', () => {
    // integration test using mock data
    it('can access profile data props', () => {
        const wrapper = mount(<MemoryRouter><BrowseResults displayName={ profile.displayName } city={ profile.city } state={ profile.state } userId={ profile.userId } image={ profile.image } /></MemoryRouter>)
        expect(wrapper.props().children.props.displayName).toEqual(profile.displayName)
        expect(wrapper.props().children.props.city).toEqual(profile.city)
        expect(wrapper.props().children.props.state).toEqual(profile.state)
        expect(wrapper.find("Link").props().to).toBe('/profile/' + profile.userId)
        expect(wrapper.props().children.props.image).toEqual(profile.image)
    })
})