import React from 'react';
import 'tachyons';

function Comment({name,msg}) {
    return (
        <div className='flex mv2 w-90 center c-shadow ma1 pa3-l pa2-m pa2 br2'>
            <p style={{color:"#265cff"}} className='ma0 f6-l f7-m f8-mo'>{name + ":"}</p>
            <p className='flex-1 ml2 ma0 gray f6-l f7-m f8-mo'>{msg}</p>
        </div>
    )
}

export default Comment;
