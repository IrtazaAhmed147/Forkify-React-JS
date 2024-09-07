import React, {useEffect} from 'react'
import './RecipeList.css'
import Item from './Item'




const RecipeList = () => {


    const recipeData = async () => {

        const url = 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
        let response = await  fetch(url)
        let data  = await response.json()
        let parsedData = data.data
    
        console.log(parsedData.recipes[0].publisher)
    
    
    }

    useEffect(() => {
        // document.title = `NewMonkey - ${capatalize(props.category)}`
    
        recipeData()
       
      }, [])




    return (
        <div className='list-box'>
            <div className="result-box my-2">
                <Item />
            </div>
        </div>
    )
}

export default RecipeList
