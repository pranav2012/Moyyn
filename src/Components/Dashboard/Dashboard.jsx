import React, {useState,useEffect} from 'react';
import 'tachyons';
import JobCardList from '../Dashboard/JobCard/Jobcardlist';
import '../../styles/dashboard.scss';
import '../../styles/custom.css';
import { useHistory } from 'react-router-dom';
import FreeBanner from '../Candidates/FreeTrialPrompt';
import quirin from '../../svg/quirin.png';
import {Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    }
}));

function Dashboard({companyid,backend_url,setcompanyid,setjobid}) {
    
    const classes = useStyles();

    const [jobdata,setjobdata] = useState([]);
    const [company, setcompany] = useState("");
    const [free, setfree] = useState(false);
    const [username,setusername] = useState("");

    let history = useHistory();
    useEffect(() => {
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
                    setjobdata(data.result.Jobs);
                    setcompany(data.result.company);
                    setusername(data.result.name);
                    if(data.result.category==="Free"){
                        setfree(true);
                    }
                }
            }).catch((e)=>{
                console.error("can't fetch jobs!",e);
            });
        }// eslint-disable-next-line
    }, [companyid]);

    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100'>
            <div className='w-90 center mb5'>
                    <div className='flex mt4 mb3 center justify-between w-90 items-center'>
                        <div className='flex flex-column justify-between '>
                            <p className='ma0 f3-l f4-m f6'>Welcome to {company} Dashboard!</p>
                            <p className='f5-l hide f6-m f9-m gray ma0'>Get candidates by our A.I system</p>
                        </div>
                        <button onClick={()=>history.push('/postjob')} style={{background:"#265cff"}} className="c-shadow h2 pointer h7-mo fw6 f8-mo f7-m f6-l mr2 w-20-l w-20-m w4 bn link dim br2 ph3 pv2 dib white">Post a Job</button>
                    </div>
                    <div className={`${free?'':'dn'}`}>
                        <FreeBanner company={company} name={username}/>
                    </div>
                    <div className="flex flex-row-l flex-column-reverse-m flex-column-reverse w-90-l w-90-m w-100 center ">
                        <JobCardList jobs={jobdata} setjobid={setjobid} companyid={companyid}/>
                        <div className="w1 "></div>
                        <div style={{height:"max-content"}} className="ma3 mr0 ph0-l pa2  br2 self-center bg-white c-shadow w-40-l w-60-m w-60 ml-auto-l ml0-m ml0 tc">
                            <p className="f4-l f4-m f5">Your talent manager</p>
                            <p className="gray f5-l f5-m f6">Quirin Blendl</p>
                            <Avatar alt="Quirin" src={quirin} className={`center ${classes.large}`} />
                            <p className="gray f6-l f7-m f8-mo">quirin@moyyn.com | +4917624917456</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard;
