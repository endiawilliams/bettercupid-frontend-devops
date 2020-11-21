import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to={'/'}>BetterCupid</Link>
      </div>
      <div>
        <Link to={'/about'}>About</Link>
        <Link to={'/browse'}>Browse</Link>
      </div>
      <div className="links">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/matches'}>Matches</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
