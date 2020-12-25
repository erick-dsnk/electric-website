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
                    alt="Demonstration of installing 7-Zip with electric"
                ></img>
            </div>

            <div className="section">
                <div className="inner">
                    <span className="sectionTitle">
                        Why us?
                    </span>

                    <div id="cardDiv">
                        <Card
                            name="Speed and Reliability"
                            description="Our Python codebase makes Electric extremely reliable, completely memory safe and anywhere from 200% to 1500% faster than other package managers!"
                        />
                        <Card
                            name="Easy to use"
                            description="Electric does all the heavy lifting of downloading applications and packages, installing them and configuring them for you! Electric creates shims that call the installed package and saves them in the bin folder, to save you from cluttering up your PATH environment variable!"
                        />
                        <Card
                            name="Feature packed"
                            description="Electric combines installing thousands of apps and packages, caching install information to limit the use of our API, installing Python, Node and Rust packages, parallel downloading/installing and even creating your own configuration files all in one awesome package manager!"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;