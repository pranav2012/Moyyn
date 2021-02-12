import React,{useState,useEffect} from 'react';
import {Candidatebox as Candidate, Shortlist, Rejected, Selected} from './Candidatebox';
import {MCandidatebox as MCandidate, MShortlist, MRejected, MSelected} from './MCandidatebox';
import '../../styles/candidate.scss';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
// import Filter from './Filter';
import Tweak from '../Momatch-Tweak/Tweak';
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from '@material-ui/core';
import {dummycandidates as candidates} from '../../util/data/dummy';

function Candidateslist({/*candidates*/}) {
    let history = useHistory();

    const screenatsamll = useMediaQuery("(max-width:600px)");

    const [candidatesdata, setcandidatesdata] = useState(candidates);

    const [candidate_type,setcandidate_type] = useState(false);
    const [def,setdef] = useState(true);
    
    const [mcandidate_type,setmcandidate_type] = useState(false);
    const [mdef,setmdef] = useState(true);

    // const [filter,setfilter] = useState([]);
    const [changebtn, setchangebtn] = useState(true);
    const [count, setcount] = useState(0);

    // candidates = candidates.filter((val)=>filter.map(()=> true));

    let nrml =  candidatesdata.filter((val)=>(val.short === false && val.reject === false && val.select === false)||(val.short === true && val.reject === true && val.select === true));
    let shortlisted = candidatesdata.filter((val)=>(val.short === true && val.reject === false && val.select === false));
    let rejected =  candidatesdata.filter((val)=>((val.short === false && val.select === false) && val.reject === true));
    let selected = candidatesdata.filter((val)=>(val.short === false && val.reject === false && val.select === true));

    useEffect(() => {
        changebtn?
            mcandidate_type && mdef?setcount(selected.length):mdef?setcount(nrml.length):mcandidate_type?setcount(shortlisted.length):setcount(rejected.length)
        :
            candidate_type && def?setcount(selected.length):def?setcount(nrml.length):candidate_type?setcount(shortlisted.length):setcount(rejected.length);
    }, [selected,def,candidate_type,nrml,rejected,shortlisted,changebtn,mdef,mcandidate_type]);

    const searchfilter = (e) =>{
        setcandidatesdata(candidates.filter((val) => {
            console.log(val.email.toLowerCase().includes(e.target.value.toLowerCase()))
         return val.email.toLowerCase().includes(e.target.value.toLowerCase())
        }));
    }

    const defaultfunc = (val1,val2) =>{
        val2(false);
        val1(true);
    }

    const shortlist = (val1,val2) =>{
        val2(true);
        val1(false);
    }

    const selectfun = (val1,val2) =>{
        val2(true);
        val1(true);
    }

    const reject = (val1,val2) =>{
        val2(false);
        val1(false);
    }
    //console.log(def,candidate_type)
    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100 pa4-l pa3'>
            <p className='gray tc f3-l f3-m f5 mt4 ma0 mb0'>Moyyn Company Dashboard</p>
            <div className='w-80-l w-100 mt4 center flex flex-column'>
                {/* job info */}
                <div className='flex flex-row-l flex-row-m flex-column'>
                    <div className='flex'>
                        <ChevronLeftTwoToneIcon onClick={() => history.push("/Jobs")} className='self-center dim pointer'/>
                        <div className='flex flex-column items-start'>
                            <p className='ma0 f4-l f5-m f7 pb2 tc'>(Senior) Software Engineer - Python</p>
                            <p className='ma0 pl2 f6-l f7-m f8 gray tc'>New Delhi, India</p>
                        </div>
                    </div>
                    <button style={{background:"#265cff"}} className="ml-auto-l ml-auto-m ml3 mt3 mt0-l mt0-m c-shadow h2 pointer h7-mo fw6 f8-mo f7-m f6-l mr2 w-20-l w-20-m w4 bn link dim br2 ph3 pv2 dib white">View Job</button>
                </div>
                <Tweak/>
                {/* <Filter setfilter={setfilter}/> */}
                <div className='flex flex-row-l flex-column  mt4 w-100'>
                    <div className='flex flex-column justify-around items-center w-100'>
                        <p className='ma0 gray f6-l f7-m f8-mo'>For Moyyn</p>
                        <div onClick={()=>{setchangebtn(true);}} style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start w-100 justify-start-l justify-center pt4 ml2-l pb1'>
                            <Button onClick={()=>{defaultfunc(setmdef,setmcandidate_type);}} variant="contained" className={`cbtn ${mdef && !mcandidate_type && changebtn ?'cbtn-active':''}`}>Candidates</Button>
                            <Button onClick={()=>{shortlist(setmdef,setmcandidate_type);}} variant="contained"   className={`cbtn ${mcandidate_type && !mdef && changebtn?'cbtn-active':''}`}>Shortlisted</Button>
                            <Button onClick={()=>{reject(setmdef,setmcandidate_type);}}  variant="contained"   className={`cbtn ${!mcandidate_type && !mdef && changebtn?'cbtn-active':''}`}>Rejected</Button>
                            <Button onClick={()=>{selectfun(setmdef,setmcandidate_type);}}  variant="contained"   className={`cbtn ${mcandidate_type && mdef && changebtn?'cbtn-active':''}`}><span className='hide-mo mr1'>Sent to </span> Client</Button>
                        
                        </div>
                    </div>
                    <div className='flex flex-column justify-around mt3 mt0-l items-center w-100'>
                        <p className='ma0 gray f6-l f7-m f8-mo'>For Client</p>
                        <div onClick={()=>{setchangebtn(false);}} style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start w-100 justify-end-l justify-center pt4 pb1'>
                            <Button onClick={()=>{defaultfunc(setdef,setcandidate_type);}} variant="contained" className={`cbtn ${def && !candidate_type && !changebtn?'cbtn-active':''}`}>Candidates</Button>
                            <Button onClick={()=>{shortlist(setdef,setcandidate_type);}} variant="contained"   className={`cbtn ${candidate_type && !def && !changebtn?'cbtn-active':''}`}>Shortlisted</Button>
                            <Button onClick={()=>{reject(setdef,setcandidate_type);}}  variant="contained"   className={`cbtn ${!candidate_type && !def && !changebtn?'cbtn-active':''}`}>Rejected</Button>
                            <Button onClick={()=>{selectfun(setdef,setcandidate_type);}}  variant="contained"   className={`cbtn ${candidate_type && def && !changebtn?'cbtn-active':''}`}>Selected</Button>
                        </div>
                    </div>
                </div>
                <div className='mv3'>
                    <p className='ma0 gray mr2 f6-l f7-m f8-mo tr'>{'All Candidates'}({count})</p>
                </div>
                <div className={`${mdef && !mcandidate_type && changebtn?'':'dn hide'} flex items-center relative`}>
                    <input onChange={(e)=>searchfilter(e)} type="text" placeholder="Search with Email" className={`${screenatsamll?'h2 w-60 f7':''} c-shadow pa2 pl5 h-30 bn br4 f6`}/>
                    <div className="gray absolute left-1 flex items-center"><SearchIcon/></div>
                </div>
                <div className='w-100 flex center flex-column'>
                    {
                        candidates.length<=0 || candidates === undefined ?<div className='mt4 flex justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, Candidate matched with your job Profile</p></div>
                        :mdef && mcandidate_type && changebtn?
                            selected.length<=0? <div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No candidates selected!!</p></div>: selected.map((data,id) =><Selected candidate={data} key={id}/>)
                        :mdef && changebtn?
                            nrml.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>Sorry, no candidate's were found!</p></div>:nrml.map((data,id) =><Candidate candidate={data} key={id}/>)
                        :mcandidate_type && changebtn?
                            shortlisted.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were shortlisted yet!</p></div>:shortlisted.map((data,id) =><Shortlist candidate={data} key={id}/>)
                        :!mdef && !mcandidate_type && changebtn?
                            rejected.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were rejected yet!</p></div>:rejected.map((data,id) =><Rejected candidate={data} key={id}/>)
                        :def && candidate_type && !changebtn?
                            selected.length<=0? <div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No candidates selected!!</p></div>: selected.map((data,id) =><MSelected candidate={data} key={id}/>)
                        :def && !changebtn?
                            nrml.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>Sorry, no candidate's were found!</p></div>:nrml.map((data,id) =><MCandidate candidate={data} key={id}/>)
                        :candidate_type && !changebtn?
                            shortlisted.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were shortlisted yet!</p></div>:shortlisted.map((data,id) =><MShortlist candidate={data} key={id}/>)
                        :
                            rejected.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were rejected yet!</p></div>:rejected.map((data,id) =><MRejected candidate={data} key={id}/>) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Candidateslist
