import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ThemeContext } from "../../App.js";

const NavLinks = ({ click, handleClickMobileNav }) => {
    const { isMobile } = useContext(ThemeContext);

    return (
        <ul>
            {isMobile ?
                <>
                    <Link click={click} onClick={() => handleClickMobileNav()} to="/">Home</Link>

                    <HashLink click={click} onClick={() => handleClickMobileNav(!click)}
                        smooth to="/#about"
                    >About</HashLink>

                    <HashLink click={click} onClick={() => handleClickMobileNav(!click)} smooth to="/#projects"
                    >Portfolio</HashLink>

                    <Link click={click} onClick={() => handleClickMobileNav(!click)} to="/contact">Contact</Link>
                </>
                :
                <>
                    <Link to="/">Home</Link>

                    <HashLink 
                        smooth to="/#about"
                    >About</HashLink>

                    <HashLink smooth to="/#projects"
                    >Portfolio</HashLink>

                    <Link to="/contact">Contact</Link>
                </>
            }
        </ul>
    )
}

export default NavLinks;