import React, { useState, useEffect, useContext } from 'react'

import '../CSS/RecipeBox.css'
// import { useParams } from 'react-router-dom';


const RecipeBox = () => {

 
 


  return (


    <>




      <figure className='specific-img'>
        <img  alt="" />
        <h1 className='recipe-title'><span>title</span></h1>
      </figure>

      <div className="recipe-details d-flex">
        <ul>
          <li> Minutes</li>
          <li> Servings</li>
        </ul>
        <button className="bookmark-icon"><i className="fa-solid fa-bookmark"></i></button>
      </div>

      <div className="recipe-ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>




        <ul className='recipe-ingredients-list'>
          
             <li  className='ingredients-name' style={{ display: 'flex' }}> q u d
            </li>
          




        </ul >

      </div >

      <div className="recipe-directions">
        <h3>How to cook it</h3>

        <p>This recipe was carefully designed and tested by <b> publisher </b>. Please check out directions at their website.</p>
        <a target='blank' href='/'>
          <button className='btn btn-dark' style={{
            backgroundImage: 'linear-gradient(to right bottom, #6a6a6a, #000000)', border: 'none', borderRadius: '20px'
          }}>Direction &rarr;</button>
        </a>
      </div>


    </>
  )
}

export default RecipeBox
