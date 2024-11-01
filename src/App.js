import './App.css';
import React from "react";
import Navbar from './MyComponents/Navbar'
import HomeBox from './Page/HomeBox'
import RecipeBox from './MyComponents/RecipeBox'
import RecipeList from './MyComponents/RecipeList'

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {






  return (
    <div>
      <Router>

        <div className="container main-box" >

          <Navbar/>

          <div className="d-flex gap-1">


            <div className="recipeListPortion">

               <RecipeList  />



            </div>



            <div className='recipeBoxPortion'>
              <Routes>

                <Route exact path="/" element={<HomeBox />} ></Route>
                <Route exact path="/recipe/:recipeId" element={<RecipeBox  />}></Route>

              </Routes>


            </div>




          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
