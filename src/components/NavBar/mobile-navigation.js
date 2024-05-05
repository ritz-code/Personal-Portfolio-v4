import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "../../styles/scss/_mobile-navigation.scss";

function MobileNavigation() {

    const [click, setClick] = useState(false);

    const handleClickMobileNav = () => {
        setClick(!click);
    };

    return (
        <>
            <div className='mobileNavContainer'>
                <div className='mobileNavWrapper'>
                    <div className="logo"><a href="#intro">RITU RAWAT</a></div>
                    {click ?
                        <div className='navWrapper'>
                            <ul>
                                <Link onClick={handleClickMobileNav} to="/">Home</Link>

                                <HashLink onClick={handleClickMobileNav} 
                                    smooth to="/#about"
                                >About</HashLink>

                                <HashLink onClick={handleClickMobileNav} smooth to="/#projects"
                                >Portfolio</HashLink>

                                <Link className="mobileContactBtn" onClick={handleClickMobileNav} to="/contact">Contact</Link>
                            </ul>
                        </div> :
                        <></>
                    }
                    <div className='hamburger' click={click} onClick={handleClickMobileNav}>
                        {click ? <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"></path>
                            </svg>
                        </> :
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                >
                                    <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
                                    <path
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        d="M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32"
                                    ></path>
                                </svg>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavigation;