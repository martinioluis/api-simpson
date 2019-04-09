import React from 'react';

const Button = ({selectQuote}) => {
    return (
        <div>
            <button onClick= {selectQuote}>Change Quote</button>
        </div>
    );
}

export default Button;