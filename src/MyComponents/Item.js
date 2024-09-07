import React from 'react'
import './RecipeList.css'

const Item = () => {
    return (
        <div>



            <div className="result ">
                <a href="">
                    <div className="card " style={{ flexDirection: 'row', alignItems: 'center' }}>


                        <img className='item-img' style={{ height: '50px' }} src="https://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">With supporting text below as a </p>

                        </div>
                    </div>
                </a>
            </div>


        </div>
    )
}

export default Item
