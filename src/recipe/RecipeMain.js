import React from 'react'
import NavBar from '../heading/NavBar'
import RecipeList from './RecipeList'
import RecipeSearch from './RecipeSearch'

function RecipeMain() {
    return (
        <section className='recipe_page'>
            <NavBar />
            recipe page
            <RecipeSearch />
            <RecipeList />
        </section>
    )
}

export default RecipeMain
