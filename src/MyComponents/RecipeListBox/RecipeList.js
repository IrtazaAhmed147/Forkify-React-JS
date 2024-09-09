import React, { useEffect, useState } from 'react'
import './RecipeList.css'
import { Link } from "react-router-dom";







const RecipeList = (props) => {





    const [currentPage, setCurrentPage] = useState(props.currentPageNum)
    const recipesPerPage = 10;






    const handleNextBtn = () => {

        if (currentPage * recipesPerPage < props.totalResults) {
            setCurrentPage(currentPage + 1)
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


    const getKey = (id) => {

        console.log(id)
        props.onClickKey(id)
    }





    return (
        <div className='list-box'>
            <div className="result-box my-2">

                {currentRecipe.map((element) => {
                    return <div key={`${element.id}`}>




                        <div className="result "    >
                            <Link to={`${element.id}`}>


                                <div className="card" onClick={() => getKey(element.id)} style={{ flexDirection: 'row', alignItems: 'center', height: '100px' }}>
                                    <img className='item-img' style={{ height: '50px' }} src={element.image_url} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title ? element.title : ""}</h5>
                                        <p className="card-text">{element.publisher ? element.publisher : ""}</p>

                                    </div>
                                </div>

                            </Link>
                        </div>

                    </div>

                })}











                <div className="btn-box mt-3 mx-3" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    {currentPage > 1 && (

                        <button className='prevbtn NextPrevBtn' onClick={handlePrevBtn}>&larr; Previous</button>
                    )}

                    {currentPage * recipesPerPage < props.totalResults && (
                        <button style={{ marginLeft: 'auto' }} className='nextBtn NextPrevBtn' onClick={handleNextBtn}>Next &rarr;</button>

                    )}
                </div>

            </div>
        </div>
    )
}

export default RecipeList
