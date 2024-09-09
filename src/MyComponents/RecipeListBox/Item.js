import React, {useEffect} from 'react'
import './RecipeList'

const Item = (props) => {

    let { title, publisher, image_url, id } = props


    // const getKey = () => {
        // console.log(id)
        // keyId(id)
        // console.log(keyId)
    // }

    
    



    return (
        <div>



            <div className="result ">
                {/* <a href={id}> */}
                

                    <div className="card " style={{ flexDirection: 'row', alignItems: 'center', height: '100px' }}>


                        <img className='item-img' style={{ height: '50px' }} src={image_url} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{publisher}</p>

                        </div>
                    </div>
               
                {/* </a> */}
            </div>


        </div>
    )
}

export default Item
