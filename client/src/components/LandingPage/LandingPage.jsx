import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <div className="landing-page">
            <Link to= "/home">
                <h1>Welcome to the Ricky & Morty App</h1>
                <button className="landing-page-button">Get Started</button>
            </Link>
        </div>
    )
}