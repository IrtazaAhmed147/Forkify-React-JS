
import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './MyComponents/Navbar'
import HomeBox from './Page/HomeBox'
import RecipeBox from './MyComponents/RecipeBox'
import RecipeList from './MyComponents/RecipeList'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
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
               {/* <Spinner /> */}


            </div>



            <div className='recipeBoxPortion'>
              <Routes>

                <Route exact path="/" element={<HomeBox />} ></Route>
                <Route exact path="/recipe" element={<RecipeBox  />}></Route>

              </Routes>


            </div>




          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
