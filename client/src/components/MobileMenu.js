import React from 'react'
import { NavLink } from 'react-router-dom';
const MobileMenu = (props) => {
    return (
        <nav className={`c-nav_mobile ${props.expanded ? 'is-open' : 'is-hidden'}`}>
            <div className="c-nav_toolbar">
                <a href="/" className="c-hplogo">
                    <span className="c-hplogo-white" >{'</wl>'}</span>
                </a>
                <button className="hamburger-btn-close" onClick={props.onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-255 347 100 100" 
                        width="18" 
                        aria-label="Close Navigation"
                        class="svg-replaced" 
                        shape-rendering="geometricPrecision">
                            <path
                            d="M-160.4 434.2l-37.2-37.2 37.1-37.1-7-7-37.1 37.1-37.1-37.1-7 7 37.1 37.1-37.2 37.2 7.1 7 37.1-37.2 37.2 37.2">
                            </path>
                    </svg>
                </button>
            </div>
            <div className="c-nav_scroller">
                <nav className="c-nav_list is-mobile">
                    <ul>
                        {props.routes.map((name, i) => {
                            return <li key={`${i}`} className="c-nav--primary-li">
                                        <NavLink 
                                            activeClassName='active'
                                            id="link-item"
                                            to={`${name.toLowerCase()}`}
                                            onClick={props.onClick}>
                                                {name.toUpperCase()}
                                        </NavLink>
                                    </li>
                        })}
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default MobileMenu
