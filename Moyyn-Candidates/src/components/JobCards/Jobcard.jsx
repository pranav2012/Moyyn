import React, { useEffect, useState } from 'react';
import './check.css';

function Jobcard({ job, setdesc, form, setform, client, k }) {

    const [show, setshow] = useState(true);
    const [check, setcheck] = useState(false);
    const [clicked, setclicked] = useState(false);

    useEffect(() => {
        if (show) {
            if (job.Description === undefined) {
                //setdesc("No Job Description!")
                setshow(false);
            }
            else {
                setdesc({
                    desc: job.Description,
                    code: job.Code
                })
                setshow(false);
            }
        }
    }, [job, show, setdesc]);

    // useEffect(()=>{
    //     if(check){
    //         if (form.includes(job.Code)) {
    //             setform((prev) => prev.filter((c) => c !== job.Code));
    //         } else {
    //             setform((prev) => [...prev, job.Code]);
    //         }
    //     }  // eslint-disable-next-line
    // },[job,check]);

    useEffect(()=>{
        if(clicked){
            if(check){
                localStorage.setItem(k,JSON.stringify(true));
            }
            else{
                localStorage.setItem(k,JSON.stringify(false));
            }
            setclicked(false);
        }
        setcheck(JSON.parse(localStorage.getItem(k)));
        // console.log(form)
    },[check,k,clicked]);

    const handleaccept = () =>{
        if (form.includes(job.Code)) {
        setform((prev) => prev.filter((c) => c !== job.Code));
        } else {
            setform((prev) => [...prev, job.Code]);
        }
    }

    return (
        <div onClick={() => setshow(true)} className="card pointer c-shadow ma1 bg-white pa3-l pa3-m pa2 mt3 br3 flex justify-center items-center">
            <div className={`${client?'flex justify-around items-center':''} w-100`}>
                <div className='flex-1 flex w-80-l w-80-m w-90 flex-column'>
                    {/* <p className='ma0 gray f8 f9-m f9-mo'></p> */}
                    <p className='ma0 f6-l f6-m mt1 f8-mo'>{job.Title}</p>
                    <p style={{ color: "#265cff" }} className='ma0 gray f8 mt1 f8-m f9-mo'>{job.Location[0] + ", " + job.Location[1]}</p>
                </div>
                <div className={`${client?'':'hide'}`}>
                    <div className="flex-1">
                    <div className="cbx">
                        <input onChange={()=>{setcheck(!check); setclicked(true); handleaccept()}} checked={check} id="cbx" type="checkbox" />
                        <label htmlFor="cbx"></label>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path d="M2 8.36364L6.23077 12L13 2"></path>
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo"></feColorMatrix>
                                <feBlend in="SourceGraphic" in2="goo"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Jobcard;
