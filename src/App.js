
import './App.css';
import Navbar from "./MyComponents/Navbar";
import RecipeList from './MyComponents/RecipeList';


function App() {


  return (

    <div className="container main-box" >

      <Navbar />

      <div className="recipePortion">
        <RecipeList />
      </div>


    </div>

  );
}

export default App;
