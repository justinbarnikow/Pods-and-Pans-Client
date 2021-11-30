import React from 'react'
import { useNavigate } from 'react-router'
import AppContext from '../AppContext';

function DashDirectory() {
    const navigate = useNavigate();
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <article className='dashboard-directory'>
                        Restart at:
                        <button type='button' onClick={() => {
                            value.restartAll()
                            navigate('/')
                        }}>
                            Beginning
                        </button>
                        <button type='button' onClick={() => {
                            value.restartToRecipe()
                            navigate('/recipe')
                        }}>
                            Recipe
                        </button>
                        <button type='button' onClick={() => {
                            navigate('/podcast')
                        }}>
                            Podcast
                        </button>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default DashDirectory