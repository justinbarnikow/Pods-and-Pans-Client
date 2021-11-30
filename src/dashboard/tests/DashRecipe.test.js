import React from 'react'
import { shallow } from 'enzyme'
import DashRecipe from '../DashRecipe'
import { BrowserRouter } from 'react-router-dom'

describe('DashRecipe component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><DashRecipe /></BrowserRouter>)
    })
})