import React from 'react';
import Profile from '../../assets/img/profile.png';

const CardAccept = () => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-text d-flex justify-content-start">
                    <i className="fa-solid fa-suitcase"></i>
                    <span>Job</span>
                </h5>
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="card-text">
                            <span>Software Developer</span>
                        </h3>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary bg-white"
                                style={{ color: 'black', border: 'none' }}
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <b>...</b>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <i className="fa-solid fa-suitcase me-2"></i>
                        <span>Innovaccer Analytics Private Ltd.</span>
                    </div>
                    <div className="col-md-6">
                        <i className="fa-solid fa-location-dot me-2"></i>
                        <span>Ahmedabad, India</span>
                    </div>
                </div>
                <div className="d-grid gap-2 m-3">
                    <button className="btn btn-transparent border border-1 text-success bold" type="button">
                        Apply on Template
                    </button>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <div className="rounded-circle ">
                        <img src={Profile} alt="Profile" />
                        <span className="ms-2"><b>Sarthak Kamra</b></span>
                    </div>
                    <div className="d-flex justify-content-around" >
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
};

export default CardAccept;
