import React from 'react'
import './Navbar.css'
import logo from './img/logo.09084f39.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f9f5f3', height: '100px' }}>
                <div className="container-fluid" style={{ width: '95%' }}>
                    <a className="navbar-brand" href="#">
                        <img className='logo' src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <form className="d-flex search">
                            <input className="form-control me-2 search-field" type="search" placeholder="Search over 1,000,000 recipies..." aria-label="Search" />
                            <button className="btn btn-outline-success search-btn" type="submit">Search</button>
                        </form>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">ADD RECIPE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">BOOKMARKS</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
