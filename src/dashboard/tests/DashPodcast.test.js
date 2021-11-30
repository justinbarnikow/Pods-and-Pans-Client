import React from 'react'
import { shallow } from 'enzyme'
import DashPodcast from '../DashPodcast'
import { BrowserRouter } from 'react-router-dom'

describe('DashPodcast component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><DashPodcast /></BrowserRouter>)
    })
})