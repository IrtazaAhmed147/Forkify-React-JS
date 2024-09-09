
import './App.css';
import Navbar from "./MyComponents/NavbarBox/Navbar";
import RecipeBox from './MyComponents/RecipeBox/RecipeBox';
import RecipeList from './MyComponents/RecipeListBox/RecipeList';
import React, { useState, useEffect } from "react";
import Spinner from "./MyComponents/Spinner/Spinner";
import HomeBox from './MyComponents/HomeBox/HomeBox';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";


function App() {

  const [recipe, setRecipe] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [childInputValue, setChildInputValue] = useState('');
  const [loading, setLoading] = useState(true)
  const [currentPageNum, setCurrentPageNum] = useState(1)

  const [specificRecipe, setSpecificRecipe] = useState([])
  const [specificRecipeKey, setSpecificRecipeKey] = useState(" ")
  const [loader, setLoader] = useState(true)




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



  }

  useEffect(() => {
    document.title = `Forkify`

    recipeData()

  }, [childInputValue])





  const handleChildInputSubmit = (value) => {
    setChildInputValue(value);
    console.log(value)
  };



  const specificRecipeData = async (specificRecipeKey) => {

    setLoader(true);
    const SpecificRecipeUrl = `https://forkify-api.herokuapp.com/api/v2/recipes/${specificRecipeKey}`
    let response1 = await fetch(SpecificRecipeUrl)
    let data1 = await response1.json()
    let parsedData1 = data1.data

   
    if (parsedData1 && parsedData1.recipe) {
      setSpecificRecipe(parsedData1.recipe);
  } else {
      console.error('Recipe not found or data is undefined');
      setSpecificRecipe([]); 
  }
  setLoader(false);

  }





  const handleRecipeClick = (id) => {

    setSpecificRecipeKey(id)
    
      
    

  }
  useEffect(() => {
    if (specificRecipeKey !== " ") {
        specificRecipeData(specificRecipeKey);  
    }
}, [specificRecipeKey]); 







  return (
    <div>
      <Router>

        <div className="container main-box" >

          <Navbar onFormSubmit={handleChildInputSubmit} />


          <div className="d-flex gap-1">


            <div className="recipeListPortion">

              {!loading && <RecipeList onClickKey={handleRecipeClick} currentPageNum={currentPageNum} recipes={recipe} totalResults={totalResults} />}
              {loading && <Spinner />}


            </div>



              <div className='recipeBoxPortion'>
            <Routes>

              <Route exact path="/"  element={<HomeBox/>}></Route>
              <Route exact path="/:specificRecipeKey"  element={<RecipeBox specificRecipe={specificRecipe}/>}></Route>
            </Routes>

            {/* {!loader && }
            {loader && <Spinner />} */}

              </div>




          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
