import React from 'react';
import { postjobinitialvalues } from '../../util/data/initial-values';
import JobForm from './JobForm';


function EditJob({setdata}) {
    let value = postjobinitialvalues;
    // useEffect(() => {
        
    // }, []);
    return (
        <div>
            <JobForm postjobinitialvalues={value}/>
        </div>
    )
}

export default EditJob
