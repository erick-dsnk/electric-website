import React from 'react';
import './Home.css';
import Card from '../Card';

function Home() {
    return (
        <div className="Home">
            <div className="section" id="start">
                <div className="inner">
                    <span className="sectionTitle">Welcome to Electric!</span>

                    <p className="desc">
                        Electric isn't like your average package manager. Using innovative concepts, Electric is the only package manager you will ever need, compatible with Windows, MacOS and Linux!
                    </p>
                </div>

                <img
                    src="http://127.0.0.1:5000/images/1.gif?secret=dsnkecelmaitarecadeobicei"
                    id="gif1"
                ></img>
            </div>

            <div className="section">
                <div className="inner">
                    <span className="sectionTitle">
                        Why us?
                    </span>
                    <p className="desc">
                        something
                    </p>
                    
                    <Card name="idk" description="dade" />
                </div>
            </div>
        </div>
    )
}

export default Home;