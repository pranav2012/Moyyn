import React from 'react';
import JobCard from './Job';
import Company from './CompanyCard';

export default function Joblist({jobs}) {
    return (
        <div className='w-100'>
            <p className='gray tc f2-l f2-m f3 mt4 ma0 mb0'>Client Moyyn Dashboard</p>
            <Company company={{
                pending:false,
                approved:true,
                pps:true,
                subscription:false,
                companyname:"Moyyn- pps",
                name:"Pranav Agarwal",
                email:"moyyn@gmail.com",
                website:"https://www.moyyn.com",
                phone:"+91-987986543",
                jobposted:0,
                hired:0,
                shortlisted:0
            }}/>
            <div className='ma4-l ma4-m ma0 mt4'>
                <p className='gray tl f5-l f5-m f6 center w-80-l w-80-m w-90 ma0'>Jobs Posted</p>
            </div>
            <div className='flex center flex-column ma-2'>
                {
                    jobs.length<=0  ?<div style={{height:"70vh"}} className='flex justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, Job posted yet please post a job</p></div>:jobs.map((jobdata,id) =><JobCard job={jobdata} key={id}/>)
                }
            </div>
        </div>
    )
}
