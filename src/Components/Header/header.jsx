import React from 'react';
import 'tachyons';
import Logosvg from '../../svg/logosvg';
import '../../styles/header.scss';

function header() {
    return (
        <div className='header w-100 h3 bg-blue'>
            <div className='flex headflex justify-between items-center w-90 center'>
                <div className='logoheader w4'><a href="https://moyyn.com/"><Logosvg className='logo'/></a></div>
                <div className='w-50-l w-80 w-75-m'>
                    <ul className='flex navlist pa0 ma0 justify-between items-center'>
                        <li className='list fw5 f7 f6-l'><a className='link white' href="https://moyyn.com/companies/"><p>For Companies</p></a></li>
                        <li className='list fw5 f7 f6-l'><a className='link white' href="https://moyyn.com/apply"><p>For Candidates</p></a></li>
                        <li className='list fw5 notformob f7 f6-l'><a className='link white' href="https://moyyn.com/DE"><p>DE</p></a></li>
                        <li className='list fw5 notformob f7 f6-l'><a className='link white' href="https://moyyn.com/"><p>EN</p></a></li>
                        <li className='list btn fw5 f7 f6-l'><a className='link white dim br2 ba ph2 ph3-l ph3-m pv1 pv2-l pv2-m dib' href="https://moyyn.com/register-login/#jh-login-tab-content">Login</a></li>
                        <li className='list btn fw5 notformob f7 f6-l'><a className='link white dim br2 ba ph3 pv2 dib' href="https://moyyn.com/register-login/">Signup</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default header;
