import React, {useState} from 'react';
import 'tachyons';
import '../../styles/header.scss';

function Header() {
    let [burgerclicked, setburger] = useState(false);
    return (
        <div className='header w-100 h3'>
            <div className='flex headflex justify-between items-center w-90 center'>
                <div className='logoheader w4'><a className='link' href="https://moyyn.com/"><h3 className='white logo f4'>Moyyn</h3></a></div>
                <div className={`navbar w-50-l w-80 w-75-m ${burgerclicked ? 'nav-active' : ''}`}>
                    <ul className='flex nav navlist pa0 ma0 justify-between items-center'>
                        <li className='list fw5 f7 f6-l'><a className='link white dim dib' href="https://moyyn.com/companies/"><p>For Companies</p></a></li>
                        <li className='list fw5 f7 f6-l'><a className='link white dim dib' href="https://moyyn.com/apply"><p>For Candidates</p></a></li>
                        <li className='list fw5 f7 f6-l'><a className='link white dim dib' href="https://moyyn.com/DE"><p>DE</p></a></li>
                        <li className='list fw5 f7 f6-l'><a className='link white dim dib' href="https://moyyn.com/"><p>EN</p></a></li>
                        <li className='list btn fw5 f7 f6-l'><a className='link white dim dib' href="/candidate/check-application">Login</a></li>
                        <li className='list btn fw5 f7 f6-l'><a className='link white dim dib br2-l ba-l ph3-l pv2-l' href="/">SignUp</a></li>
                    </ul>
                </div>
                <div className={`burger mb2 ${burgerclicked ? 'toggle' : ''}`} onClick={() => { setburger(burgerclicked = !burgerclicked) }}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
