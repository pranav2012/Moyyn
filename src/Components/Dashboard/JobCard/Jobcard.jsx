import React from 'react';

function Jobcard() {
    return (
        <div className="card ma1 bg-white ph3 mt3 br3 flex justify-between items-center">
            <div className='flex flex-column justify-center'>
                <p className='ma0 f7-l f8-m f10-mo'>Senior level</p>
                <p className='ma0 f4-l f5-m f8-mo'>Full stack developer</p>
                <p className='ma0 gray f6-l f8-m f9-mo'>New Delhi, India</p>
            </div>
            <div className='flex flex-column justify-center items-center'>
            <p className='ma0 dn db-m db-l f7-l f8-m f9-mo'>No. of Candidates </p>
            <p className='ma0 gray mt2 f7-l f8-m f9-mo'>0</p>
            </div>
            <div style={{borderColor:"rgb(236, 236, 236)"}} className='h-100 flex flex-column w-25-l w-40-m w-30 bl'>
                <p className='gray f8 f9-m f10-mo mb1 mb3-m mb3-l self-end'>Created 7 hours ago</p>
                <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                    <button style={{background:"#265cff"}} className="ml2-l ml2-m ml3 pointer fw6 f10-mo f8-m f7-l mr2-l mr2-m mr0 w-60-l w-50-m w-80 h2-l h2-m h7-mo bn link dim br2 ph3 pv2 dib white">Candidates</button>
                    <button style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 shadow-1 fw6 f10-mo f8-m f7-l w-60-l w-50-m w-80 h2-l h2-m h7-mo mt1 mt0-l mt0-m bn link dim br2 ph3 pv2 dib">Edit Job</button>
               </div>
            </div>
        </div>
    )
}

export default Jobcard;
