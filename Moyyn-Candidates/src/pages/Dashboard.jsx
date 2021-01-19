import React from 'react';
import { useState, useEffect } from 'react';
import 'tachyons';
import '../styles/dashboard.scss';
import Jobcards from '../components/JobCards/Jobcardlist';
import { goToURL } from '../util/helpers/helper-methods';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { sendRequest } from '../util/helpers/helper-methods';


export default function Dashboard({ suggestions, email }) {

    const [client, setclient] = useState(true);
    const [jobs, setjobs] = useState([]);
    const [description, setdescription] = useState({desc:"",code:""});
    const [form, setform] = useState([]);
    const [sendjobpref, setsendjobpref] = useState(false)

    const screenAtSmall = useMediaQuery("(max-width:600px)");
    const screenAtTab = useMediaQuery("(max-width:1024px)");

    useEffect(() => {
        if (client) setjobs(suggestions.moyyn);
        else {
            let partner = suggestions.moberries.concat(suggestions.talentuno);
            setjobs(partner);
        }
    }, [suggestions, client]);

    useEffect(()=>{
        if(sendjobpref)
        // console.log(email,form)
        sendRequest('/jobs', 'POST', {
            email,
            jobs: form
        })
    },[form,email,sendjobpref]);

    const handleaccept = () =>{
        if (form.includes(description.code)) {
            setform((prev) => prev.filter((c) => c !== description.code));
        } else {
            setform((prev) => [...prev, description.code]);
        }
        setsendjobpref(true);
    }
    return (
        <div className="ma4-l ma4-m ma2">
            <p className='ma0 f3-l mb2 f4-m f6 pb2 gray tl'>Check out your job matches from</p>
            <div className="flex ma3 ma0-l ma0-m w-32-l w-50-m w-80 justify-around br2 pa2 ph1">
                <button onClick={() => setclient(true)} style={{ background: "#265cff" }} className={` ${client ? '' : 'active'} c-shadow h2 pointer h7-mo f8-mo f7-m f6-l mr2 w5 bn link dim br2 ph3 pv2 dib white`}>Direct {screenAtTab?"":"Clients"}</button>
                <button onClick={() => setclient(false)} style={{ background: "#265cff" }} className={` ${client ? 'active' : ''} c-shadow h2 pointer h7-mo f8-mo f7-m f6-l mr2 w5 bn link dim br2 ph3 pv2 dib white`}>Partner {screenAtTab?"":" Platforms"}</button>
            </div>
            <div className='flex justtify-around mt4'>
                <div className={`${client ? 'flex-1' : 'flex-2'} br2 bg-white pa2 mr2 w-100`} >
                    <Jobcards jobs={jobs} setdesc={setdescription} />
                </div>
                <div className={`${client ? 'flex-2' : 'flex-3'} br2 bg-white pa4 ml1 w-100 flex justify-center items-center`}>
                    {
                        description.desc === "" ? <p className='gray f4-l f5-m f6'>No Job Description!</p> : client ?
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
                                <div className='flex w-100 items-center justify-center'>
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
                                            className='moyynBtn mt4 ml4'
                                        >
                                            Reject
                                        </Button>
                                    </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            :
                            <div className="flex flex-column">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary' variant='h6' align='center'>
                                            Partner Job Matches
                            </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary'>
                                            At Moyyn, we work directly with clients as well as several partner platforms to increase your chances of getting a job, especially during the current Covid situation. We also work with several partner platforms and would like to give a recommendation to you.
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary'>
                                            What are the advantages of being recommended by us?
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary'>
                                            • Because we work closely with our partners, companies are more willing to consider your application and hire you if you meet their requirements
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary'>
                                            • You are also considered as a skilled candidate recommended by Moyyn and you have a higher chance of being interviewed for suitable positions
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary'>
                                            After clicking the link, you can apply to the career network of our partner and start getting job offers matching your skills immediately. Please note that we share your CV only with our direct clients and we do not share any info about your profile to other partner platforms. If you are interested in expanding your job opportunities, you can register directly on our partner platforms.
                                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color='textSecondary'>
                                            P.S: If you are applying at a later point of time, please save and use your personal recommendation link while registering at our partners at any point of time.
					</Typography>
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
                <div className={`${client ? 'hide' : 'flex-1'}`}>
                    <div className="bg-white mh2 pa3 h-100">
                        <p className='gray f6-l f6-m f7'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aspernatur consequatur deleniti voluptas. A molestias totam repellat,sequi ut perspiciatis modi consequuntur maxime quidem corrupti ullam pariatur porro accusamus aperiam?</p>
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
