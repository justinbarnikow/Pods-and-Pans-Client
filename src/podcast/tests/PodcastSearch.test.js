import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import PodcastSearch from '../PodcastSearch'

describe('PodcastSearch component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastSearch /></BrowserRouter>)
    })
})