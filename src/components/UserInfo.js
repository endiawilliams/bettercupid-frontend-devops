import React from 'react';

const UserInfo = () => {
    return (
        <div className="card flex-row flex-wrap user-info-card">
            <div className="card-header border-0">
                <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='100px' width='100px' alt='user icon' />
            </div>
            <div className="card-block px-2">
                <h4 className="card-title">Display Name</h4>
                <p className="card-text">Age, Location</p>
                <a href="#" className="btn btn-primary">Like</a>
                <a href="#" className="btn btn-primary">Message</a>
            </div>
        </div>
    )
}

export default UserInfo;