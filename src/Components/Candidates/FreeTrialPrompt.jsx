import React from 'react';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import 'tachyons';

export default function FreeTrialPrompt({name,company}) {
    return (
        <div style={{borderLeft:"2px solid #265cff"}} className="bg-white br2 w-90 center mv4 c-shadow">
            <div className="pa4-l pa3-m pa3 flex jusify-around items-center">
                <p className="flex-4 f5-l f6-m f8-mo gray ma0">
                    You're using free trial version valid for 30 days, to upgrade please send us a mail 
                </p>
                <button onClick={(e) => {window.location.href = `mailto:quirin@moyyn.com, arvi@moyyn.com?subject=Moyyn - Upgrade&body=Hello,%0d%0a %0d%0a I am ${name} from ${company} and I would be interested to know more about premium plans of Moyyn. Please let me know the further steps.%0d%0a %0d%0a Best regards,%0d%0a ${company}%0d%0a ${name}`; e.preventDefault();}} style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-80-l w-50-m w3 h2-l mt2  mt0-l mt0-m bn link dim br2 ph3 pv2-l pv1 dib flex-1"><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'><MailOutlinedIcon/><span className='ml2'>Send Mail</span></div></button>
            </div>
        </div>
    );
}
