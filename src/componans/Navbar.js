import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
    return (
        <>
            <nav className="navbar header navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand" to="/">إقرأ القرآن</Link>
                    <button className="navbar-toggler" type="Link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">الفهرس</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">استمع القرآن</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">تفسير</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;