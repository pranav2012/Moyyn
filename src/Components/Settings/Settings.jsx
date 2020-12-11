import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import '../../styles/candidate.scss';

function Settings() {
    const [edit_company,setedit_company] = useState(false);
    const [genral_settings,setgenral_settings] = useState(true);

    
    const genral = () =>{
        setedit_company(false);
        setgenral_settings(true);
    }

    const editcompany = () =>{
        setedit_company(true);
        setgenral_settings(false);
    }

    const credentials = () =>{
        setedit_company(false);
        setgenral_settings(false);
    }
    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100 vh-100'>
           <div className='w-90 center'>
                <p className='gray tc f2 mb0'>Settings</p>
                <div style={{borderColor:"rgb(249, 246, 246)"}}className='flex self-start w-35 justify-between pt4 ml2 pb1'>
                    <Button onClick={genral} variant="contained" className={`cbtn ${genral_settings?'cbtn-active':''}`}>Genral</Button>
                    <Button onClick={editcompany} variant="contained" className={`cbtn ${edit_company && !genral_settings?'cbtn-active':''}`}>Credentials</Button>
                    <Button onClick={credentials}  variant="contained" className={`cbtn ${edit_company || genral_settings?'':'cbtn-active'}`}>Edit Details</Button>
                </div>
            </div>
        </div>
    )
}

export default Settings;
