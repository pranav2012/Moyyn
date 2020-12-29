import React from 'react';
import Company from '../Company/Company';

export default function Companylist({companypendinglist}) {
    return (
        <div>
            {
                 companypendinglist.length > 0?companypendinglist.filter((cl)=>cl.pending===true).map((companypending,id)=>{
                   return <Company companypendinglist={companypending} key={id}/>
                })
                :
                <div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, company's were found!</p></div>
            }
        </div>
    )
}
