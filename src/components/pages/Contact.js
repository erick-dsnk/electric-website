import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <div className="contactTitle">
                <h3>
                    Have thoughts about features you would want to see coming to Electric?
                    <br />
                    <br />
                    Have you found any bugs or problems with Electric?
                    <br />
                    <br />
                    Want to contribute to the development of Electric?
                </h3>
            </div>

            <span>
                Feel free to contact us by sending us an e-mail at <code></code> or <code>erick.8bld@gmail.com</code>
                Otherwise, you can visit the <a href="https://github.com/XtremeDevX/Electric-Windows/issues">Issues</a> section in our GitHub repository!
            </span>
        </div>
    )
}

export default Contact;