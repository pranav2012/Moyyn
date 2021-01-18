import React, { useEffect, useState } from 'react';

function Jobcard({job,setdesc}) {
    const [show, setshow] = useState(false);
    useEffect(()=>{
        if (show){
            if(job.Description === undefined){
                //setdesc("No Job Description!")
                setshow(false);
            }
            else{
                setdesc(job.Description)
                setshow(false);
            }
        }
    },[job,show,setdesc]);

    return (
        <div onClick={()=>setshow(true)} className="card pointer c-shadow ma1 bg-white pa3-l pa3-m pa2 mt3 br3 flex justify-center items-center">
            <div className='flex w-80-l w-80-m w-90 flex-column'>
                {/* <p className='ma0 gray f8 f9-m f9-mo'></p> */}
                <p className='ma0 f4-l f5-m mt1 f7'>{job.Title}</p>
                <p className='ma0 gray f6-l mt1 f8-m f8-mo'>{job.Location[0] + ", " + job.Location[1]}</p>
            </div>
        </div>
    )
}

export default Jobcard;
