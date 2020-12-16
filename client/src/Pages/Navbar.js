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
                    <svg 
                        version="1.1" 
                        id="Layer_1_1_" 
                        x="0px" y="0px" 
                        viewBox="0 0 16 16" 
                        
                        // style="enable-background:new 0 0 16 16;" 
                        >
                        <polygon points="0,5 8,9 15,5.5 15,14 16,14 16,5 8,1 "/>
                        <polygon points="3,7.059 3,11.5 8,14 13,11.5 13,7.059 8,9.559 "/>
                        
                    </svg>
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
