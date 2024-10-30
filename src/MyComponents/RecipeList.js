import React, { useEffect, useState } from 'react'
import '../CSS/RecipeList.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, setItems } from '../Feature/ApiSlice';







const RecipeList = () => {

    const items = useSelector(state => state.api.item);
    const count = useSelector(state=> state.api.results)
    const input = useSelector(state=> state.api.input)
    const [initialVal, setInitialVal] = useState(0)
    const [final, setFinal] = useState(10)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchApi(input))
    },[dispatch, input])

    const handleNext = () => {
        if (final <= count) {

            setInitialVal(prev=> prev + 10)
            setFinal(prev=> prev + 10)
            console.log('hn bhai nol')
        }
    }
    const handlePrev = () => {
        if(initialVal !== 0) {

            setInitialVal(prev=> prev - 10)
            setFinal(prev=> prev - 10)
            console.log('asdga')
        }

}






    return (
        <>
        <div className='list-box'>
            <div className="result-box my-2">

                
 <div >

            {items && items.slice(initialVal,final).map((item)=> {
                return <div key={item.id}>
                    
                        <div className="result "   >
                            <Link target='_blank' to='/'>


                                <div className="card"  style={{
                                    flexDirection: 'row', alignItems: 'center', height: '100px', backgroundColor:'rgb(249, 245, 243)' ,
                                    transition: 'background-color 0.3s'
                                }}>
                                    <img className='item-img' src={item.image_url} style={{ height: '50px' }}  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.publisher}</p>

                                    </div>
                                </div>

                            </Link>
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
