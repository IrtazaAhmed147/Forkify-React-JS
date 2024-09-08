
import './App.css';
import Navbar from "./MyComponents/NavbarBox/Navbar";
import RecipeBox from './MyComponents/RecipeBox/RecipeBox';
import RecipeList from './MyComponents/RecipeListBox/RecipeList';
import React, { useState, useEffect } from "react";
import Spinner from "./MyComponents/Spinner/Spinner";

function App() {

  const [recipe, setRecipe] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [childInputValue, setChildInputValue] = useState('');
  const [loading, setLoading] = useState(true)

  const [currentPageNum, setCurrentPageNum] = useState(1)

  const recipesPerPage = 10;



  const recipeData = async () => {

    setLoading(true)

    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${childInputValue}`
    let response = await fetch(url)
    let data = await response.json()
    let parsedData = data.data
    setCurrentPageNum(1)

    setRecipe(parsedData.recipes)
    setTotalResults(data.results)
    setLoading(false)

    console.log(parsedData.recipes)


  }

  useEffect(() => {
    document.title = `Forkify`

    recipeData()

  }, [childInputValue])











  const handleNextBtn = () => {

    if (currentPageNum * recipesPerPage < totalResults) {
      setCurrentPageNum(currentPageNum + 1)
    }


  }

  const handlePrevBtn = () => {
    if (currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1)
    }
  }



  const startIndex = (currentPageNum - 1) * recipesPerPage
  const endIndex = startIndex + recipesPerPage
  const currentRecipe = recipe.slice(startIndex, endIndex)


  const handleChildInputSubmit = (value) => {
    setCurrentPageNum(1)
    setChildInputValue(value);
    console.log(value)
  };

















  return (


    <div className="container main-box" >

      <Navbar onFormSubmit={handleChildInputSubmit} />
    

      <div className="d-flex gap-1">


        <div className="recipeListPortion">

          {!loading && <RecipeList currentRecipe={currentRecipe} />}
          {loading && <Spinner />}

          {!loading && <div className="btn-box mt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {currentPageNum > 1 && (
              <button className='btn btn-dark prev-btn' onClick={handlePrevBtn}>previous</button>
            )}
            {currentPageNum * recipesPerPage < totalResults && (
              <button style={{ marginLeft: 'auto' }} className='btn btn-dark' onClick={handleNextBtn}>Next</button>
            )}
          </div>}

        </div>




        <div className="recipeBoxPortion">
          <RecipeBox />
        </div>



      </div>
    </div>

  );
}

export default App;
