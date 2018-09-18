import React from 'react';
import './characterCard.css';

const characterCard = props => (
    <div className='card'>
    <div className='img-container'>
    <a onClick={() => props.selectCharacter(props.mouthers)}
    className={props.currentScore === 0 ? 'style_prevu_kit style_prevu_kit_ex' : 'style_prevu_kit'}>
    <img alt={props.mouthers} src={props.image} />
    </a>
    </div>
    </div>
);

export default characterCard;