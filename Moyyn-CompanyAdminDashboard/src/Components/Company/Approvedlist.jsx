import React from 'react'
import ApprovedCompany from './ApprovedCompany'

export default function Approvedlist({approvedclientlist,pps,setjobdata}) {
    approvedclientlist = pps?approvedclientlist.filter((a)=>a.approved===true && a.pps===true):approvedclientlist.filter((a)=>a.approved===true && a.subscription===true);
    return (
        <div>
            {/* {console.log(approvedclientlist,pps)} */}
            {
                approvedclientlist.length > 0?approvedclientlist.map((approvedclient,id)=>{
                    return <ApprovedCompany key={id} approvedclientlist={approvedclient} setjobdata={setjobdata}/>
                })
                :
                <div className='flex mt4 justify-center items-center'><p className='ma0 f3-l f4-m f6 gray tc'>No, candidate's were Approved yet!</p></div>

            }
        </div>
    )
}
