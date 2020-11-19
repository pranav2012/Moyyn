import React from "react";
import SignUpForm from "./SignUpForm";
import SvgComapnySignUp from '../../svg/SVGCompanySignUp';
import '../../styles/login.scss'
import 'tachyons';

function SignUp(){
    return(
        <div className='signup flex flex-row-l flex-column vh-100 ma2 ma4-l'>
            <div className='companysigninleft tc '>
                <p className='f3-l f3-m f5 signleftp1'>Hire professionals smarter and faster</p>
                <SvgComapnySignUp className='h-75-l h-50-m h-50 w-60 mt3-l mb3-l mt1 mb1'/>
                <p className='f5-l f5-m f6 signleftp2'>Get highly skilled candidates for free and pay only after recruitment</p>
            </div>
            <hr className='vh-75' style={{color:"rgb(249, 246, 246)",borderRadius:"5px",border:"1px solid"}}/>
            <div className='tc signupform w-75-m '>
                <SignUpForm/>
            </div>
        </div>
    );
}
export default SignUp;
