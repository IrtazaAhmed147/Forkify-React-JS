import React, { useEffect, useState } from 'react'
import '../CSS/RecipeList.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, handleNextEvent, setItems } from '../Feature/ApiSlice';







const RecipeList = () => {

    const items = useSelector(state => state.api.item);
    const count = useSelector(state=> state.api.results)
    const input = useSelector(state=> state.api.input)
    const loader = useSelector(state=> state.api.loading)
    const [initialVal, setInitialVal] = useState(0)
    const [finalVal, setFinalVal] = useState(10)
    const page = useSelector(state=> state.api.page)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchApi(input))
        if (page === 1) {
    
            setInitialVal(0)
            setFinalVal(10)
        }

    },[dispatch, input, page])

    const handleNext = () => {
        if (finalVal <= count) {

            
            setInitialVal(prev=> prev + 10)
            setFinalVal(prev=> prev + 10)
            dispatch(handleNextEvent())

        
            console.log(page)
        }
    }
    const handlePrev = () => {
        if(initialVal !== 0) {

            setInitialVal(prev=> prev - 10)
            setFinalVal(prev=> prev - 10)
            console.log('asdga')
        }

}


    const handleView = (id) => {
        navigate(`/recipe/${id}`)
    }



    return (
        <>
        <div className='list-box'>
            <div className="result-box my-2">
                
 <div >
                  <p> {count === 0 ? "Item not Found": ''} </p>

            {items && items.slice(initialVal,finalVal).map((item)=> {
                return <div key={item.id}>
                    
                        <div className="result "   >
                            <div onClick={()=> handleView(item.id)}>


                                <div className="card" style={{
                                    display: loader ? 'none' : 'flex' 
                                }}>
                                    <img className='item-img' src={item.image_url} style={{ height: '50px' }}  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.publisher}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            })}


                    </div>

                

                <div className="btn-box mt-3 mx-3" style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <button onClick={()=> handlePrev()} className='prevbtn NextPrevBtn' >&larr; Previous</button>
                    

                    
                        <button style={{ marginLeft: 'auto' }} onClick={()=> handleNext()} className='nextBtn NextPrevBtn' >Next &rarr;</button>

                    
                </div>



            </div>
        </div>
        <div className='copyrigth-box'>
            <p>&copy; Copyright by <a target='blank' href="https://github.com/IrtazaAhmed147">Irtaza Ahmed</a>  </p>
        </div>
        </>

    )
}

export default RecipeList
// rgb(249, 245, 243)