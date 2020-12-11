import React from 'react';
import { useHistory } from 'react-router-dom';

function Jobcard({job}) {

    let history = useHistory(); 
    
    return (
        <div className="card ma1 bg-white ph3 mt3 br3 flex justify-between items-center">
            <div className='flex flex-column '>
                <p className='ma0 gray f8 f9-m f9-mo'>{job["Career Level"]}</p>
                <p className='ma0 f4-l f5-m mt1 f7_2-mo'>{job.job_title}</p>
                <p className='ma0 gray f6-l mt1 f8-m f8-mo'>{job.city}, {job.country}</p>
            </div>
            <div className='flex flex-column items-center'>
                <p className='ma0 dn db-m db-l mb2_2 gray f8 f10-m f10-mo'>No. of Candidates </p>
                <p className='ma0 gray mb3 gray f8 f9-m f9-mo'>0</p>
            </div>
            <div className='h-100 flex flex-column w-25-l w-40-m w-30'>
                <p className='ma0 mt2_2 gray f8 f9-m f10-mo mb1 mb3-m mb3-l self-end'>Created 7 hours ago</p>
                <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                    <button onClick={() => history.push("/Candidates")} style={{background:"#265cff"}} className="ml2-l ml2-m ml3 pointer fw6 f9-mo f8-m f7-l mr2-l mr2-m mr0 w-60-l w-50-m w-90 h2-l h2-m h7-mo bn link dim br2 ph3 pv2 dib white">Candidates</button>
                    <button onClick={() => history.push("/Editjob")} style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 shadow-1 fw6 f9-mo f8-m f7-l w-60-l w-50-m w-90 h2-l h2-m h7-mo mt1 mt0-l mt0-m bn link dim br2 ph3 pv2 dib">Edit Job</button>
               </div>
            </div>
        </div>
    )
}

export default Jobcard;
