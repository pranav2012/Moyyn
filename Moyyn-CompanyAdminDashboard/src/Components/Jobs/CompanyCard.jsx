import React from 'react';
import '../../styles/custom.css';

export default function CompanyCard({company}) {
    return (
        <div className='flex justify-center ma4-l ma4-m ma1 mt4'>
            <div style={{borderLeft:"2px solid #265cff"}} className='c-shadow br2 bg-white w-80-l w-80-m w-90 ch-2 ch-2-mo'>
                <div className='flex justify-between items-center pa3 h-100'>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 f3-l f3-m f4'>{company.companyname}</p>
                        <p className='ma0 gray f7-l f7-m f9-mo'>{company.email}</p>
                        <p className='ma0 gray f7-l f7-m f9-mo'>{company.phone}</p>
                    </div>
                    <div className='flex flex-column items-center items-start-l items-start-m justify-between h-75 flex-1'>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Jobs Posted: {company.jobposted}</p>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Shortlisted: {company.shortlisted}</p>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Hired: {company.hired}</p>
                    </div>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 tr gray f8 f8-m f9-mo'><span className='hide-mo'>Registered on: </span>7th Nov, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
