import React from 'react'
import Profile from '../../assets/img/profile.png';

const GroupCard = () => {
    return (
        <div className='d-flex justify-content-between mt-5 w-100'>
            <div className='rounded-circle'>
                <img src={Profile} alt="" />
                <span className='ms-2'><b>Sarthak Kamra</b></span>
            </div>
            <div className='d-flex justify-content-around' style={{ width: '20%' }}>
                <button type="button" className="btn btn-secondary rounded-pill" style={{ height: '2.5rem' }}>
                    <span>Follow</span>
                </button>
            </div>
        </div>
    )
}

export default GroupCard
