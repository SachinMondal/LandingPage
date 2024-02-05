import React from 'react';
import card1 from '../../assets/img/card1.png';
import Profile from '../../assets/img/profile.png';

const Card = () => {
    return (
        <div className="card mb-4">
            <img src={card1} className="card-img-top" alt="Card" />
            <div className="card-body">
                <h5 className="card-text d-flex justify-content-start">
                    <i className="fa-solid fa-user-pen"></i>
                    <span>Article</span>
                </h5>
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start">
                        <h3 className="card-text d-flex justify-content-start">
                            <span>What if famous brands had regular fonts? Meet RegulaBrands!</span>
                        </h3>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary bg-white" style={{ color: 'black', border: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b>...</b>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <p className="card-text mt-3">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
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
}

export default Card;
