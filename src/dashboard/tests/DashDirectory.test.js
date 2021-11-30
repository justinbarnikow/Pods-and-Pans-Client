import React from 'react'
import { shallow } from 'enzyme'
import DashDirectory from '../DashDirectory'
import { BrowserRouter } from 'react-router-dom'

describe('DashDirectory component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><DashDirectory /></BrowserRouter>)
    })
})