import React, {useState,useEffect} from 'react';
import 'tachyons';
import JobCardList from '../Dashboard/JobCard/Jobcardlist';
import '../../styles/dashboard.scss';
import '../../styles/custom.css';
import { useHistory } from 'react-router-dom';

function Dashboard({company="Moyyn",data}) {
    const [jobdata,setjobdata] = useState([]);

    let history = useHistory();
    useEffect(() => {
        setjobdata([data]);
    }, [data]);
    console.log(jobdata);
    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100 vh-100'>
            <div className='w-90 center mb5'>
                <div className='flex mt4 mb3 center justify-between w-90 items-center'>
                    <div className='flex flex-column justify-between '>
                        <p className='ma0 f3-l f4-m f6'>Welcome to {company} Dashboard!</p>
                        <p className='f5-l f6-m f9-m gray ma0'>Get candidates by our A.I system</p>
                    </div>
                    <button onClick={()=>history.push('/postjob')} style={{background:"#265cff"}} className="h2 pointer h7-mo fw6 f8-mo f7-m f6-l mr2 w-20-l w-20-m w4 bn link dim br2 ph3 pv2 dib white">Post a Job</button>
                </div>
                <div className="flex ma-4 w-90-l w-90-m w-100 center ">
                    <JobCardList jobs={jobdata}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
