import React from 'react';
import './About.css';

function About() {
    return (
        <div className="About">
            <h1>Electric - A package manager for Windows, MacOS And Linux!</h1>

            <br />
            <br />

            <span className="descriptionEntry">
                Highly optimized for speed and usability, Electric is anywhere from 200% to 1500% faster than other market competitors for downloading Applications and Packages, and has incredible speeds and support for concurrent / parallel installing.
            </span>

            <br />

            <img
                src="http://localhost:5000/images/1.gif?secret=dsnkecelmaitarecadeobicei"
                alt="Demonstration of Installation with Electric."
                className="gif"
            />

            <br />

            <span className="descriptionEntry">
                Electric, unlike your average package manager, believes in incredible effeciency, and officially supports installing packages paralelly (not one after another). 
            </span>

            <br />

            <img
                src="http://localhost:5000/images/3.gif?secret=dsnkecelmaitarecadeobicei"
                alt="Demonstration of cleaning up cache files with electric."
                className="gif"
            />

            <br />

            <span className="descriptionEntry">
                Built for today's systems and with good support for low-end systems, Electric runs smoothly even on machines with as little as 1 GB of RAM!
            </span>

            <br />

            <img
                src="http://localhost:5000/images/2.gif?secret=dsnkecelmaitarecadeobicei"
                alt="Demonstration of Electric configuration files"
                className="gif"
            />

            <br />

            <span className="descriptionEntry">
                IMPORTANT: Since electric is in an alpha phase, it might not be completely stable yet. Feel free to open any issues or bug reports on our <a href="https://github.com/TheBossProSniper/electric-windows/issues" className="link">GitHub repository</a>.
            </span>

            <br />

            <img 
                src="http://localhost:5000/images/5.gif?secret=dsnkecelmaitarecadeobicei"
                alt="Demonstration of uninstallation using Electric."
                className="gif"
            />
        </div>
    )
}

export default About;