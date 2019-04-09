import React from 'react';

const Quote = ({simpsonQuote}) => {
    return (
        <div>
            <img src={simpsonQuote.image} alt="Photo"/>
            <p>{simpsonQuote.quote}</p>
            <p>{simpsonQuote.character}</p>
        </div>
    )
}

export default Quote;