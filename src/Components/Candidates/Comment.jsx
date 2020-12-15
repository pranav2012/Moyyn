import React from 'react';
import 'tachyons';

function Comment({name,msg}) {
    return (
        <div className='flex mv2 w-90 center c-shadow ma1 pa3 br2'>
            <p style={{color:"#265cff"}} className='ma0 '>{name + ":"}</p>
            <p className='flex-1 ml2 ma0 gray '>{msg}</p>
        </div>
    )
}

export default Comment;
