import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';  

const PortfolioItem = (props) => {

    const [isOpen, openModal] = useState(false);

    return (
        <div className="portfolioitem-container">
            <div className="row">
                <div className="col">
                    <img src={props.imgSrc} className="portfolio-item-img" alt=""/>
                    <hr className='laptop-stand'/>
                    <hr className='laptop-bottom'/>
                </div>
                <div className="col">
                    <h3 className="portfolio-item-header">{props.title}<span className="badge">{props.year}</span>
                    </h3>
                    <p className="showcase__description">{props.description}</p>
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId={props.videoID} onClose={() => openModal(false)} />
                    <a className="btn btn-preview" onClick={() => openModal(true)}>Preview</a>
                    <a className="btn btn-visit-site" href={props.visitLink}> Visit site</a>
                </div>
            </div>
        </div> 
    );
}

export default PortfolioItem;