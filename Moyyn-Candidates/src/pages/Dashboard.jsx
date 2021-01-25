import React from 'react';
import { useState, useEffect } from 'react';
import 'tachyons';
import '../styles/dashboard.scss';
import Jobcards from '../components/JobCards/Jobcardlist';
import { goToURL } from '../util/helpers/helper-methods';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { sendRequest } from '../util/helpers/helper-methods';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

export default function Dashboard({ suggestions, email }) {

    const [client, setclient] = useState(true);
    const [jobs, setjobs] = useState([]);
    const [description, setdescription] = useState({desc:"",code:""});
    const [form, setform] = useState([]);
    const [sendjobpref, setsendjobpref] = useState(false);
    const [hov3, sethov3] = useState(false);
    const [read, setread] = useState(false);
    const [directempty, setdirectempty] = useState(false);

    const screenAtSmall = useMediaQuery("(max-width:600px)");
    const screenAtTab = useMediaQuery("(max-width:1024px)");

    useEffect(()=>{
        if(suggestions.moyyn.length <=0 ){
            setdirectempty(true);
        }
        else{
            setdirectempty(false);
        }
    },[suggestions]);

    useEffect(() => {
        // console.log(suggestions);
        if (client) setjobs(suggestions.moyyn);
        else {
            let partner = suggestions.moberries.concat(suggestions.talentuno);
            setjobs(partner);
        }
    }, [suggestions, client, description]);

    useEffect(()=>{
        for(let i=0;i<=30;i++){
            localStorage.setItem(i,JSON.stringify(false));
        }
    },[])
    
    useEffect(()=>{
        localStorage.setItem("Form",JSON.stringify(form));  
    },[form]);

    useEffect(()=>{
        setform(JSON.parse(localStorage.getItem("Form")));
    },[client,jobs])

    useEffect(()=>{
        if(sendjobpref){
            setread(true);
            if(form.length > 0){
                sendRequest('/jobs', 'POST', {
                    email,
                    jobs: form
                })
            }
            setsendjobpref(false);
        }
    },[form,email,sendjobpref]);

    // const handleaccept = () =>{
    //     if (form.includes(description.code)) {
    //         setform((prev) => prev.filter((c) => c !== description.code));
    //     } else {
    //         setform((prev) => [...prev, description.code]);
    //     }
    //     setsendjobpref(true);
    // }
    return (
        <div className="ma4-l ma4-m ma2">
            <div onClick={()=> setread(false)} className={`fixed overlay top-0 bottom-0 left-0 right-0 ${read?'act':''}`}></div>
            <div className={`br2 pop-up-box gray bg-white flex flex-column w-40-l w-50-m w-60 ma0 mr4 pa1 fixed ${read?'':'hide'}`}>
                <div onClick={()=>setread(false)} className='absolute black top-1 f4 dim right-1 pointer'>&times;</div>
                <Grid item xs={12} className="mt4">
                    <Typography color='textSecondary' variant='h6' className="f5-l f5-m f7" align='center'>
                        {form.length<=0?"No company selected yet, please select your prefered companies":"Thank you. Your preferences have been submitted.You will be contacted by our clients directly if they select your application to the next round"}
                    </Typography>
                </Grid>
            </div>
           
            <p className='ma0 f3-l mb2 f4-m f6 pb2 gray tl'>Check out your job matches from</p>
            <div className="flex ma3 ma0-l ma0-m w-25-l w-40-m w-60 justify-around br2 pa2 ph1">
                <button onClick={() => setclient(true)} style={{ background: "#265cff" }} className={` ${client ? '' : 'active'} c-shadow h2 pointer h7-mo f8-mo f7-m f7-l mr2 w6-l w5-m w5 bn link dim br2 ph3 pv2 dib white flex-1-l`}>Direct {screenAtTab?"":"Clients"}</button>
                <button onClick={() => setclient(false)} style={{ background: "#265cff" }} className={` ${client ? 'active' : ''} c-shadow h2 pointer h7-mo f8-mo f7-m f7-l mr2 w6-l w5-m w5 bn link dim br2 ph3 pv2 dib white`}>Partner {screenAtTab?"":"Platforms"}</button>
            </div>
            <div className={`flex justify-start items-center mt3 ml4 ${client && !directempty?'':'hide'}`}>
                <button onClick={() => setsendjobpref(true)} style={{ background: "#265cff" }} className={`c-shadow h2 pointer h7-mo f8-mo f7-m f7-l mr2 w5 bn link dim br2 ph3 pv2 dib white`}>{screenAtTab?"":"Submit your"} Preferences</button>
                <div className="relative">
                    <div style={{background:"#eef2f5"}} className={`${hov3?'':'hide'} flex justify-center items-center c-shadow tc h3 w5 br2 absolute gray f7 top-1 z-11 right--1`}>Please select your preferred jobs from below and click 'Submit your preferences' button to save preferred jobs</div>
                    <div onMouseLeave={()=>sethov3(false)} onMouseOver={()=>sethov3(true)} style={{color:"#265cff"}} className="pointer help-ico dim bottom--1 absolute"><HelpOutlineOutlinedIcon/></div>
                </div>
            </div>
            <div className='flex flex-row-l flex-column-m flex-column justtify-around mt4'>
                <div className={` flex-1 ph2 mr2 w-100`} >
                    <Jobcards jobs={jobs} setdesc={setdescription} form={form} setform={setform} client={client}/>
                </div>
                <div className={` flex-2 br2 bg-white pa4 ml1 mt0-l mt3-m mt3 w-100 flex justify-center items-start`}>
                    {
                        description.desc === "" ? <p className='gray tc f4-l f5-m f6'>{directempty?"No matches found for direct Client's. For the time you can checkout our partner platform jobs":"No matches found. We will get in touch with you if one of our direct clients pre-select you for a job!"}</p> : client ?
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12} className="mb1">
                                    <Typography color='textSecondary' variant='h6' align='center'>
                                        Job Description
                                </Typography>
                                </Grid>
                                <Grid container spacing={1}>
                                    {/* {console.log(description)} */}
                                    {description.desc.split("\n").map((node, i) => {
                                        return (
                                            <Grid key={i} item xs={12}>
                                                <Typography variant={screenAtSmall ? 'body2' : 'body1'} color='textSecondary'>{node}</Typography>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                {/* <div className='flex w-100 items-center justify-center'>
                                    <Grid container item xs={8}>
                                        <Grid item xs={5}>
                                            <Button
                                                onClick={() => handleaccept()}
                                                fullWidth
                                                className='moyynBtn mt4'
                                            >
                                                Accept
                                            </Button>
                                        </Grid>
                                        <Grid item xs={5}>
                                        <Button
                                            onClick={() => {
                                            }}
                                            fullWidth
                                            className='moyynBtn-sec dim mt4 ml4'
                                        >
                                            Reject
                                        </Button>
                                    </Grid>
                                    </Grid>
                                </div> */}
                            </Grid>
                            :
                            <div className="flex flex-column">
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={12} className="mb1">
                                        <Typography color='textSecondary' variant='h6' align='center'>
                                            Job Description
                                        </Typography>
                                    </Grid>
                                    <Grid container spacing={1}>
                                    {/* {console.log(description)} */}
                                    {description.desc.split("\n").map((node, i) => {
                                        return (
                                            <Grid key={i} item xs={12}>
                                                <Typography variant={screenAtSmall ? 'body2' : 'body1'} color='textSecondary'>{node}</Typography>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                </Grid>
                                <div className='flex justify-center items-center'>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => goToURL("https://moyyn.com/de-personal-recommendation")}
                                            fullWidth
                                            className='moyynBtn mt4'
                                        >
                                            Personal recomendation link
                        </Button>
                                    </Grid>
                                </div>
                            </div>
                    }
                </div>
                <div className={` flex-1`}>
                    <div className={`${client ? 'hide' : ''} dn db-l dn-m bg-white mh2 pa3 h-100`}>
                        <p className='gray f7-l f7-m f8-mo'> 
                            At Moyyn, we work directly with clients as well as several partner platforms to increase your chances of getting a job, especially during the current Covid situation.<br/>
                            <br/>What are the advantages of being recommended by us?<br/>
                            <br/>• Because we work closely with our partners, companies are more willing to consider your application and hire you if you meet their requirements
                            <br/><br/>• You are also considered as a skilled candidate recommended by Moyyn and you have a higher chance of being interviewed for suitable positions
                            <br/><br/>After clicking the recommendation link, you can apply to the career network of our partner and start getting job offers matching your skills immediately.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-end">
                <Button
                    onClick={() => goToURL("/candidate/feedback")}
                    className='moyynBtn mt4'
                >
                    Give us a Feedback
                </Button>
            </div>
        </div>
    )
}
