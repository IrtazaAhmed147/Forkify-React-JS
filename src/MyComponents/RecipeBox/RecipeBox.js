import React, { useState } from 'react'
import './RecipeBox.css'

import { useParams } from 'react-router-dom';


const RecipeBox = (props) => {



  const specificRecipe = props.specificRecipe || {}; // Ensure specificRecipe is an object
  const specificIngredients = specificRecipe.ingredients || []; // Ensure ingredients is an array


  

  



  return (

    
<>
      

        

      <figure className='specific-img'>
        <img src={specificRecipe.image_url} alt="" />
        <h1 className='recipe-title'><span>{specificRecipe.title}</span></h1>
      </figure>

      <div className="recipe-details d-flex">
        <ul>
          <li>{specificRecipe.cooking_time} Minutes</li>
          <li>{specificRecipe.servings} Servings</li>
        </ul>
        <button className="bookmark-icon"></button>
      </div>

      <div className="recipe-ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>




        <ul className='recipe-ingredients-list'>
          {specificIngredients.map((element, index) => {
            return <div key={index}>
            <li className='ingredients-name'>{element.quantity} {element.unit} {element.description}</li>
              </div>
          })}


         

    </ul >

      </div >

  <div className="recipe-directions">
    <h3>How to cook it</h3>
    <p>This recipe was carefully designed and tested by Closet Cooking. Please check out directions at their website.</p>
    <a target='blank' href={specificRecipe.source_url}>
    <button className='btn btn-dark'>Direction &rarr;</button>
    </a>
  </div>

    
  </>
  )
}

export default RecipeBox
