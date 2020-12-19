import React,{useState, useEffect} from 'react'
import {Candidatebox as Candidate, Shortlist, Rejected} from './Candidatebox';
import '../../styles/candidate.scss';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Filter from './Filter';
import { useMediaQuery } from 'react-responsive';

function Candidateslist({candidates}) {
    let history = useHistory();
    const [candidate_type,setcandidate_type] = useState(false);
    const [def,setdef] = useState(true);
    const [count, setcount] = useState(0);
    const ismobile = useMediaQuery({ query: `(max-width: 580px)` })

    useEffect(() => {
        setcount(candidates.length)
    }, [candidates]);

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
        <div style={{background:"#eef2f5"}} className='flex-1 w-100 pa4-l pa3'>
            <div className='w-80-l w-100 center flex flex-column'>
                {/* job info */}
                <div className='flex'>
                    <ChevronLeftTwoToneIcon onClick={() => history.push("/Dashboard")} className='self-center dim pointer'/>
                    <div className='flex flex-column items-start'>
                        <p className='ma0 f4-l f5-m f7 pb2 tc'>(Senior) Software Engineer - Python</p>
                        <p className='ma0 pl2 f6-l f7-m f8 gray tc'>New Delhi, India</p>
                    </div>
                </div>
                <Filter/>
                <div style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start w-100 justify-start pt4 ml2 pb1'>
                    <Button onClick={defaultfunc} variant="contained" className={`cbtn ${def?'cbtn-active':''}`}>Candidates</Button>
                    <Button onClick={shortlist} variant="contained"   className={`cbtn ${candidate_type && !def?'cbtn-active':''}`}>Shortlisted</Button>
                    <Button onClick={rejected}  variant="contained"   className={`cbtn ${candidate_type || def?'':'cbtn-active'}`}>Rejected</Button>
                    <p className='ma0 gray f6-l f7-m f8-mo ml-auto mr3 self-center'>{ismobile?'All ':'Candidates '}({count})</p>
                </div>
                <div className='w-100 flex center flex-column'>
                    {
                        candidates.length<=0 || candidates[0] === undefined ?<div className='flex justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, Candidate matched with your job Profile</p></div>:candidates.map((data,id) =>{
                            return def?<Candidate candidate={data} key={id}/>:candidate_type?<Shortlist candidate={data} key={id}/>:<Rejected candidate={data} key={id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Candidateslist
