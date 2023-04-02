import React from 'react';

function Header () {
    return (
        <nav className='green darken-1'>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">React Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/aleksskay2/react-shop" target='_blank'>Repo</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;