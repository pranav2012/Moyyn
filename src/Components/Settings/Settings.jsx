import React, {useState, useEffect} from 'react';
import {Button} from '@material-ui/core';
import '../../styles/candidate.scss';
import SignUpForm from "../CompanySignUp/SignUpForm";
import {signupforminitialvalues} from '../../util/data/initial-values';
import 'tachyons';
import '../../styles/signup.scss';
import ToggleButton from 'react-toggle-button';
import '../../styles/setting.scss'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

function Settings({companyid, setlogin,backend_url}) {

    const [edit_company,setedit_company] = useState(false);
    const [general_settings,setgeneral_settings] = useState(true);
    
    const [clicked, setclicked] = useState(false);
    const [toggle, settoggle] = useState(false);
    
    const [deleteaccount, setdeleteaccount] = useState(false);
    const [confirmdelete, setconfirmdelete] = useState(false);

    const [passwordupdate, setpasswordupdate] = useState(false);
    const [new_password, setnew_password] = useState("");
    const [old_password, setold_password] = useState("");
    const [resetpassword, setresetpassword] = useState(false);
    const [errormsg, seterrormsg] = useState("");
    const [showerror, setshowerror] = useState(false);

    const [value, setvalue] = useState(signupforminitialvalues);

    let history = useHistory();

    useEffect(()=>{
        if(!edit_company){
            fetch(backend_url + '/company/find', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id: companyid,
                })
            }).then(res=>res.json())
            .then((data)=>{
                if(data.success){
                    setvalue(data.result);
                }
            })
        }
    },[backend_url,companyid,edit_company]);

    useEffect(()=>{
        if(passwordupdate){
            fetch(backend_url + '/company/updatePassword', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id: companyid,
                    old_password:old_password,
                    new_password:new_password,
                    timestamp:new Date()
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.success){
                    setresetpassword(true);
                    seterrormsg(data.message);
                }
                else{
                    setshowerror(true);
                    seterrormsg(data.message[0].message[0]);
                }
            }).catch(()=>console.error("can't update password"));
            setpasswordupdate(false);
        }
    },[passwordupdate,backend_url,companyid,new_password,old_password])

    useEffect(()=>{
        if(companyid!==""){
            fetch(backend_url + '/company/checkNotification', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id: companyid,
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.success){
                    settoggle(data.result.notification);
                }
            }).catch(()=>console.error("can't fetch notification status"));
        }
    },[companyid,backend_url])

    useEffect(()=>{
        if(clicked){
            fetch(backend_url + '/company/updateNotification', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id: companyid,
                    notification: toggle,
                    timestamp: new Date()
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.sucess){
                    console.log("notification changed!");
                }
            })
        }
    },[toggle,companyid,backend_url,clicked]);

    useEffect(()=>{
        if(confirmdelete){
            fetch(backend_url + '/company/delete', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id: companyid,
                    timestamp: new Date()
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.success){
                    setlogin(false);
                    localStorage.setItem("loggedin",false);
                    history.push('/');
                }
            }).catch(()=>console.error("can't delete your account"))
        }// eslint-disable-next-line 
    },[confirmdelete]);
    
    const general = () =>{
        setedit_company(false);
        setgeneral_settings(true);
    }

    const editcompany = () =>{
        setedit_company(true);
        setgeneral_settings(false);
    }

    const credentials = () =>{
        setedit_company(false);
        setgeneral_settings(false);
    }
    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100'>
           <div className='w-90 center'>
                <p className='gray tc f2 mb0'>Settings</p>
                <div style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start justify-start pt4 ml2 pb1'>
                    <Button onClick={general} variant="contained" className={`cbtn ${general_settings?'cbtn-active':''}`}>General</Button>
                    <Button onClick={editcompany} variant="contained" className={`cbtn ${edit_company && !general_settings?'cbtn-active':''}`}>Credentials</Button>
                    <Button onClick={credentials}  variant="contained" className={`cbtn ${edit_company || general_settings?'':'cbtn-active'}`}>Details</Button>
                </div>
                {
                    general_settings?
                    //General settings
                    <div className='mv4 pa4 w-95 center flex-1 tc bg-white'>
                        <div className={`${deleteaccount?'':'hide'} fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center`}>
                            <div className='h5 w-50 flex justify-center items-center bg-white c-shadow br2'>
                                <div className="w-100">
                                    <p className='gray f5-l f6-m f7'>All your data will be deleted. Are you Sure?</p>
                                    <div className='flex center justify-around w-80'>
                                        <Button onClick={()=>setconfirmdelete(true)} className='dim flex-1' variant="outlined" style={{borderColor:"red", color:"red"}}>Confirm Delete</Button>
                                        <div className="w2"></div>
                                        <Button onClick={()=>setdeleteaccount(false)} className='dim flex-1' variant="outlined" style={{borderColor:"#265cff", color:"#265cff"}}>Cancel</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='gray tc f3'>General Settings</p>
                        <div className='flex items-center mt4 justify-center'> 
                            <p className='gray f5-l f6-m f7 ma0 mr3'>Turn {toggle?'off':'on'} notification's ?</p>
                            <div className='toggle-btn' ><ToggleButton value={toggle} onToggle={() =>{ setclicked(true); settoggle(!toggle); }} /></div>
                        </div>
                        <div className='mt4'>
                            <Button onClick={()=>setdeleteaccount(true)} className='dim' variant="outlined" style={{borderColor:"red", color:"red"}}>Delete Account</Button>
                        </div>
                    </div>
                    :edit_company?
                    //credentials
                    <div className='mv4 pa3 w-95 center flex-1 tc bg-white'>
                        <p className='gray tc f3'>Credentials</p>
                       <div>
                        <div className='creds mt3'>
                        <TextField
                                    name="Old"
                                    label="Old Password"
                                    variant="outlined"
                                    value={old_password}
                                    onChange={(e)=>setold_password(e.target.value)}
                                    className={`w-50-l w-70-m w-80`}
                                />
                        </div>
                        <div className='creds mt3'>
                            <TextField
                                name="new"
                                label="New Password"
                                value={new_password}
                                onChange={(e)=>setnew_password(e.target.value)}
                                variant="outlined"
                                className={`w-50-l w-70-m w-80`}
                            />
                        </div>
                            <div className='mt4'>
                                <Button className='dim' onClick={()=>setpasswordupdate(true)} variant="outlined" style={{borderColor:"#265cff", color:"#265cff"}}>Update Password</Button>
                            </div>
                        </div>
                        <Snackbar
							open={resetpassword || showerror}
							autoHideDuration={5000}
							onClose={() => {setresetpassword(false); setshowerror(false);} }
						>
							<MuiAlert
								elevation={6}
								variant="filled"
								onClose={() => {setresetpassword(false); setshowerror(false);}}
								severity={showerror?"error":"success"}
							>
								{errormsg}
							</MuiAlert>
						</Snackbar>
                    </div>
                    :
                    //edit company details
                    <div className='mv4 pa3 w-95 center flex-1 tc bg-white'>
                        <p className='gray tc f3'>Edit Details</p>
                        <div className='center signupform w-80 '>
                            <SignUpForm signupforminitialvalues={value} backend_url={backend_url} companyid={companyid} editcompany={true}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Settings;
