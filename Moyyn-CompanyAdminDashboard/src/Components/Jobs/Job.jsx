import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/jobs.scss';

export default function Job({job,setcandidatedata}) {

    let history = useHistory();

    return (
        <div className='mt3 card ma1 w-75-l w-75-m w-90 center bg-white ph3 br3 flex items-center'> 
            <div className="w-100 flex justify-between items-center">
                <div className='flex-2 flex w-30-l w-30-m w-50 self-start flex-column'>
                    <p className='ma0 gray f8 f9-m f9-mo'>{job["Career Level"]}</p>
                    <p className='ma0 f4-l f5-m mt1 f7_2-mo'>{job.job_title}</p>
                    <p className='ma0 gray f6-l mt1 f8-m f8-mo'>{job.city}, {job.country}</p>
                </div>
                <div className='flex-1 flex flex-column self-start items-center '>
                    <p className='ma0 dn db-m db-l gray f8 f10-m f10-mo'>No. of Candidates </p>
                    <p className='ma0 gray f8 f9-m mt3 f9-mo'>0</p>
                </div>
                <div className='flex-2 h-100 flex flex-column w-25-l w-40-m w-30 self-start'>
                    <p className='ma0 gray f8 f9-m f10-mo mb3 self-end'>Created 7 hours ago</p>
                    <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                        <button onClick={() => {history.push("/Candidates"); setcandidatedata(job.candidatedata)}} style={{background:"#265cff"}} className="c-shadow ml2-l ml2-m ml3 pointer f9-mo f8-m f7-l mr2-l mr2-m mr0 w-40-l w-50-m w-90 h2-l h2-m h7-mo bn link dim br2 ph3 pv2 dib white">Candidates</button>
                        <button style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow f9-mo f8-m f7-l w-40-l w-50-m w-90 h2-l h2-m h7-mo mt1 mt0-l mt0-m bn link dim br2 ph3 pv2 dib">View Job</button>
                </div>
            </div>
            </div>
        </div>
    )
}
