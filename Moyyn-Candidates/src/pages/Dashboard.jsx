import React from 'react';
import 'tachyons';
// import Jobcards from '../components/JobCards/Jobcardlist';

export default function Dashboard() {
    return (
        <div className="ma4">
            <div className="flex w-20 justify-around bg-white br2 pa2">
                <button style={{background:"#265cff"}} className="c-shadow h2 pointer h7-mo fw6 f8-mo f7-m f6-l mr2  w4 bn link dim br2 ph3 pv2 dib white">Client 1</button>
                <button style={{background:"#265cff"}} className="c-shadow h2 pointer h7-mo fw6 f8-mo f7-m f6-l mr2  w4 bn link dim br2 ph3 pv2 dib white">Client 2</button>
            </div>
            <div className='flex justtify-around mt4'>
                <div className='flex-1 bg-white pa2 mr1 w-100' >
                    {/* <Jobcards/> */}
                </div>
                <div className='flex-2 bg-white pa2 ml1 w-100'>
                    card info
                </div>
            </div>
        </div>
    )
}
