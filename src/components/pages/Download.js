import React from 'react';
import './Download.css';

function Download() {
    return (
        <div className="Download">
            <h3>
                There's 2 ways of installing Electric, one more simple than the other!
            </h3>

            <ul>
                <li>
                    <h4>Using the installer.</h4>
                    <span>
                        &nbsp;&nbsp;&nbsp;Step 1. Download the installer <a href="http://electric-package-manager.herokuapp.com/install/windows" download>here.</a>
                        <br />
                        &nbsp;&nbsp;&nbsp;Step 2. Run the installer and follow the steps.
                        <br />
                        &nbsp;&nbsp;&nbsp;Step 3. Congrats! Now you have Electric installed and you're ready to use it!
                    </span>
                </li>
                <li>
                    <h4>Installing from source code. (This method requires having Python already installed.)</h4>

                    <span>
                        &nbsp;&nbsp;&nbsp;Step 1. Go to our <a href="https://github.com/XtremeDevX/Electric-Windows">GitHub repository.</a>
                        &nbsp;&nbsp;&nbsp;Step 2. In the top right, there is a green button named "Code". When you click it you will be greeted with 2 options: downloading the source code in a ZIP or cloning it with Git.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;If you have git installed, open a terminal and type <code>git clone https://github.com/XtremeDevX/Electric-Windows</code>. After it's done type <code>cd ./Electric-Windows</code>
                        &nbsp;&nbsp;&nbsp;&nbsp;If you don't have git installed, download the archive, unzip it and then open a terminal and change directory into the folder with the source code.
                        &nbsp;&nbsp;&nbsp;Step 3. Make sure you are in the folder with the source code in the terminal, then type <code>pip install ./</code>
                        &nbsp;&nbsp;&nbsp;Step 4. You are now ready to use Electric!
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Download;