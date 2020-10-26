import React from 'react';
import Nav from '../Nav';
import 'tachyons';

const Head = ({logout}) =>{
    return(
    <>
        <Nav logout={logout}/>
        <h1 className='f2 times'>User's List</h1>
    </>
    );
}

export default Head;