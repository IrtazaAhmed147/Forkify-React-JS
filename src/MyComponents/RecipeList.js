import React, { useEffect, useState } from 'react'
import '../CSS/RecipeList.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, handleNextEvent } from '../Feature/ApiSlice';
import Spinner from './Spinner';
import Card from './Card';







const RecipeList = () => {

    const items = useSelector(state => state.api.item);
    const count = useSelector(state => state.api.results)
    const input = useSelector(state => state.api.input)
    const loader = useSelector(state => state.api.loading)
    const [initialVal, setInitialVal] = useState(0)
    const [finalVal, setFinalVal] = useState(10)
    const [selected, setSelected] = useState(null)
    const selectedId = useSelector(state => state.api.selectedId);

    const page = useSelector(state => state.api.page)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchApi(input))


        if (page === 1) {

            setInitialVal(0)
            setFinalVal(10)
        }

    }, [dispatch, input, page])

    const handleNext = () => {
        if (finalVal <= count) {


            setInitialVal(prev => prev + 10)
            setFinalVal(prev => prev + 10)
            dispatch(handleNextEvent())


        }
    }
    const handlePrev = () => {
        if (initialVal !== 0) {

            setInitialVal(prev => prev - 10)
            setFinalVal(prev => prev - 10)
        }

    }



    if (loader) return (<Spinner />)

    return (
        <>
            <div className='list-box'>
                <div className="result-box my-2">

                    <div >
                        {input && items.length === 0 ?
                            <div className='notFoundBox'>

                                <p className='itemNotFound'><i className="fa-solid fa-triangle-exclamation"></i> No recipes found for your query! Please try again;</p>
                            </div>
                            : ''}


                        {items.slice(initialVal, finalVal).map((item) => {
                            return <div key={item.id} >


                                <Card item={item} loader={loader} selectedId={selectedId} setSelected={setSelected} selected={selected} />


                            </div>
                        })}


                    </div>



                    {count !== 0 ? <div className="btn-box mt-3 mx-3" style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <button onClick={() => handlePrev()} className='prevbtn NextPrevBtn' >&larr; Previous</button>



                        <button style={{ marginLeft: 'auto' }} onClick={() => handleNext()} className='nextBtn NextPrevBtn' >Next &rarr;</button>


                    </div> : ''}



                </div>
            </div>
            <div className='copyrigth-box'>
                <p>Developed by <a target='blank' href="https://github.com/IrtazaAhmed147">Irtaza Ahmed</a>  </p>
            </div>
        </>

    )
}

export default RecipeList