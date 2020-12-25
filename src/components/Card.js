import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <div className="cardHeader">
                <h3>{props.name}</h3>
            </div>

            <div class="cardContainer">
                {props.description}
            </div>
        </div>
    )
}

export default Card;