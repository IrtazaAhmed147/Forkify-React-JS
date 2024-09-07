
import './App.css';
import Navbar from "./MyComponents/Navbar";
import RecipeBox from './MyComponents/RecipeBox';
import RecipeList from './MyComponents/RecipeList';
import React, { useState, useEffect } from "react";

function App() {

  const [recipe, setRecipe] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [childInputValue, setChildInputValue] = useState('');

  const [currentPageNum, setCurrentPageNum] = useState(1)
  // const currentPageNum = 1




  const recipeData = async () => {

    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${childInputValue}`
    let response = await fetch(url)
    let data = await response.json()
    let parsedData = data.data


    setRecipe(parsedData.recipes)
    setTotalResults(data.results)

    console.log(parsedData.recipes)





  }

  useEffect(() => {
    // document.title = `NewMonkey - ${capatalize(props.category)}`

    recipeData()


  }, [childInputValue])


  const handleChildInputSubmit = (value) => {
    setCurrentPageNum(1)
    setChildInputValue(value);
    console.log(value)
    // recipeData()

  };


  return (


    <div className="container main-box" >
      <Navbar onFormSubmit={handleChildInputSubmit} />
      <div className="d-flex gap-1">


        <div className="recipeListPortion">
          <RecipeList currentPage={currentPageNum} recipes={recipe} totalResults={totalResults} />
        </div>

        <div className="recipeBoxPortion">
          <RecipeBox />
        </div>



      </div>
    </div>

  );
}

export default App;
