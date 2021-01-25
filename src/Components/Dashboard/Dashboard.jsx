import React, {useState,useEffect} from 'react';
import 'tachyons';
import JobCardList from '../Dashboard/JobCard/Jobcardlist';
import '../../styles/dashboard.scss';
import '../../styles/custom.css';
import { useHistory } from 'react-router-dom';
import FreeBanner from '../Candidates/FreeTrialPrompt';

function Dashboard({companyid,backend_url,setcompanyid,setjobid}) {
    
    const [jobdata,setjobdata] = useState([]);
    const [company, setcompany] = useState("")

    let history = useHistory();
    useEffect(() => {
        if(companyid !== "" ){
            fetch(backend_url + '/company/find', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id:companyid,
                })  
            }).then(response=>response.json())
            .then(data => {
                if(data.success){
                    setjobdata(data.result.Jobs)
                    setcompany(data.result.company)
                }
            }).catch((e)=>{
                console.error("can't fetch jobs!",e);
            });
        }// eslint-disable-next-line
    }, [companyid]);

    return (
        <div style={{background:"#eef2f5"}} className='flex-1 w-100'>
            <div className='w-90 center mb5'>
                <div className='flex mt4 mb3 center justify-between w-90 items-center'>
                    <div className='flex flex-column justify-between '>
                        <p className='ma0 f3-l f4-m f6'>Welcome to {company} Dashboard!</p>
                        <p className='f5-l hide f6-m f9-m gray ma0'>Get candidates by our A.I system</p>
                    </div>
                    <button onClick={()=>history.push('/postjob')} style={{background:"#265cff"}} className="c-shadow h2 pointer h7-mo fw6 f8-mo f7-m f6-l mr2 w-20-l w-20-m w4 bn link dim br2 ph3 pv2 dib white">Post a Job</button>
                </div>
                <div className="dn">
                    <FreeBanner/>
                </div>
                <div className="flex ma-4 w-90-l w-90-m w-100 center ">
                    <JobCardList jobs={jobdata} setjobid={setjobid} companyid={companyid}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
