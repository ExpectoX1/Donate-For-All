
import React from 'react'
import "./EventCard.css"
function EventCard({ image1,name , desc }) {
    return (
        <div className='card__container'>
            <div className='card__image__container'>
                <image
                    src={image1}
                    alt={name}
                    layout='fill'
                    className='card__image'
                />
            </div>
            <div className='card__body'>
                <p className='card__event__name'>{name}</p>
                <p className='card__event__desc'>{desc}</p>
            </div>
        </div>
    );
}

export default EventCard;
