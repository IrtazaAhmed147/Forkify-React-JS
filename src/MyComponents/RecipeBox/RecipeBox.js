import React from 'react'
import './RecipeBox.css'

const RecipeBox = () => {
  return (

    <>

      <div className='specific-img'>
        <img src="https://forkify-api.herokuapp.com/images/9525555410.jpg" alt="" />
        <h1 className='recipe-title'><span>Jamaican Burgers</span></h1>
      </div>

      <div className="recipe-details d-flex">
        <ul>
          <li>60 Minutes</li>
          <li>4 Servings</li>
        </ul>
        <button className="bookmark-icon"></button>
      </div>

      <div className="recipe-ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>




        <ul className='recipe-ingredients-list'>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
          <li className='ingredients-name'>2 tbsps olive oil</li>
        </ul>

      </div>

      <div className="recipe-directions">
        <h3>How to cook it</h3>
        <p>This recipe was carefully designed and tested by Closet Cooking. Please check out directions at their website.</p>
        <button className='btn btn-dark'>Direction &rarr;</button>
      </div>

    </>
  )
}

export default RecipeBox
