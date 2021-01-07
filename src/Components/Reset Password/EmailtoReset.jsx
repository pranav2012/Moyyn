import React from 'react';
import '../../styles/setting.scss';
import { Button } from '@material-ui/core';
import 'tachyons';
import TextField from '@material-ui/core/TextField';

export default function EmailtoReset() {
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
                    <Button className='dim' variant="outlined" style={{ borderColor: "#265cff", color: "#265cff" }}>Send Email</Button>
                </div>
            </div>
        </div>
        </div>
    )
}
