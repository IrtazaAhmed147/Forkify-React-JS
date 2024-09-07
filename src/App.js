
import './App.css';
import Navbar from "./MyComponents/Navbar";
import RecipeBox from './MyComponents/RecipeBox';
import RecipeList from './MyComponents/RecipeList';
import React, { useState, useEffect } from "react";

function App() {

  const [recipe, setRecipe] = useState([])
  const [totalResults, setTotalResults] = useState(0)




  const recipeData = async () => {

    const url = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
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


  }, [])


  return (






    <div className="container main-box" >

      <Navbar />

      <div className="d-flex gap-1">


        <div className="recipeListPortion">

          <RecipeList recipes={recipe} totalResults={totalResults} />

        </div>

        <div className="recipeBoxPortion">
          <RecipeBox />
        </div>



      </div>
    </div>

  );
}

export default App;
