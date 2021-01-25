import React, {useState} from 'react';
import 'tachyons';
import '../../styles/header.scss';

function DashboardHeader({logout}) {

    const logoutvalues = () => { 
        logout(false);
        localStorage.setItem("loggedin",JSON.stringify(false));
        localStorage.setItem("c_id",JSON.stringify({}));
        localStorage.setItem("j_id",JSON.stringify({}));
    }

    let [burgerclicked, setburger] = useState(false);
    return (
        <div className='header w-100 h3'>
            <div className='flex justify-start headflex items-center w-90 center'>
                <div className='logoheader w4'><a className='link' href="https://moyyn.com/"><h3 className='white logo f4'>Moyyn</h3></a></div>
                <div className={`w-100 navbar nav-dash ml-auto ${burgerclicked ? 'nav-active' : ''}`}>
                    <ul className='flex nav w-90 navlist pa0 ma0 items-center'>
                        <li className='center list fw5 f7 f6-l'><a className='link white dim dib' href="/Dashboard"><p>Dashboard</p></a></li>
                        <li className='center list fw5 f7 f6-l'><a className='link white dim dib' href="/Settings"><p>Settings</p></a></li>
                    </ul>
                </div>
                <div onClick={logoutvalues} className='dicon'><a href="/" className='white'><i className="fa fa-sign-out"></i></a></div>
                <div className={`burger mb2 ${burgerclicked ? 'toggle' : ''}`} onClick={() => { setburger(burgerclicked = !burgerclicked) }}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
