import React from 'react'
import AppContext from '../AppContext'

function DashPodcast() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if(!value.podcast.podcast.audio) {
                    return null
                } else {
                    console.log(value.podcast.podcast.audio)
                    const image = value.podcast.podcast.image
                    const timeMinutes = value.podcast.podcast.audio_length_sec / 60
                    const timeFixed = timeMinutes.toFixed(0)
                    let desc = value.podcast.podcast.description_original
                    if(desc.length > 200) {
                        desc = desc.substring(0, 200) 
                    }
                return (
                    <article className='dashboard-podcast'>
                        <a href={value.podcast.podcast.listennotes_url} target="_blank" rel="noreferrer">{value.podcast.podcast.title_original}</a>
                        <ul className='podcast-info'>
                            <li><a href={value.podcast.podcast.link} target="_blank" rel="noreferrer">
                                <img width="150" height="150" src={image} alt='food'/>
                            </a></li>
                            <li>Description: {desc} <a href={value.podcast.podcast.listennotes_url} target="_blank" rel="noreferrer">...read more</a></li>
                            <li><a href={value.podcast.podcast.audio}>
                                Download Audio
                            </a></li>
                            <li>Listen here: <a href={value.podcast.podcast.listennotes_url} target="_blank" rel="noreferrer">here</a></li>
                            <li>Podcast: <a href={value.podcast.podcast.link} target="_blank" rel="noreferrer">here</a></li>
                            <li>Time: {timeFixed} minutes</li>
                        </ul>
                    </article>
                )
                }
            }}
        </AppContext.Consumer>
    )
}

export default DashPodcast
