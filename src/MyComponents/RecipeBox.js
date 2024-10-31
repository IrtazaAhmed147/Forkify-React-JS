import React, { useEffect} from 'react'

import '../CSS/RecipeBox.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeApi, setbookmark } from '../Feature/ApiSlice';
import Spinner from './Spinner';


const RecipeBox = () => {


  const { recipeId } = useParams()
  const dispatch = useDispatch()
  const recipeItems = useSelector(state => state.api.specificRecipe)
  const loader = useSelector(state => state.api.loader)
  const bookmarks = useSelector(state => state.api.bookmark);
  const isBookmarked = bookmarks.some(item => item.id === recipeItems.id);


  useEffect(() => {
    dispatch(getRecipeApi(recipeId))

  }, [dispatch, recipeId])

  const handleBookmark = () => {
        dispatch(setbookmark(recipeItems))
  }


  if (loader) {
    return <Spinner />
  }
  if (!recipeItems) {
    return <Spinner/>
  }
  return (

    <>




      <figure className='specific-img'>
        <img src={recipeItems.image_url} alt="" />
        <h1 className='recipe-title'><span>{recipeItems.title}</span></h1>
      </figure>

      <div className="recipe-details d-flex">
        <ul>
          <li><i className="fa-regular fa-clock icon-color"></i> {recipeItems.cooking_time} Minutes</li>
          <li><i className="fa-solid fa-users icon-color"></i> {recipeItems.servings} Servings</li>
        </ul>
        <button className="bookmark-icon" onClick={() => handleBookmark()}>
          {isBookmarked ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}

          </button>
      </div>

      <div className="recipe-ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>




        <ul className='recipe-ingredients-list'>
          {recipeItems.ingredients && recipeItems.ingredients.map((item, i) => {
            return <li key={i} className='ingredients-name' style={{ display: 'flex' }}><i className="fa-solid fa-check icon-color"></i>  {item.quantity} {item.unit} {item.description}
            </li>
          })}






        </ul >

      </div >

      <div className="recipe-directions">
        <h3>How to cook it</h3>

        <p>This recipe was carefully designed and tested by <b> {recipeItems.publisher}</b>. Please check out directions at their website.</p>
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
