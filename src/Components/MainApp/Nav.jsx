import React from 'react';
import 'tachyons';

function Nav({logout}) {
    return(
        <>
            <nav>
                <ul className='nav'>
                    <img src="https://moyyn.com/wp-content/uploads/2020/03/cropped-Untitled-design-6-1.png" alt="logo"></img>
                    <li className='navp navpl' onClick={logout}>Log-Out</li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;