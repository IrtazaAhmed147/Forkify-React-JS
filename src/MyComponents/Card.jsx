import React from 'react'   
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loadBar, setSelectedId } from '../Feature/ApiSlice';
const Card = (props) => {
    
    // const [selected, setSelected] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // const loader = useSelector(state => state.api.loading)

    const handleView = (id) => {

        if (props.selectedId !== id) {

            console.log('asdf')
            navigate(`/recipe/${id}`)
            dispatch(loadBar())
            // setSelected(id)
            dispatch(setSelectedId(id));
            props.setSelected(id);

        }




    }

    return (
        <div className="result "   >
            <div onClick={() => handleView(props.item.id)}>


                <div className="card" style={{
                    display: props.loader ? 'none' : 'flex',
                    backgroundColor: props.selectedId === props.item.id ? 'rgb(249, 245, 243)' : '#fff'
                }}>
                    <img className='item-img' src={props.item.image_url} style={{ height: '50px' }} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.item.title}</h5>
                        <p className="card-text">{props.item.publisher}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
