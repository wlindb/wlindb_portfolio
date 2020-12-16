import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarDesktop = props => {
    return (
        <nav className="c-nav_list">
            <ul className="c-nav-ul">
                {props.routes.map((name, i) => {
                    return <li key={`${i}`} className="c-nav--primary-li">
                        <NavLink activeClassName='active' id="link-item" to={`${name.toLowerCase()}`}>{name.toUpperCase()}</NavLink>
                        </li>
                })}
            </ul> 
        </nav>
    )
}



export default NavbarDesktop;
