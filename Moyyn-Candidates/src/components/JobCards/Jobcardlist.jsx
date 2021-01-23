import React from 'react'
import JobCard from './Jobcard'

function Jobcardlist({jobs,setdesc,form,setform,client}) {
    
    return (
        <div className='jobs w-100 flex center flex-column ma-2'>
            {
                jobs === undefined || jobs.length<=0 ?<div style={{height:"50vh"}} className='flex justify-center items-center'><p className='ma0 f6-l f6-m f7 gray tc'>No, Job matched yet please be patient!</p></div>:jobs.map((jobdata,id) =><JobCard job={jobdata} setdesc={setdesc} form={form} setform={setform} client={client} k={id} key={id}/>)
            }
        </div>
    )
}

export default Jobcardlist
