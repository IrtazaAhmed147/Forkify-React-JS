import React, { useEffect, useState } from 'react'
import './RecipeList.css'
// import { Link } from "react-router-dom";


// import Item from './Item'





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



                        {/* <Item title={element.title ? element.title : ""} publisher={element.publisher ? element.publisher : ""} image_url={element.image_url} id={element.id} /> */}

                        <div className="result "    >
                            {/* <a href={`${element.id}`}> */}


                            <div className="card" onClick={() => getKey(element.id)} style={{ flexDirection: 'row', alignItems: 'center', height: '100px' }}>
                                <img className='item-img' style={{ height: '50px' }} src={element.image_url} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{element.title ? element.title : ""}</h5>
                                    <p className="card-text">{element.publisher ? element.publisher : ""}</p>

                                </div>
                            </div>

                            {/* </a> */}
                        </div>

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
