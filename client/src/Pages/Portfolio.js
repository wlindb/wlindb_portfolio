import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import armadaMatching from '../assets/img/armada-matching-16-9_small.png';
import cardsAgainstHumanity from '../assets/img/cards-against-humanity-16-9_small.png';
import armadaFAQ from '../assets/img/armada-faq-16-9_small.png';


const Portfolio = () => {

    const projects = [
        {title: 'Cards Against Humanity', year: 2020, description: 'The card game Cards Against Humanity implemented as a web app together with Kalle Pettersson. Backend built in express.js, sqlite3 and sequalize. Frontend built in React.js with real time game play, communicating via socket.io websockets.', visitLink: 'https://github.com/wlindb/Cards-Against-Humanity', imgSrc: cardsAgainstHumanity, videoID: 'M8BRZYTLkQ0'},
        {title: 'Armada Matching page', year: 2019, description: 'The the front-end part of matching studendts with companies for THS Armada annual carrer fair. The carrer fair is attended by about 174 companies and 12000 students. The matching page was implemented to help students find companies based on what values, industries, competencies, type of employment and locations the student was interested in. Implemented in React.js fetching from an endpoint built by a colleague.', visitLink: 'https://armada.nu/matching', imgSrc: armadaMatching, videoID: 'oOoxpTe0Kss'},
        {title: 'Armada FAQ page', year: 2019, description: 'Frequently asked questions page for THS Armada annual carrer fair. Implemented in React.js', visitLink: 'https://armada.nu/faq', imgSrc: armadaFAQ, videoID: 'd1t3QnL8mzs'},
    ];

    return (
        <div className="portfolio-container">
          {projects.map(project => {
            return (
            <div className="portfolio-list-item">
              <PortfolioItem
                title={project.title}
                year={project.year}
                description={project.description}
                visitLink={project.visitLink}
                imgSrc={project.imgSrc}
                videoID={project.videoID}
              />
              <hr className="item-bottom"/>
              </div>
            )
          })}
        </div>
    );
}

export default Portfolio;