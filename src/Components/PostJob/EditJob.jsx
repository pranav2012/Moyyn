import React, {useEffect, useState} from 'react';
import JobForm from './JobForm';
import { postjobinitialvalues } from '../../util/data/initial-values';
import Loading from '../Loading/Loading';

function EditJob({backend_url,companyid,jobid,setjobid}) {
   
    const [value, setvalue] = useState(postjobinitialvalues);
    const [showerr, setshowerr] = useState(false);

    useEffect(() => {
        if(jobid !==""){
            setshowerr(true);
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
                    setshowerr(false);
                }
            }).catch(()=>{
                setshowerr(false);
                console.error("can't fetch job value's")
            });
        }
        setjobid(JSON.parse(localStorage.getItem("j_id")))// eslint-disable-next-line
    }, []);
    
    if(showerr){
        return(
        <React.Fragment>
            <div className='flex items-center justify-center bg-white ma3 br2 vh-75'>
				<Loading text="Loading Job Values" />
			</div>
        </React.Fragment>
        );
    }

    return (
        <div className="w-100">
            <JobForm backend_url={backend_url} postjobinitialvalues={value} editjob={true} jobid={jobid}/>
        </div>
    )
}

export default EditJob
