import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import 'tachyons';

export default function ApprovedCompany({approvedclientlist,setjobdata,free,pps}) {

    const [momatch, setmomatch] = useState(true);
    const [momatch1, setmomatch1] = useState(true);
    const [stopcandidates, setstopcandidates] = useState(true);

    let history = useHistory();

    return (
        <div className='flex justify-center ma4-l ma4-m ma1 mt4'>
            <div style={{borderLeft:"2px solid #265cff"}} className='c-shadow br2 bg-white w-80-l w-80-m w-90 ch-2 ch-2-mo'>
                <div className='flex justify-between items-center pa3 h-100'>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 f3-l f3-m f4'>{approvedclientlist.companyname}</p>
                        <p className='ma0 gray f7-l f7-m f9-mo'>{approvedclientlist.email}</p>
                        <p className='ma0 gray f7-l f7-m f9-mo'>{approvedclientlist.phone}</p>
                    </div>
                    <div className='flex flex-column items-center items-start-l items-start-m justify-between h-75 flex-1'>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Jobs Posted: {approvedclientlist.jobposted}</p>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Shortlisted: {approvedclientlist.shortlisted}</p>
                        <p className='ma0 gray f5-l f6-m f9-mo'>Hired: {approvedclientlist.hired}</p>
                    </div>
                    <div className='flex flex-column justify-between h-75 flex-1'>
                        <p className='ma0 tr gray f8 f8-m f9-mo '><span className='hide-mo'>Registered on: </span>7th Nov, 2020</p>
                        <div onClick={()=>{history.push('/Jobs'); setjobdata(approvedclientlist)}} className='ac-btn c-shadow w-70 ml-auto'><Button style={{ borderColor: "#265cff", color: "#265cff" }} className='w-100' variant="outlined">View <span className='hide-mo ml1'>Details</span></Button></div>
                        <button onClick={()=>setmomatch(!momatch)} style={{ borderColor:momatch?'red':'green',color:momatch?'red':'green'}} className={`${!free && pps?'':'hide'} bg-white pointer ml-auto ac-btn c-shadow w-70 h2-l mt2 mt0-l mt0-m bn link dim br2 ph3 pv-l pv1 dib`}><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'>{momatch?<HighlightOffIcon/>:<DoneOutlineIcon/>}<span className='ml2'>{momatch?'Stop':'Start'} Momatch</span></div></button>
                        <button onClick={()=>setstopcandidates(!stopcandidates)} style={{ borderColor:stopcandidates?'red':'green',color:stopcandidates?'red':'green'}} className={`${free?'':'hide'} bg-white pointer ml-auto ac-btn c-shadow w-70 h2-l mt2 mt0-l mt0-m bn link dim br2 ph3 pv-l pv1 dib`}><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'>{stopcandidates?<HighlightOffIcon/>:<DoneOutlineIcon/>}<span className='ml2'>{stopcandidates?'Stop':'Start'} Candidates</span></div></button>
                        <button onClick={()=>setmomatch1(!momatch1)} style={{ borderColor:momatch1?'red':'green',color:momatch1?'red':'green'}} className={`${!free && !pps?'':'hide'} bg-white pointer ml-auto ac-btn c-shadow w-70 h2-l mt2 mt0-l mt0-m bn link dim br2 ph3 pv-l pv1 dib`}><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'>{momatch1?<HighlightOffIcon/>:<DoneOutlineIcon/>}<span className='ml2'>{momatch1?'Stop':'Start'} Momatch</span></div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
