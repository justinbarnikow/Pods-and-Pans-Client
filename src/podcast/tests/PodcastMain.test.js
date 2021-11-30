import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import PodcastMain from '../PodcastMain'

describe('PodcastMain component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastMain /></BrowserRouter>)
    })
})