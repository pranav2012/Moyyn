import React, { useEffect, useState } from 'react';

function Jobcard({job,setdesc}) {

    const [show, setshow] = useState(true);

    useEffect(()=>{
        if (show){
            if(job.Description === undefined){
                //setdesc("No Job Description!")
                setshow(false);
            }
            else{
                setdesc({
                    desc:job.Description,
                    code:job.Code
                })
                setshow(false);
            }
        }
    },[job,show,setdesc]);

    // useEffect(()=>{
    //     if(save){
    //         if (form.includes(job.Code)) {
    //             setform((prev) => prev.filter((c) => c !== job.Code));
    //         } else {
    //             setform((prev) => [...prev, job.Code]);
    //         }
    //     }  // eslint-disable-next-line
    // },[save,job]);

    return (
        <div onClick={()=>setshow(true)} className="card pointer c-shadow ma1 bg-white pa3-l pa3-m pa2 mt3 br3 flex justify-center items-center">
            <div className='flex w-80-l w-80-m w-90 flex-column'>
                {/* <p className='ma0 gray f8 f9-m f9-mo'></p> */}
                <p className='ma0 f5-l f5-m mt1 f7'>{job.Title}</p>
                <p style={{color:"#265cff"}} className='ma0 gray f7-l mt1 f8-m f8-mo'>{job.Location[0] + ", " + job.Location[1]}</p>
            </div>
        </div>
    )
}

export default Jobcard;
