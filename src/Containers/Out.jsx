import React from 'react';
import LoginForm from '../Components/Authantication/LoginForm';

function Out({loaduser,signclick,backend_url}){

     return(
            <div className='outer'>
                <LoginForm loaduser={loaduser} signclick={signclick} backend_url={backend_url} />
            </div>
        );
}

export default Out;