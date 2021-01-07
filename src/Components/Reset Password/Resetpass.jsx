import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import 'tachyons';
import TextField from '@material-ui/core/TextField';
import '../../styles/setting.scss';
import Alert from '@material-ui/lab/Alert';

export default function Resetpass() {

    const [reseted, setreseted] = useState(false);

    return (
        <div className='w-100' style={{background:"#eef2f5"}}>
            <div className='center br2 mv5 tc bg-white w-60 ma2 pa4'>
            <p className='gray tc f3'>Reset Password</p>
            <div>
                <div className='creds mt3 w-100'>
                    <TextField
                        name="token"
                        label="Reset Token"
                        variant="outlined"
                        autoComplete="off"
                        className={`w-50-l w-70-m w-80`}
                    />
                </div>
                <div className='creds mt3'>
                    <TextField
                        name="new"
                        label="New Password"
                        type="password"
                        variant="outlined"
                        autoComplete="off"
                        className={`w-50-l w-70-m w-80`}
                    />
                </div>
                <div className='mt4'>
                    <Button onClick={()=>setreseted(!reseted)} className='dim' variant="outlined" style={{ borderColor: "#265cff", color: "#265cff" }}>Update Password</Button>
                </div>
                <div className={`${reseted?'':'hide'} mt4`}>
                    <Alert severity="success">Password reset Succesfull!</Alert>
                </div>
            </div>
        </div>
        </div>
    )
}
