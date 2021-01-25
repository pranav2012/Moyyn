import React from 'react'
import JobCard from './Jobcard'

function Jobcardlist({jobs,setcandidatedata,setjobid}) {
    return (
        <div className='w-100 flex center flex-column ma-2'>
            {
                jobs.length<=0 || jobs[0] === undefined ?<div style={{height:"70vh"}} className='flex justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, Job posted yet please post a job</p></div>:jobs.map((jobdata,id) =><JobCard job={jobdata} setjobid={setjobid} setcandidatedata={setcandidatedata} key={id}/>)
            }
        </div>
    )
}

export default Jobcardlist
