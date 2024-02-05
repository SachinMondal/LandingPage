import React, { useEffect, useState } from 'react';
import Profile from '../assets/img/profile.png';
import Logo from '../assets/img/logo.png';
import SignIn from './SignIn';

const Navbar = ({ loggedIn, onSignInClick }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo on the left */}
                <a className="navbar-brand " href="/">
                    <img src={Logo} alt="" className="logo-img" />
                </a>

                {/* Hamburger Toggle Button for mobile */}
                <button
                    className="navbar-toggler mb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Centered search bar with icon inside input */}
                    <form className="d-flex ms-auto w-30 rounded-pill mb-2" style={{ backgroundColor: '#e9ecef' }} >
                        <div className="input-group rounded-pill">
                            <span className="input-group-text rounded-pill" style={{ border: 'none' }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input
                                className="form-control rounded-pill"
                                type="search"
                                placeholder="Search for your favourite products in ATG"
                                aria-label="Search"
                                width={'4rem'}
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                            />
                        </div>
                    </form>

                    {/* Div on the right */}
                    <div className="dropdown ms-auto">
                        {loggedIn ? (
                            <div className="d-flex">
                                <div className="rounded-circle">
                                    <img src={Profile} alt="" />
                                </div>
                                <button
                                    className="btn dropdown-toggle rounded me-2 fw-bolder"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span>Siddharth Goyal</span>
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex">
                                {/* Modified the Create Account button */}
                                {isMobile ? (<button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom2" aria-controls="offcanvasBottom2">Create Account!</button>) : (
                                    <button
                                        className="btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalToggle"
                                        role="button"
                                    >
                                        Create Account!
                                    </button>
                                )
                                }

                                <SignIn loggedIn={loggedIn} onSignInClick={onSignInClick} />
                                {/* Added a class 'btn-trigger-offcanvas' to the button */}
                                <button
                                    className="btn dropdown-toggle rounded me-2 fw-bolder btn-trigger-offcanvas"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span style={{ color: 'blue' }}>It's free!</span>
                                </button>
                            </div>
                        )}
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">
                                Action
                            </a>
                            <a className="dropdown-item" href="/">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
