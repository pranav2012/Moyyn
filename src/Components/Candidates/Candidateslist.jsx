import React,{useState} from 'react'
import Candidate from './Candidatebox';
import '../../styles/candidate.scss';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function Candidateslist({candidates}) {
    let history = useHistory();
    const [candidate_type,setcandidate_type] = useState(false);
    const [def,setdef] = useState(true);

    
    const defaultfunc = () =>{
        setcandidate_type(false);
        setdef(true);
    }

    const shortlist = () =>{
        setcandidate_type(true);
        setdef(false);
    }

    const rejected = () =>{
        setcandidate_type(false);
        setdef(false);
    }
    //console.log(def,candidate_type)
    return (
        <div style={{background:"#eef2f5"}}  className=' flex-1 w-100 vh-100 pa4-l pa3'>
            <div className='w-80-l w-100 center flex flex-column'>
                {/* job info */}
                <div className='flex'>
                    <ChevronLeftTwoToneIcon onClick={() => history.push("/Dashboard")} className='self-center pointer'/>
                    <div className='flex flex-column items-start'>
                        <p className='ma0 f4-l f5-m f7 pb2 tc'>(Senior) Software Engineer - Python</p>
                        <p className='ma0 pl2 f6-l f7-m f8 gray tc'> New Delhi, India</p>
                    </div>
                </div>
                {/* <div className='candidate_search bg-white w-80 mt3 center shadow-1 br2 flex h2'></div> */}
                <div style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start w-50-l w-60-m w-25 justify-between pt4 ml2 pb1'>
                    <Button onClick={defaultfunc} variant="contained" className={`cbtn ${def?'cbtn-active':''}`}>Candidates</Button>
                    <Button onClick={shortlist} variant="contained" className={`cbtn ${candidate_type && !def?'cbtn-active':''}`}>Shortlisted</Button>
                    <Button onClick={rejected}  variant="contained" className={`cbtn ${candidate_type || def?'':'cbtn-active'}`}>Rejected</Button>
                </div>
                <div className='w-100 flex center flex-column ma-2'>
                    {
                        candidates.length<=0 || candidates[0] === undefined ?<div className='flex justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, Candidate matched with your job Profile</p></div>:candidates.map((data,id) =><Candidate candidate={data} key={id}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Candidateslist
