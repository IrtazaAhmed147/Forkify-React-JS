import React, { useState, useEffect, useContext } from 'react'

import '../CSS/RecipeBox.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeApi } from '../Feature/ApiSlice';


const RecipeBox = () => {

 
 const {recipeId} = useParams()
 const dispatch = useDispatch()
 const recipeItems = useSelector(state=> state.api.specificRecipe)

useEffect(()=> {
  dispatch(getRecipeApi(recipeId))

},[dispatch, recipeId])


  return (


    <>



      {/* {recipeItems.map((item)=>{
        console.log(item)
        return item
      })} */}
      <figure className='specific-img'>
        <img src={recipeItems.image_url} alt="" />
        <h1 className='recipe-title'><span>{recipeItems.title}</span></h1>
      </figure>

      <div className="recipe-details d-flex">
        <ul>
          <li>{recipeItems.cooking_time} Minutes</li>
          <li>{recipeItems.servings} Servings</li>
        </ul>
        <button className="bookmark-icon"><i className="fa-solid fa-bookmark"></i></button>
      </div>

      <div className="recipe-ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>




        <ul className='recipe-ingredients-list'>
          {recipeItems.ingredients && recipeItems.ingredients.map((item, i)=> {
            return <li key={i} className='ingredients-name' style={{ display: 'flex' }}> {item.quantity} {item.unit} {item.description}
            </li>
          })}
             
          




        </ul >

      </div >

      <div className="recipe-directions">
        <h3>How to cook it</h3>

        <p>This recipe was carefully designed and tested by <b> {recipeItems.publisher} </b>. Please check out directions at their website.</p>
        <a target='blank' href={recipeItems.source_url}>
          <button className='btn btn-dark' style={{
            backgroundImage: 'linear-gradient(to right bottom, #6a6a6a, #000000)', border: 'none', borderRadius: '20px'
          }}>Direction &rarr;</button>
        </a>
      </div>


    </>
  )
}

export default RecipeBox
