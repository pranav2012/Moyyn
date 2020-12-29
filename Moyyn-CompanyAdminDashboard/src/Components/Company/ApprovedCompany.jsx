import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function ApprovedCompany({approvedclientlist}) {

    let history = useHistory();

    return (
        <div className='flex justify-center ma4-l ma4-m ma1 mt4'>
            <div style={{borderLeft:"2px solid #265cff"}} className='c-shadow br2 bg-white w-80-l w-80-m w-90 ch-2 ch-2-mo'>
                <div className='flex justify-between items-center pa3 h-100'>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 f3-l f3-m f4'>{approvedclientlist.companyname}</p>
                        <p className='ma0 gray f7-l f7-m f9-mo'>{approvedclientlist.email}</p>
                        <p className='ma0 gray f7-l f7-m f9-mo'>{approvedclientlist.phone}</p>
                    </div>
                    <div className='flex flex-column items-center items-start-l items-start-m justify-between h-75 flex-1'>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Jobs Posted: {approvedclientlist.jobposted}</p>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Shortlisted: {approvedclientlist.shortlisted}</p>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Hired: {approvedclientlist.hired}</p>
                    </div>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 tr gray f8-l f8-m f9-mo'><span className='hide-mo'>Registered on: </span>7th Nov, 2020</p>
                        <div onClick={()=>history.push('/Jobs')} className='ac-btn c-shadow w-70 ml-auto'><Button style={{ borderColor: "#265cff", color: "#265cff" }} className='w-100' variant="outlined"><span className='hide-mo'>View Details</span></Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
