import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <article className='Nav'>
            <nav>
                <ul className='Nav_links'>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/recipe'>Recipe</Link></li>
                    <li><Link to='/podcast'>Podcast</Link></li>
                </ul>
            </nav>
        </article>
    )
}

export default NavBar