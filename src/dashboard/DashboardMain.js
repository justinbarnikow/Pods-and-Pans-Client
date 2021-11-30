import React from 'react'
import NavBar from '../heading/NavBar'
import DashDirectory from './DashDirectory'
import DashPodcast from './DashPodcast'
import DashRecipe from './DashRecipe'

function DashboardMain() {
    return (
        <section className='dashboard_page'>
            <NavBar />
            dash page
            <DashDirectory />
            <DashRecipe />
            <DashPodcast />
        </section>
    )
}

export default DashboardMain
