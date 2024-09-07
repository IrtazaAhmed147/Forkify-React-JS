import React, { useEffect, useState } from 'react'
import './RecipeList.css'
import Item from './Item'
import { isDisabled } from '@testing-library/user-event/dist/utils'




const RecipeList = (props) => {



    const [currentPage, setCurrentPage] = useState(props.currentPage)
    const recipesPerPage = 10;






    const handleNextBtn = () => {
        console.log('delho')
        if (currentPage * recipesPerPage < props.totalResults) {
            setCurrentPage(currentPage + 1)
        }
        if (currentPage > 1) {

        }

    }

    const handlePrevBtn = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const startIndex = (currentPage - 1) * recipesPerPage
    const endIndex = startIndex + recipesPerPage
    const currentRecipe = props.recipes.slice(startIndex, endIndex)






    return (
        <div className='list-box'>
            <div className="result-box my-2">

                {currentRecipe.map((element) => {
                    return <div key={`${element.id}`}>

                        <Item title={element.title ? element.title : ""} publisher={element.publisher ? element.publisher : ""} image_url={element.image_url} id={element.id} />



                    </div>

                })}

                <div className="btn-box mt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    {currentPage > 1 && (

                        <button className='btn btn-dark prev-btn' onClick={handlePrevBtn}>previous</button>
                    )}

                    {currentPage * recipesPerPage < props.totalResults && (
                        <button style={{ marginLeft: 'auto' }} className='btn btn-dark' onClick={handleNextBtn}>Next</button>

                    )}
                </div>

            </div>
        </div>
    )
}

export default RecipeList
