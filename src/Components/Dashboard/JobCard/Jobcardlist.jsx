import React from 'react'
import JobCard from './Jobcard'

function Jobcardlist({jobs}) {
    return (
        <div className='w-100 flex center flex-column ma-2'>
            {
                jobs.map((jobdata,id) => <JobCard key={id} job={jobdata} />)
            }
        </div>
    )
}

export default Jobcardlist
