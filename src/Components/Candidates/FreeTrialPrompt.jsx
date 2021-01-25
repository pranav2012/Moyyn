import React from 'react';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import 'tachyons';

export default function FreeTrialPrompt({email}) {
    return (
        <div style={{border:"1px solid #265cff"}} className="bg-white br2 w-90 center mv4 c-shadow">
            <div className="pa4 flex jusify-around items-center">
                <p className="flex-2 gray ma0">
                    You're using free trial version valid for 30 days, to upgrade please send us a mail 
                </p>
                <button onClick={(e) => {window.location.href = `mailto:${email}?subject=Job at Moyyn&body=Hello, thanks for applying`; e.preventDefault();}} style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-80-l w-50-m w3 h2-l mt2  mt0-l mt0-m bn link dim br2 ph3 pv2-l pv1 dib flex-1"><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'><MailOutlinedIcon/><span className='ml2'>Send Mail</span></div></button>
            </div>
        </div>
    );
}
