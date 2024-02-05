import React, { useState, useEffect } from 'react';
import SignUp from '../assets/img/signup.png';
import '../assets/css/HomePage.css';

const SignIn = ({ loggedIn, onSignInClick }) => {
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

    const showModal = !isMobile;

    return (
        <>
            {showModal && (
                /* First Modal */
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header" style={{ marginTop: '-3rem', }}>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: 'white' }}></button>
                            </div>
                            <div className="modal-body" style={{ backgroundColor: '#EFFFF4', color: '#008A45' }}>
                                <p className='fs-6'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <h3 className='align-baseline'>Create Account</h3>
                                </div>
                                <div>
                                    <p>Already have an account?<span style={{ color: '#2F6CE5' }}><a href="/" className="btn fw-bolder" style={{ color: '#2F6CE5' }} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign In</a></span></p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='ms-4 rounded w-50'>
                                    <div className='d-flex'>
                                        <input type="text" placeholder="First Name" className='p-2 w-50' id='firstNameInput' name='firstName' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                                        <input type="text" placeholder="Last Name" className='p-2 w-50' id='lastNameInput' name='lastName' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                                    </div>
                                    <input type="email" placeholder="email" className='w-100 p-2' id='emailInput' name='email' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                                    <input type="password" placeholder="Password" className='w-100 p-2' id='passwordInput' name='password' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                                    <input type="confirmPassword" placeholder="Confirm Password" className='w-100 p-2' id='confirmPasswordInput1' name='confirmPassword' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                                    <button className="btn btn-primary m-3 ms-0 w-100 rounded-pill" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Create Account</button>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary w-100 ">
                                            <i className="fa-brands fa-facebook me-3"></i>
                                            <span className='fc-black'>Sign up with Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-primary w-100 mt-2">
                                            <i className="fa-brands fa-google me-3"></i>
                                            <span className='fc-black'>Sign up with Google</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img src={SignUp} alt="" />
                                    <div>
                                        <p className='fs-6'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Second Modal */}
            <div
                className="modal fade bottom"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header" style={{ marginTop: '-3rem' }}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: 'white' }}></button>
                        </div>
                        <div className="modal-body" style={{ backgroundColor: '#EFFFF4', color: '#008A45' }}>
                            <p className='fs-6'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        </div>
                        <div className='d-flex justify-content-between p-2 '>
                            <div>
                                <h3 className='align-baseline'>Sign In</h3>
                            </div>
                            <div>
                                <p>Don't have an Account yet?<span style={{ color: '#2F6CE5' }}><a href="/" className="btn fw-bolder" style={{ color: '#2F6CE5' }} data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Create new for free</a></span></p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='ms-4 rounded w-50'>

                                <input type="email" placeholder="email" className='w-100 p-2' id='emailInput1' name='email' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                                <input type="password" placeholder="Password" className='w-100 p-2' id='passwordInput2' name='password' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />

                                <button className="btn btn-primary m-3 ms-0 w-100 rounded-pill" onClick={onSignInClick}>Sign In</button>
                                <div >
                                    <button type="button" className="btn btn-outline-primary w-100 ">
                                        <i className="fa-brands fa-facebook me-3"></i>
                                        <span className='fc-black'>Sign up with Facebook</span>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary w-100 mt-2">
                                        <i className="fa-brands fa-google me-3"></i>
                                        <span className='fc-black'>Sign up with Google</span>
                                    </button>
                                    <button type="button" className="btn btn-outline-none w-100 mt-2">
                                        <span className='fc-black fw-bolder'>Forgot Password?</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <img src={SignUp} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Off-canvas component for mobile view */}
            <div className="offcanvas offcanvas-bottom p-2 rounded-top" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ height: '50%' }}>
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title" id="offcanvasBottomLabel">Welcome back!</h4>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <input type="email" placeholder="email" className='w-100 p-2' id='emailInput2' name='email' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                    <input type="password" placeholder="Password" className='w-100 p-2' id='passwordInput3' name='password' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                    <div className='d-flex justify-content-around'>
                        <button className="btn btn-primary m-3 ms-0 w-50 rounded-pill" onClick={onSignInClick}>Sign In</button>
                        {/* Link to the second off-canvas */}
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom2" aria-controls="offcanvasBottom2">
                            or, Create Account!
                        </button>
                    </div>
                    <div>
                        {/* Social buttons */}
                        <button type="button" className="btn btn-outline-primary w-100 ">
                            <i className="fa-brands fa-facebook me-3"></i>
                            <span className='fc-black'>Sign up with Facebook</span>
                        </button>
                        <button type="button" className="btn btn-outline-primary w-100 mt-2">
                            <i className="fa-brands fa-google me-3"></i>
                            <span className='fc-black'>Sign up with Google</span>
                        </button>
                        <button type="button" className="btn btn-outline-none w-100 mt-2">
                            <span className='fc-black fw-bolder'>Forgot Password?</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom p-2 rounded-top" tabIndex="-1" id="offcanvasBottom2" aria-labelledby="offcanvasBottomLabel" style={{ height: '50%' }}>
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title" id="offcanvasBottomLabel">Create Account</h4>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='d-flex'>
                        <input type="text" placeholder="First Name" className='p-2 w-50' id='firstNameInput1' name='firstName' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                        <input type="text" placeholder="Last Name" className='p-2 w-50' id='lastNameInput1' name='lastName' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                    </div>
                    <input type="email" placeholder="email" className='w-100 p-2' id='emailInput3' name='email' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                    <input type="password" placeholder="Password" className='w-100 p-2' id='passwordInput4' name='password' required style={{ backgroundColor: '#F7F8FA', border: '1px solid #D9D9DB' }} />
                    <div className='d-flex justify-content-around'>
                        <button className="btn btn-primary m-3 ms-0 w-50 rounded-pill" onClick={onSignInClick}>Create Account</button>
                        {/* Link to the first off-canvas */}
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            or, Sign In
                        </button>
                    </div>
                    <div>
                        {/* Social buttons */}
                        <button type="button" className="btn btn-outline-primary w-100 ">
                            <i className="fa-brands fa-facebook me-3"></i>
                            <span className='fc-black'>Sign up with Facebook</span>
                        </button>
                        <button type="button" className="btn btn-outline-primary w-100 mt-2">
                            <i className="fa-brands fa-google me-3"></i>
                            <span className='fc-black'>Sign up with Google</span>
                        </button>
                        <span className='fc-black fw-lighter mt-3'>By signing up, you agree to our Terms & conditions, Privacy policy</span>
                    </div>
                </div>
            </div>



        </>
    );
}

export default SignIn;