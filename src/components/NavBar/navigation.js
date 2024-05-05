import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navigation() {

    return (
        <>
            <div className='nav-container'>
                <div className='siteNavigation'>
                    <div className="logo"><a href="#intro">RITU RAWAT</a></div>
                    <div className='mainNav'>
                        <nav className='navList'>
                            <Link to="/">Home</Link>

                            <HashLink
                                smooth to="/#about"
                            >About</HashLink>

                            <HashLink smooth to="/#projects"
                            >Portfolio</HashLink>

                            <Link className="contactBtn" to="/contact">Contact</Link>

                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;
