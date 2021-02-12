import React,{useState,useEffect} from 'react'
import {Candidatebox as Candidate, Shortlist, Rejected, Selected} from './Candidatebox';
import '../../styles/candidate.scss';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import FreeBanner from '../Candidates/FreeTrialPrompt';
// import Filter from './Filter';

function Candidateslist({candidates,companyid, backend_url}) {
    let history = useHistory();

    const [candidate_type,setcandidate_type] = useState(false);
    const [def,setdef] = useState(true);
    const [iswithd, setiswithd] = useState(false);

    const [isfree, setisfree] = useState(false);

    const [count, setcount] = useState(0);

    let nrml =  candidates.filter((val)=>(val.short === false && val.reject === false && val.select === false)||(val.short === true && val.reject === true && val.select === true));
    let shortlisted = candidates.filter((val)=>(val.short === true && val.reject === false && val.select === false));
    let rejected =  candidates.filter((val)=>((val.short === false && val.select === false) && val.reject === true));
    let selected = candidates.filter((val)=>(val.short === false && val.reject === false && val.select === true));

    useEffect(() => {
        candidate_type && def?setcount(selected.length):def?setcount(nrml.length):candidate_type?setcount(shortlisted.length):setcount(rejected.length);
    }, [selected,def,candidate_type,nrml,rejected,shortlisted]);

    useEffect(()=>{
        if(companyid !== "" ){
            fetch(backend_url + '/company/find', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id:companyid,
                })  
            }).then(response=>response.json())
            .then(data => {
                if(data.success){
                    if(data.result.category === "Free"){
                        setisfree(true);
                    }
                }
            }).catch(()=>console.log("error fetching data"))
        }
    },[backend_url,companyid]);

    const defaultfunc = () =>{
        setcandidate_type(false);
        setdef(true);
        setiswithd(false);
    }

    const shortlist = () =>{
        setcandidate_type(true);
        setdef(false);
        setiswithd(false);
    }

    const reject = () =>{
        setcandidate_type(false);
        setdef(false);
        setiswithd(false);
    }

    const selectfun = () =>{
        setcandidate_type(true);
        setdef(true);
        setiswithd(false);
    }

    // const selectwith = () =>{
    //     setcandidate_type(false);
    //     setdef(false);
    //     setiswithd(true);
    // }

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
                <div className={`${isfree?'':'hide'}`}>
                    <FreeBanner/>
                </div>
                {/* <Filter/> */}
                <div style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start w-100 justify-start-l justify-center pt4 ml2-l pb1'>
                    <Button onClick={defaultfunc} variant="contained" className={`cbtn ${def && !candidate_type && !iswithd?'cbtn-active':''}`}>Candidates</Button>
                    <Button onClick={shortlist} variant="contained"   className={`cbtn ${candidate_type && !def && !iswithd?'cbtn-active':''}`}>Shortlisted</Button>
                    <Button onClick={reject}  variant="contained"   className={`cbtn ${!candidate_type && !def && !iswithd?'cbtn-active':''}`}>Rejected</Button>
                    <Button onClick={selectfun}  variant="contained"   className={`cbtn ${candidate_type && def && !iswithd?'cbtn-active':''}`}>Hired</Button>
                    {/* <Button onClick={selectwith}  variant="contained"   className={`cbtn ${iswithd && !def && !candidate_type?'cbtn-active':''}`}>Withdrawal</Button> */}
                </div>
                <div className='mv3'>
                    <p className='ma0 gray mr2 f6-l f7-m f8-mo tr'>{'All Candidates'}({count})</p>
                </div>
                <div className='w-100 flex center flex-column'>
                    {
                        candidates.length<=0 || candidates === undefined ?<div className='mt4 flex justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, Candidate matched with your job Profile</p></div>
                        :def && candidate_type?
                            selected.length<=0? <div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No candidates selected!!</p></div>: selected.map((data,id) =><Selected candidate={data} key={id}/>)
                        :def?
                           nrml.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>Sorry, no candidate's were found!</p></div>:nrml.map((data,id) =><Candidate candidate={data} key={id}/>)
                        :candidate_type?
                           shortlisted.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were shortlisted yet!</p></div>:shortlisted.map((data,id) =><Shortlist candidate={data} key={id}/>)
                        :
                           rejected.length<=0?<div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were rejected yet!</p></div>:rejected.map((data,id) =><Rejected candidate={data} key={id}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Candidateslist
