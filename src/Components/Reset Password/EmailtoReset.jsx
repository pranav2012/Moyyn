import React, {useState} from 'react';
import '../../styles/setting.scss';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import 'tachyons';
import TextField from '@material-ui/core/TextField';

export default function EmailtoReset() {

    const [emailfound, setemailfound] = useState(false);

    return (
        <div className='w-100' style={{background:"#eef2f5"}}>
            <div className='center br2 mv5 tc bg-white w-60 ma2 pa4'>
                <p className='gray tc f4'>Provide your email address to send a password reset link</p>
                <div>
                <div className='creds mt3 w-100'>
                    <TextField
                        name="mail"
                        label="E-mail"
                        variant="outlined"
                        className={`w-50-l w-70-m w-80`}
                    />
                </div>
                <div className='mt4'>
                    <Button onClick={()=>setemailfound(!emailfound)} className='dim' variant="outlined" style={{ borderColor: "#265cff", color: "#265cff" }}>Send Email</Button>
                </div>
                <div className={`${emailfound?'':'hide'} mt4`}>
                    <Alert severity="success">Email sent, please check your email id to reset your password</Alert>
                </div>
            </div>
        </div>
        </div>
    )
}
