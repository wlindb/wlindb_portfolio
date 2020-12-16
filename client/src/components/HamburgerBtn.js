import React from 'react';


const HamburgerBTN = props => {
    return (
        <button 
            className="hamburger-btn"
            onClick={props.onClick}
            >
            <svg 
                width="24"
                height="17"
                viewBox="0 0 24 17" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-label="" class="svg-replaced" 
                shape-rendering="geometricPrecision">
                <path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" 
                    fill-rule="evenodd"/>
            </svg>
        </button>
    )
}



export default HamburgerBTN;
