import React from 'react'
import { shallow } from 'enzyme'
import PodcastCard from '../PodcastCard'
import { BrowserRouter } from 'react-router-dom'

describe('PodcastCard component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastCard /></BrowserRouter>)
    })
})