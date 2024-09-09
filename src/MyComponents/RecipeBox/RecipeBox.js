import React from 'react'
import './RecipeBox.css'



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
        <button className="bookmark-icon"><i className="fa-solid fa-bookmark"></i></button>
      </div>

      <div className="recipe-ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>




        <ul className='recipe-ingredients-list'>
          {specificIngredients.map((element, index) => {
            return <li key={index} className='ingredients-name' style={{ display: 'flex' }}>{element.quantity} {element.unit} {element.description}
            </li>
          })}




        </ul >

      </div >

      <div className="recipe-directions">
        <h3>How to cook it</h3>

        <p>This recipe was carefully designed and tested by <b> {specificRecipe.publisher} </b>. Please check out directions at their website.</p>
        <a target='blank' href={specificRecipe.source_url}>
          <button className='btn btn-dark'>Direction &rarr;</button>
        </a>
      </div>


    </>
  )
}

export default RecipeBox
