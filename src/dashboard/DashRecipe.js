import React from 'react'
import AppContext from '../AppContext'

function DashRecipe() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if (!value.recipe.recipe.label) {
                    return null
                } else {
                    const calories = parseFloat(value.recipe.recipe.calories).toFixed(0)
                    const image = value.recipe.recipe.image
                    return (
                        <article className='dashboard-recipe'>
                            <h3>{value.recipe.recipe.label}</h3>
                            <ul className='dashboard-recipeInfo'>
                            <li>Total Time: {value.recipe.recipe.totalTime} min</li>
                                <li>Yields: {value.recipe.recipe.yield} servings</li>
                                <li>Calories: {calories} kcal</li>
                                <li>
                                    Recipe Instructions:  <a href={value.recipe.recipe.url} target="_blank" rel="noreferrer">
                                            {value.recipe.recipe.source}
                                        </a>
                                </li>
                                <li><a href={value.recipe.recipe.url} target="_blank" rel="noreferrer">
                                    <img width="150" height="150" src={image} alt='food'/>
                                </a></li>
                                <li>Type: {value.recipe.recipe.mealType} - {value.recipe.recipe.dishType}</li>
                                <li>Diet labels: {value.recipe.recipe.dietLabels}</li>
                            </ul>
                        </article>
                    )
                }
            }}
        </AppContext.Consumer>
    )
}

export default DashRecipe
