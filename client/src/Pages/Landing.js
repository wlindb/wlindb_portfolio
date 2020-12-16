import React from 'react'
import githubLogo from '../assets/img/GitHub-Mark-Light-120px-plus.png';
// /home/wlindb/Documents/code_sunday/wlindb_portfolio/client/src/assets/img/GitHub-Mark-Light-120px-plus.png
import linkedinLogo from '../assets/img/linkedin-128.png';

const Landing = () => {
    return (
        <div className="home-container">
          <div className="intro-text">
            <h1>WILLIAM</h1>
            <h1>LINDBLOM</h1>
            <h2 className="proffession-header">WEB DEVELOPER</h2>
          </div>
          <div className="logo-container">
            <a href="https://github.com/wlindb">
              <img src={githubLogo} alt="" className="github-logo"/>
            </a>
            <a href="https://www.linkedin.com/in/william-lindblom-048ba891/">  
              <img src={linkedinLogo} alt="" className="linkedin-logo"/>
            </a>
          </div>
        </div>
    )
}

export default Landing;