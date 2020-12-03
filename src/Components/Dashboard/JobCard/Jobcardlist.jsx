import React from 'react'
import JobCard from './Jobcard'

function Jobcardlist({jobs}) {
    return (
        <div className='w-100 flex center flex-column ma-2'>
            {
                jobs.length<=0?<div style={{height:"70vh"}} className='flex justify-center items-center'><h4 className='ma0 f3-l f4-m f6 gray tc'>No, Job posted yet please post a job</h4></div>:jobs.map((jobdata,id) => <JobCard key={id} job={jobdata} />)
            }
        </div>
    )
}

export default Jobcardlist
