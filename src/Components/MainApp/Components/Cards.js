import React from 'react';
import Avatar from 'react-avatar';
import 'tachyons';

const Cards = ({ name, email, city }) => {
    return (
        <div className='tc bg-white grow br3 dib pa3 ma2'>
            <Avatar name={name} size="100" round={true} />
            <div>
                <h2 className='f6 georgia i'>{name}</h2>
            </div>
            <div>
                <p className='i blue f6'>{email}</p>
            </div>
            <div>
                <p className='f6 i'>{city}</p>
            </div>
        </div>
    );
}
export default Cards;
