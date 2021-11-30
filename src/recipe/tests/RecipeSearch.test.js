import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipeSearch from '../RecipeSearch'

describe('RecipeSearch component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipeSearch /></BrowserRouter>)
    })
})