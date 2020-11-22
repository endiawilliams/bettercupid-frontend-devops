import React from 'react';
import Profile from '../pages/Profile'

const UserInfo = (props) => {
    return (
        <div className="card flex-row flex-wrap user-info">
            <div className="card-header border-0">
                <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='180px' width='180px' alt='user icon' />
            </div>
            <div className="card-block info-card-text">
            {/* THIS IS HOW WE PASS PROPS */}
                <h4 className="card-title">{props.displayName}</h4>
                <div className="card-text">
                    <p>{props.age}</p>
                    <p>{props.city},{props.state}</p>
                    
                </div>
                <a href="#" className="info-card-button">
                    <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg' height='20px' width='20px' alt='heart' />
                </a>
                <a href="#" className="info-card-button">
                    <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg' height='20px' width='20px' alt='message' />
                </a>
            </div>
        </div>
    )
}

export default UserInfo;