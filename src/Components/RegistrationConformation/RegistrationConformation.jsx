import React from 'react';
import 'tachyons';
import '../../styles/RegistrationConformation.scss';

function RegistrationConformation({company='Moyyn'}){
    return( 
        <div className='dashboard items-center flex flex-column w-60-l w-80-m w-90 tc justify-center'>
            <h4 className='dasheading mb5-l mb5-m mb4 f2-l f2-m f5'>Welcome to {company} Dashboard!</h4>
            <div className='center dib mb5-l mb5-m mb4 f7 w-80 tl pl3 shadow-2 dashabt'><p>Thank you for signing up on Moyyn. Up next, our Business Development Lead will get in touch with you via phone to understand your requirements, share the contract, and provide access to your Moyyn dashboard.</p></div>
            <a className='mt3 fw6 f7 f6-l w-20-l w-40-m w-50 bn link dim br2 center dashbtn pv3-m ph4-m ph3 pv2 dib white' href="https://moyyn.com/">Moyyn Homepage</a>
        </div>
    ); 
}

export default RegistrationConformation;
