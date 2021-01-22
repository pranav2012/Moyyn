import React, { useState } from 'react'
import Jobs from '../Company/Companylist';
import ApprovedJobs from '../Company/Approvedlist';
import '../../styles/Dashboard.scss';
import {dummyjobposts as jobdata} from '../../util/data/dummy'; 


function Dashboard({setjobdata}) {

    const [pps, setpps] = useState(true);
    const [free, setfree] = useState(true);

    const [companylist] = useState([{
        pending:true,
        free:false,
        approved:false,
        pps:false,
        subscription:false,
        companyname:"Moyyn",
        name:"Pranav Agarwal",
        email:"moyyn@gmail.com",
        website:"https://www.moyyn.com",
        phone:"+91-8976987231",
        jobposted:0,
        hired:0,
        shortlisted:0,
        jobdata:jobdata,
    },
    {
        pending:true,
        free:false,
        approved:false,
        pps:false,
        subscription:false,
        companyname:"Moyyn",
        name:"Pranav Agarwal",
        email:"moyyn@gmail.com",
        website:"https://www.moyyn.com",
        phone:"+91-8976987231",
        jobposted:0,
        hired:0,
        shortlisted:0,
        jobdata:jobdata,
    },
    {
        pending:false,
        free:true,
        approved:true,
        pps:false,
        subscription:false,
        companyname:"Moyyn-Free",
        name:"Pranav Agarwal",
        email:"moyyn@gmail.com",
        website:"https://www.moyyn.com",
        phone:"+91-8976987231",
        jobposted:0,
        hired:0,
        shortlisted:0,
        jobdata:jobdata,
    },
    {
        pending:false,
        free:false,
        approved:true,
        pps:true,
        subscription:false,
        companyname:"Moyyn- pps",
        name:"Pranav Agarwal",
        email:"moyyn@gmail.com",
        website:"https://www.moyyn.com",
        phone:"+91-8976987231",
        jobposted:0,
        hired:0,
        shortlisted:0,
        jobdata:jobdata,
    },
    {
        pending:false,
        free:false,
        approved:true,
        pps:false,
        subscription:true,
        companyname:"Moyyn - sub",
        name:"Pranav Agarwal",
        email:"moyyn@gmail.com",
        website:"https://www.moyyn.com",
        phone:"+91-8976987231",
        jobposted:0,
        hired:0,
        shortlisted:0,
        jobdata:jobdata,
    }]); 

    return (
        <div className=''>
           <div className='ma4-l ma4-m ma0 mt4'>
                <p className='gray tl f5-l f5-m f6 center w-80-l w-80-m w-90 ma0'>Pending Approvals</p>
            </div>
           <Jobs companypendinglist={companylist}/>
           <div className='ma4-l ma4-m ma0 mt4'>
                <p className='gray tl f5-l f5-m f6 ma0 center w-80-l w-80-m w-90'>Approved Clients</p>
            </div>
            <div className='ma4-l ma4-m ma0 mt4'>
                <div style={{borderColor:"rgb(249, 246, 246)"}}className='flex w-80-l w-80-m w-90 center'>
                    <div onClick={()=>setfree(true)} className='flex-1'><button style={{background:"#265cff"}} className="c-shadow pointer f8-mo f7-m f6-l w-100 h2 bn link dim br1 ph3 pv2 dib white">Free</button></div>
                    <div className='w1'></div>
                    <div onClick={()=>{setpps(true);setfree(false)}} className='flex-1'><button style={{background:"#265cff"}} className="c-shadow pointer f8-mo f7-m f6-l w-100 h2 bn link dim br1 ph3 pv2 dib white">Pay Per Hire Clients</button></div>
                    <div className='w1'></div>
                    <div onClick={()=>{setpps(false);setfree(false)}} className='flex-1'><button style={{background:"#265cff"}} className="c-shadow pointer f8-mo f7-m f6-l w-100 h2 bn link dim br1 ph3 pv2 dib white">Subscription Clients</button></div>
                </div>
            </div>
            <ApprovedJobs approvedclientlist={companylist} setjobdata={setjobdata} pps={pps} free={free}/>
        </div>
    )
}

export default Dashboard;
