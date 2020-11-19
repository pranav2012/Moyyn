import React from 'react';
import 'tachyons';
import '../styles/dashboard.scss';

function Dashboard({company='Moyyn'}){
    return( 
        <div className='dashboard items-center flex flex-column w-60-l w-80-m w-90 tc justify-center'>
            <h4 className='dasheading mb5-l mb5-m mb4 f2-l f2-m f5'>Welcome to {company} Dashboard!</h4>
            <div className='center mb5-l mb5-m mb4 f7 f5-l f5-m w-80 tl pl3 shadow-2 h-50'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id doloremque eos nisi quisquam tempore inventore tenetur nostrum rerum fugiat beatae libero molestias optio, minus alias? Consequuntur doloribus placeat consequatur quo?</p></div>
            <a className='mt3 fw6 f7 f6-l w-20-l w-40-m w-50 bn link dim br2 center dashbtn pv3-m ph4-m ph3 pv2 dib white' href="htps://moyyn.com/">Go to Moyyn</a>
        </div>
    ); 
}

export default Dashboard;
