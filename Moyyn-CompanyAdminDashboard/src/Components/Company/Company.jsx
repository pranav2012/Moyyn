import { Button } from '@material-ui/core';
import React, { useState} from 'react';

function Company({companypendinglist}) {
    // eslint-disable-next-line
    const [pps, setpps] = useState(false);// eslint-disable-next-line
    const [sub, setsub] = useState(false);// eslint-disable-next-line
    const [free, setfree] = useState(false);


    // useEffect(() => {
        
    // }, [])

    return (
        <div className='flex justify-center ma4-l ma4-m ma1 mt4'>
            <div style={{borderLeft:"2px solid #265cff"}} className='c-shadow br2 bg-white w-80-l w-80-m w-90 ch-2 ch-2-mo'>
                <div className='flex justify-between items-center pa3 h-100'>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 f3-l f3-m f4'>{companypendinglist.companyname}</p>
                        <p className='ma0 gray f7-l f7-m f8-mo'>{companypendinglist.email}</p>
                        <p className='ma0 gray f7-l f7-m f8-mo'>{companypendinglist.phone}</p>
                    </div>
                    <div className='flex flex-column justify-between h-75 flex-1 hide-mo'>
                        <p className='ma0 gray f4-l f5-m f6'>{companypendinglist.name}</p>
                        <p className='ma0 gray f7'>{companypendinglist.website}</p>
                    </div>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 tr gray f8'><span className='hide-mo'>Registered on: </span>7th Nov, 2020</p>
                        <div className='flex flex-column'>
                            <p className='ma0 self-center ml4 ml0-l ml0-m mb3-l mb3-m mb2 gray f6-l f7-m f7 hide-mo'>Approve For</p>
                            <div className='flex flex-row-l flex-row-m flex-column justify-between'>
                                
                                <div onClick={()=>setfree(true)} className='flex-1 c-shadow ac-btn'><Button style={{borderColor:"#265cff", color:"#265cff"}} className='w-100' variant="outlined">Free</Button></div>
                                <div className="w1 hcp"></div>
                                <div onClick={()=>setpps(true)} className='flex-1 c-shadow ac-btn'><Button style={{borderColor:"#265cff", color:"#265cff"}} className='w-100' variant="outlined">PPH</Button></div>
                                <div className="w1 hcp"></div>
                                <div onClick={()=>setsub(true)} className='flex-1 c-shadow ac-btn'><Button style={{borderColor:"#265cff", color:"#265cff"}} className='w-100' variant="outlined">Subscription</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;
