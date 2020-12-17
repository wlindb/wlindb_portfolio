import React, { useState, useEffect } from 'react';
import NavbarDesktop from '../components/NavbarDesktop';

import useWindowSize from '../Utils/useWindowSize';
import HamburgerBTN from '../components/HamburgerBtn';
import MobileMenu from '../components/MobileMenu';

const Navbar = () => {
    const [routes] = useState(['Home', 'About', 'Portfolio', 'Contact']);
    const windowSize = useWindowSize();
    const [expanded, setExpanded] = useState(false);
    const [onMobile, setOnMobile] = useState(windowSize.width < 850);

    useEffect(() => {
        setOnMobile(windowSize.width < 850)
    }, [windowSize])
    
    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <nav className="c-nav c-nav--primary c-nav--alternate">
            <div className="c-nav__row c-container">
                <a href="/" className="c-hplogo">
                    <span className="c-hplogo-white" >{'</wl>'}</span>
                </a>
                {!onMobile ? <NavbarDesktop routes={routes}/>
                : <HamburgerBTN onClick={toggleExpand} />}
            </div>
            {onMobile && <MobileMenu expanded={expanded} onClick={toggleExpand} routes={routes}/>}
        </nav>
    )
};

export default Navbar;
