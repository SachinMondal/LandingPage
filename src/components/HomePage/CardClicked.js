import React from 'react';
import card1 from '../../assets/img/card1.png';
import Profile from '../../assets/img/profile.png';

const CardClicked = () => {
    return (
        <div className="card mb-4">
            <img src={card1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-text d-flex justify-content-start">
                    <i className="fa-solid fa-calendar-week"></i>
                    <span>Meetup</span>
                </h5>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-start'>
                        <h3 className="card-text">
                            <span>Finance & Investment Elite Social Mixer @Lujiazui</span>
                        </h3>
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary bg-white" style={{ color: 'black', border: 'none' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <b>...</b>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Edit</a></li>
                            <li><a className="dropdown-item" href="/">Report</a></li>
                            <li><a className="dropdown-item" href="/">Option 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <i className="fa-regular fa-calendar-days me-2"></i>
                        <span>Fri, 12 Oct, 2018</span>
                    </div>
                    <div className="mt-3">
                        <i className="fa-solid fa-location-dot me-2"></i>
                        <span>Ahmedabad, India</span>
                    </div>
                </div>
                <div className="d-grid gap-2 m-3">
                    <button className="btn btn-transparent border border-1 text-danger bold" type="button">Visit Website</button>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div className="rounded-circle">
                        <img src={Profile} alt="Profile" />
                        <span className="ms-2"><b>Sarthak Kamra</b></span>
                    </div>
                    <div className="d-flex justify-content-around">
                        <div className="mt-2 me-2" style={{ color: 'darkgrey' }}>
                            <i className="fa-regular fa-eye"></i>
                            <span>1.4K views</span>
                        </div>
                        <button type="button" className="btn btn-secondary rounded" style={{ height: '2.5rem' }}>
                            <i className="fa-solid fa-share-nodes"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardClicked;
