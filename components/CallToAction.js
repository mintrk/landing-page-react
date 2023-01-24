import './CallToAction.css';
import React from 'react';
import { FiCode } from 'react-icons/fi';

function CallToAction() {
    return (
        <div className='cta-bg'>
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode/>
                    <h2>We're react dev team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cumque consequatur harum voluptatem! Quis labore sunt ratione quo doloribus vitae. Quasi tempore maxime, aliquam adipisci praesentium iste repellat saepe?</p>
                    <a href="#" className='cta-btn'>get to know us</a>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;
