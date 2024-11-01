import React, { useState } from 'react'
import '../CSS/Navbar.css'
import logo from '../img/logo.09084f39.png'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getValue } from '../Feature/ApiSlice';
import Bookmark from './Bookmark';

const Navbar = () => {
    
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)

    


    const handleSubmit =(e)=> {
        e.preventDefault()
        dispatch(getValue(input))
        
    }
     


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f9f5f3', height: '100px' }}>
                <div className="container-fluid" style={{ width: '95%' }}>
                    <Link className="navbar-brand" to="/">
                        <img className='logo' src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <form className="d-flex search"  onSubmit={handleSubmit}>
                            <input className=" me-2 search-field" onChange={(e)=> setInput(e.target.value)}
                                type="search" placeholder="Search over 1,000,000 recipies..." aria-label="Search" />
                            <button className=" search-btn" type="submit"> <i className="fas fa-search"></i> Search</button>
                        </form>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" ><i className="fa-solid fa-pen-to-square icon-color"></i> ADD RECIPE</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onMouseEnter={()=> setModal(true)} onMouseLeave={()=> setModal(false)} ><i className="fa-regular fa-bookmark icon-color"></i> BOOKMARKS</button>
                            </li>


                        </ul>
                    </div>
                </div>
                {modal && (
                    <div
                    onMouseEnter={()=> setModal(true)}
                    onMouseLeave={()=> setModal(false)}
                    >
                        <Bookmark />
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
