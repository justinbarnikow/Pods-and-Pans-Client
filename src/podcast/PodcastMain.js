import React from 'react'
import NavBar from '../heading/NavBar'
import PodcastList from './PodcastList'
import PodcastSearch from './PodcastSearch'

function PodcastMain() {
    return (
        <section className='podcast_page'>
            <NavBar />
            podcast page
            <PodcastSearch />
            <PodcastList />
        </section>
    )
}

export default PodcastMain
