import React, {useState} from 'react';
import 'tachyons';
import JobCardList from '../Dashboard/JobCard/Jobcardlist';
import '../../styles/dashboard.scss';
import '../../styles/custom.css';

function Dashboard({company="Moyyn"}) {
    const [jobdata] = useState(['a','b','c','d']);
    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100 vh-100'>
        <div className='w-90 center mb5'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='mt4 ma0 f3-l f4-m f6'>Welcome to {company} Dashboard!</p>
                    <p className='mb4-l mb4-m mb3 f5-l f6-m f9-m gray ma0'>Get candidates by our A.I system</p>
                </div>
                <button style={{background:"#265cff"}} className="mt3 h2 pointer fw6 f8-mo f7-m f6-l mr2 w4-l w4-m w7-mo bn link dim br2 ph3 pv2 dib white">Post a Job</button>
            </div>
            <div className="flex ma-4 w-90-l w-90-m w-100 center ">
                <JobCardList jobs={jobdata}/>
            </div>
        </div>
        </div>
    )
}

export default Dashboard;
