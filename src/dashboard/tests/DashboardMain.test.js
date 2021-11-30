import React from 'react'
import { shallow } from 'enzyme'
import DashboardMain from '../DashboardMain'

describe('DashboardMain component', () => {
    it('renders w/o crashing', () => {
        shallow(<DashboardMain />)
    })
})