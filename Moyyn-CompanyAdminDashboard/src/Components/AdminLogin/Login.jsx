import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'tachyons';
import { useHistory } from 'react-router-dom';

function Login({setlog}) {

    const [username, setusername] = useState("");
    const [pass, setpass] = useState("");
    let history = useHistory();

    const auth = () =>{
        if(username==="admin" && pass === "admin"){
            setlog(true);
            localStorage.setItem("logstate",JSON.stringify(true));
            history.push("/Dashboard");
        }
        else{
            alert("wrong credentials!!");
            setusername("");
            setpass("");
        }
    }

    return (
        <div className='flex w-100 flex-column items-center justify-center vh-75'>
            <p className='gray tc f3'>Moyyn Admin Login</p>
           <div className='c-shadow bg-white pa5-l pa5-m pa4 w-50-l w-60-m w-90'>
                <div className='mb4 center w-80-l w-80-m w-100'>
                    <TextField
                        name="login_id"
                        label="Username"
                        value={username}
                        onChange={(e)=>setusername(e.target.value)}
                        variant="outlined"
                        className={`w-100`}
                    />
                </div>
                <div className='mb4 center w-80-l w-80-m w-100'>
                    <TextField
                        name="passwd"
                        label="Password"
                        value={pass}
                        onChange={(e)=>setpass(e.target.value)}
                        variant="outlined"
                        className={`w-100`}
                    />
                </div>
                <div className='flex justify-center'>
                    <Button onClick={auth} className='dim w-30-l w-35-m w-50' style={{backgroundColor:"#265cff",color:"white"}} variant="contained" >Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
