import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import 'tachyons';
import '../../styles/login.scss';
import { useHistory } from 'react-router-dom';

function Login({setlog}) {

    const [username, setusername] = useState("");
    const [pass, setpass] = useState("");
    const [empty, setempty] = useState(false);
    const [wrong,setwrong] = useState(false);

    let history = useHistory();

    const auth = () =>{
        if(username==="" || pass === ""){
            setempty(true);
        }
        else{
            setempty(false);
            if(username==="admin" && pass === "admin"){
                setlog(true);
                setwrong(false);
                localStorage.setItem("loggedin",JSON.stringify(true));
                history.push("/Dashboard");
            }
            else{
                setusername("");
                setpass("");
                setwrong(true);
            }
        }
    }

    return (
        <div className='flex w-100 flex-column items-center justify-center vh-75'>
            <p className='gray tc f3-l f3-m f4'>Moyyn Company Login</p>
           <div className='c-shadow bg-white pa5-l pa5-m pa4 w-50-l w-60-m w-90'>
                <div className='mb4 center w-80-l w-80-m inp-log w-100'>
                    <TextField
                        name="login_id"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e)=>setusername(e.target.value)}
                        variant="outlined"
                        className={`w-100`}
                    />
                </div>
                <div className='inp-log mb3 center w-80-l w-80-m w-100'>
                    <TextField
                        name="passwd"
                        label="Password"
                        type="password"
                        value={pass}
                        onChange={(e)=>setpass(e.target.value)}
                        variant="outlined"
                        className={`w-100`}
                    />
                </div>
                <div onClick={()=>history.push('/email')} className="mb3 center gray f6-l f6-m f7 pointer dim w-80-l w-80-m w-100">Forgot password ?</div>
                <div className='flex justify-center'>
                    <Button onClick={auth} className='dim w-30-l w-35-m w-50' style={{backgroundColor:"#265cff",color:"white"}} variant="contained" >Login</Button>
                </div>
                <div className={`${wrong || empty?'':'hide'} mt4`}>
                    <Alert severity="error">{wrong?'Wrong credentials, Try Again!':empty?'Field cannot be empty!':''}</Alert>
                </div>
            </div>
        </div>
    )
}

export default Login;
