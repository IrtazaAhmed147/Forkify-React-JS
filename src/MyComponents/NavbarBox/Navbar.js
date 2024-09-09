import React, { useState } from 'react'
import './Navbar.css'
import logo from '../img/logo.09084f39.png'
import { Link } from "react-router-dom";

const Navbar = ({ onFormSubmit, onLogoClick }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(inputValue)
    };

    const handleLogoClick = () => {
        onLogoClick()
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f9f5f3', height: '100px' }}>
                <div className="container-fluid" style={{ width: '95%' }}>
                    <Link className="navbar-brand" to="/">
                        <img className='logo' src={logo} alt="" onClick={handleLogoClick} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <form className="d-flex search" onSubmit={handleSubmit}>
                            <input className=" me-2 search-field" value={inputValue} onChange={handleChange}
                                type="search" placeholder="Search over 1,000,000 recipies..." aria-label="Search" />
                            <button className=" search-btn" type="submit"> <i className="fas fa-search"></i> Search</button>
                        </form>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><i className="fa-regular fa-note-sticky"></i> ADD RECIPE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><i className="fa-regular fa-bookmark"></i> BOOKMARKS</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
