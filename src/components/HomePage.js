import React from 'react';
import Banner from '../assets/img/banner.png';
import Card from './HomePage/Card';
import '../assets/css/HomePage.css';
import CardClicked from './HomePage/CardClicked';
import CardAccept from './HomePage/CardAccept';
import Profile from '../assets/img/profile.png';
import GroupCard from './HomePage/GroupCard';


const HomePage = ({ loggedIn }) => {
    const bannerStyle = {
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',

    };
    return (
        <div className='position-relative'>
            <div className="grid justify-content-between col-12 w-100 position-relative mx-auto" style={{ height: '20rem', ...bannerStyle }}>
                <div className='row justify-content-between d-md-none mt-1'>
                    <div className="col-auto">
                        <button className="btn" style={{ border: 'none', color: 'white' }}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </div>
                    {loggedIn ? (
                        <div className="col-auto">
                            <button className="btn btn-outline-light p-1">Leave Group</button>
                        </div>
                    ) : (
                        <div className="col-auto">
                            <button className="btn btn-outline-light p-1">Join Group</button>
                        </div>
                    )}

                </div>
                <div className='position-absolute bottom-0 start-0 mx-auto' style={{ color: 'white' }}>
                    <h2>Computer Engineering</h2>
                    <h6>142,765 Computer Engineers follow this</h6>
                </div>

            </div>
            <div className="d-flex justify-content-center align-items-center m-3">
                <div className="d-flex justify-content-between" style={{ width: '100%', maxWidth: '50%' }}>
                    <ul className="nav nav-tabs navbar-expand-lg d-none d-lg-flex" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Posts(32)</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Article</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Event</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Education</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Job</button>
                        </li>
                    </ul>
                    <div className='d-lg-none'>
                        <h3 className='fw-bolder'>All Posts(34)</h3>
                    </div>
                    <div className="dropdown d-lg-none">
                        <button className="btn btn-secondary me-3 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Article </a></li>
                            <li><a className="dropdown-item" href="/">Event</a></li>
                            <li><a className="dropdown-item" href="/">Education </a></li>
                            <li><a className="dropdown-item" href="/">Job </a></li>
                        </ul>
                    </div>

                </div>
                <div className="d-none d-md-flex">
                    <div className="btn-group rounded me-3" style={{ backgroundColor: 'lightgray' }}>
                        <button type="button" className="btn">Write a Post</button>
                        <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/">Separated link</a></li>
                        </ul>
                    </div>

                    {loggedIn && (
                        <button type="button" className="rounded d-none d-lg-block " style={{ backgroundColor: 'lightgray', border: 'none' }}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Leave Group
                        </button>
                    )}

                    {loggedIn ? (
                        <button type="button" className="rounded d-md-none" style={{ backgroundColor: 'lightgray', border: 'none' }}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Leave Group
                        </button>
                    ) : (
                        <button type="button" className="btn btn-primary">
                            <i className="fa-solid fa-user-group me-2"></i>
                            Join Group
                        </button>
                    )}
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
                <div className="grid gap-2 col-12 col-md-6 mx-auto text-center">
                    {[1, 1].map(() => (
                        <Card key={Math.random()} />
                    ))}
                    <CardClicked />
                    <CardAccept />
                </div>

                <div className="ms-5 d-none d-lg-block grid gap-2 col-4 mx-auto text-center" style={{ height: '10rem', width: '20rem' }}>
                    <div className="d-flex justify-content-around">
                        <div>
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <span>Noida, India</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-pen"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="text-muted">
                        <i className="fa-solid fa-circle-exclamation me-2"></i>
                        <span>
                            Your location will help us serve better and extend a personalised experience.
                        </span>
                    </div>
                    {loggedIn ? (
                        <div className="mt-4 w-100">
                            <div className="d-flex ">
                                <i className="fa-solid fa-thumbs-up me-2"></i>
                                <h6>RECOMMENDED GROUPS</h6>
                            </div>
                            <div className='d-flex mt-5'>
                                <div className='d-flex justify-content-between w-100'>
                                    <div className='rounded-circle'>
                                        <img src={Profile} alt="" />
                                        <span className='ms-2'><b>Sarthak Kamra</b></span>
                                    </div>
                                    <div className='d-flex justify-content-around' style={{ width: '20%' }}>
                                        <button type="button" className="btn btn-secondary rounded-pill bg-dark" style={{ height: '2.5rem' }}>
                                            <span>Followed</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {[1, 1, 1, 1].map(() => {
                                return <GroupCard key={Math.random()} />;
                            })}
                            <div className="dropdown flex-end">
                                <button className="btn btn-secondary bg-white fw-light" style={{ color: 'blue', border: 'none' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>See More...</b>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>




        </div>
    )
}

export default HomePage;
