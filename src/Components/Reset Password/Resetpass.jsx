import React from 'react';
import { Button } from '@material-ui/core';
import 'tachyons';
import TextField from '@material-ui/core/TextField';
import '../../styles/setting.scss';

export default function Resetpass() {
    return (
        <div className='w-100' style={{background:"#eef2f5"}}>
            <div className='center br2 mv5 tc bg-white w-60 ma2 pa4'>
            <p className='gray tc f3'>Reset Password</p>
            <div>
                <div className='creds mt3 w-100'>
                    <TextField
                        name="Old"
                        label="Old Password"
                        variant="outlined"
                        className={`w-50-l w-70-m w-80`}
                    />
                </div>
                <div className='creds mt3'>
                    <TextField
                        name="new"
                        label="New Password"
                        variant="outlined"
                        className={`w-50-l w-70-m w-80`}
                    />
                </div>
                <div className='mt4'>
                    <Button className='dim' variant="outlined" style={{ borderColor: "#265cff", color: "#265cff" }}>Update Password</Button>
                </div>
            </div>
        </div>
        </div>
    )
}
