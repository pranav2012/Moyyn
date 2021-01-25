import React, {useEffect, useState} from 'react';
import JobForm from './JobForm';
import { postjobinitialvalues } from '../../util/data/initial-values';


function EditJob({backend_url,companyid,jobid,setjobid}) {
   
    const [value, setvalue] = useState(postjobinitialvalues);

    useEffect(() => {
        if(jobid !==""){
            fetch(backend_url + '/job/find', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    _id:jobid
                })  
            }).then(response=>response.json())
            .then(data => {
                if(data.success){
                    setvalue(data.result);
                }
            }).catch(()=>{
                console.error("can't fetch job value's")
            });
        }
        setjobid(JSON.parse(localStorage.getItem("j_id")))// eslint-disable-next-line
    }, []);
    
    return (
        <div className="w-100">
            <JobForm backend_url={backend_url} postjobinitialvalues={value} editjob={true} jobid={jobid}/>
        </div>
    )
}

export default EditJob
