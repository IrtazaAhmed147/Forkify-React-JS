import React from 'react'
import './RecipeList.css'

const Item = (props) => {

    let {title, publisher, image_url, id} = props


    return (
        <div>



            <div className="result ">
                <a href="">
                    <div className="card " style={{ flexDirection: 'row', alignItems: 'center' }}>


                        <img className='item-img' style={{ height: '50px' }} src={props.image_url} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.publisher}</p>

                        </div>
                    </div>
                </a>
            </div>


        </div>
    )
}

export default Item
