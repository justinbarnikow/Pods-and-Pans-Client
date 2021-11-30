import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipeMain from '../RecipeMain'

describe('RecipeMain component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipeMain /></BrowserRouter>)
    })
})