import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import '../../styles/candidate.scss';
import SignUpForm from "../CompanySignUp/SignUpForm";
import {signupforminitialvalues} from '../../util/data/initial-values';
import 'tachyons';
import '../../styles/signup.scss';
import ToggleButton from 'react-toggle-button';
import '../../styles/setting.scss'
import TextField from '@material-ui/core/TextField';

function Settings() {
    const [edit_company,setedit_company] = useState(false);
    const [general_settings,setgeneral_settings] = useState(true);
    const [toggle, settoggle] = useState(false);
    
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
                    <Button onClick={credentials}  variant="contained" className={`cbtn ${edit_company || general_settings?'':'cbtn-active'}`}>Edit-Details</Button>
                </div>
                {
                    general_settings?
                    //General settings
                    <div className='mv4 pa4 w-95 center flex-1 tc bg-white'>
                        <p className='gray tc f3'>General Settings</p>
                        <div className='flex items-center mt4 justify-center'> 
                        <p className='f5-l f6-m f7 ma0 mr3'>Turn {toggle?'off':'on'} notification's ?</p>
                            <ToggleButton value={toggle} onToggle={() => settoggle(!toggle) } />
                        </div>
                        <div className='mt4'>
                            <Button className='dim' variant="outlined" style={{borderColor:"red", color:"red"}}>Delete Account</Button>
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
                                    id="outlined-basic"
                                    label="Old Password"
                                    variant="outlined"
                                    className={`w-50`}
                                />
                        </div>
                        <div className='creds mt3'>
                            <TextField
                                name="new"
                                id="outlined-basic"
                                label="New Password"
                                variant="outlined"
                                className={`w-50`}
                            />
                        </div>
                            <div className='mt4'>
                                <Button className='dim' variant="outlined" style={{borderColor:"#265cff", color:"#265cff"}}>Update Password</Button>
                            </div>
                       </div>
                    </div>
                    :
                    //edit company details
                    <div className='mv4 pa3 w-95 center flex-1 tc bg-white'>
                        <p className='gray tc f3'>Edit Details</p>
                        <div className='center signupform w-80 '>
                            <SignUpForm signupforminitialvalues={signupforminitialvalues}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Settings;
