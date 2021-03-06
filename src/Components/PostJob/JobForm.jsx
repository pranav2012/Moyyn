import React, {useState} from 'react';
import { Formik } from "formik";
import { Postjobformvalidation } from "../../util/validation/form-validation";
import 'tachyons';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import '../../styles/postjob.scss';
import TextField from '@material-ui/core/TextField';
import FormError from '../PostJob/Formelements/FormError';
import Country from './Formelements/Country';
import City from './Formelements/City';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { careerLevelOptions, industries, currency} from '../../util/data/static-data';
import SelectMenu from './Formelements/SelectMenuForm';
import AutocompleteChips from './Formelements/AutocompleteChipsForm';
import WorkExperience from './Formelements/WorkExperience';
import Languages from './Formelements/Languages';
import Skills from './Formelements/Skills';
import DateForm from './Formelements/DateForm';
import {useHistory} from 'react-router-dom';

function JobForm({postjobinitialvalues,backend_url,companyid,jobid,editjob}) {

    const [hov1, sethov1] = useState(false);
    const [hov2, sethov2] = useState(false);
    const [hov3, sethov3] = useState(false);
    let history = useHistory();
    return (
        <div className='jobform flex-1 w-100 vh-100'>
            <Formik
                initialValues={postjobinitialvalues}
                enableReinitialize={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    fetch(`${backend_url}/job/${editjob?'update':'create'}`, {
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({
                            _id:jobid,
                            company:companyid,
                            jobTitle:values.jobTitle,
                            jobUrl:values.jobUrl,
                            requirements:values.requirements,
                            description:values.description,
                            careerLevel:values.careerLevel,
                            Date: values.Date,
                            Industries:values.Industries,
                            Languages:values.Languages,
                            Skills:values.Skills,
                            workExperience:values.workExperience,
                            city: values.city,
                            country: values.country,
                            currency: values.currency,
                            from:values.from,
                            to:values.to,
                            otherCountries:values.otherCountries,
                            timestamp:new Date() 
                        })  
                    }).then(response=>response.json())
                    .then(data => {
                        if(data.success){
                            setSubmitting(true);
                            history.push('/dashboard')
                            resetForm({ values: '' });
                        }
                    }).catch(()=>{
                        console.error("error submitting job form!")
                    });
                }}

                validationSchema={Postjobformvalidation}
            >
                {props => {
                    const {
                        values,// eslint-disable-line
                        isSubmitting,// eslint-disable-line
                        handleChange,// eslint-disable-line
                        handleBlur,// eslint-disable-line
                        handleSubmit,// eslint-disable-line
                    } = props;
                    return (
                        <div style={{background:"#eef2f5"}} className='w-100 flex flex-row-l flex-row-m flex-column-reverse'>
                            <div className='flex-1 flex-none'></div>
                            <form className='flex-4 pv2 flex-1-mo w-90 w-100-l w-100-m mv4 center br2 ba2 bg-white flex justify-center items-center flex-column' method='post' onSubmit={handleSubmit}>
                                <p className='gray f3'>Enter Job Details</p>
                                <div className={`tf w-80-l w-90 w-80-m `}>
                                    <TextField
                                        name="jobTitle"
                                        id="outlined-basic"
                                        label="Job Title"
                                        variant="outlined"
                                        value={values.jobTitle}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='w-100'
                                    />
                                    <FormError name="jobTitle" />
                                </div>
                                <div className='tf mt3 w-80-l w-90 w-80-m'>
                                    <TextField
                                        name="jobUrl"
                                        id="outlined-basic"
                                        label="Job URL"
                                        variant="outlined"
                                        value={values.jobUrl}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-100`}
                                    />
                                    <FormError name="joburl" />
                                </div>
                                <div className='w-80-l w-90 w-80-m mt2-l mb2-l mt1 mb1'>
                                    <div className='btex mt3'>
                                        <TextareaAutosize
                                            name="description"
                                            placeholder=" Job Description"
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`texta w-100 `}
                                        />
                                        <FormError name="description" />
                                    </div>
                                    <div className='mt3 btex'>
                                        <TextareaAutosize
                                            name="requirements"
                                            placeholder=" Job Requirements"
                                            value={values.requirements}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-100 texta `}
                                        />
                                        <FormError name="requirements" />
                                    </div>
                                </div>
                                <div className='w-80-l w-90 w-80-m mt2-l mb2-l mt1 mb1 flex flex-row-l flex-row-m flex-column justify-between' >
                                    <div className='mt3 mr0 mr2-m mr3-l w-100'>
                                        <Country 
                                            name="country" 
                                            />
                                    </div>
                                    <div className='mt3 w-100'>
                                        <City 
                                            name="city" 
                                        />
                                    </div>
                                </div>
                                <div className='w-80-l w-90 w-80-m mt2-l mb2-l mt1 mb1' >
                                    <div className='mt3'>
                                        <AutocompleteChips
                                            className='flex-1'
                                            name='Industries'
                                            label='Industries'
                                            options={industries}
                                        />
                                    </div>
                                    <div className='mt3'>
                                        <SelectMenu
                                            className='flex-1'
                                            name='careerLevel'
                                            label='Career level'
                                            options={careerLevelOptions}
                                        />
                                    </div>
                                    <div className='mt3 relative'>
                                        <WorkExperience />
                                        <div style={{background:"#eef2f5"}} className={`${hov1?'':'hide'} flex justify-center items-center c-shadow tc h3 w5 br2 absolute gray f7 z-11 bottom--2 right--2`}>Please select the job roles relevant to your offer to filter the best candidates</div>
                                        <div onMouseLeave={()=>sethov1(false)} onMouseOver={()=>sethov1(true)} style={{color:"#265cff"}} className="pointer help-ico dim bottom-2 mb2 right--2 absolute"><HelpOutlineOutlinedIcon/></div>
                                    </div>
                                    <div className='mt3 relative'>
                                        <Languages />
                                        <div style={{background:"#eef2f5"}} className={`${hov2?'':'hide'} flex justify-center items-center c-shadow tc h3 w5 br2 absolute gray f7 z-11 bottom--1 right--2`}>Please select atleast one native language requirement</div>
                                        <div onMouseLeave={()=>sethov2(false)} onMouseOver={()=>sethov2(true)} style={{color:"#265cff"}} className="pointer help-ico dim top-1 mt1 right--2 absolute"><HelpOutlineOutlinedIcon/></div>
                                    </div>
                                    <div className='relative'>
                                        <Skills />
                                        <div style={{background:"#eef2f5"}} className={`${hov3?'':'hide'} flex justify-center items-center c-shadow tc h3 w5 br2 absolute gray f7 top-2 z-11 right--2`}>Please select as many skills as possible associated with the job</div>
                                        <div onMouseLeave={()=>sethov3(false)} onMouseOver={()=>sethov3(true)} style={{color:"#265cff"}} className="pointer help-ico dim top-1 right--2 absolute"><HelpOutlineOutlinedIcon/></div>
                                    </div>

                                    <div className='sald flex flex-column flex-row-m flex-row-l w-100 mt4 center items-center justify-between'>
                                        <div className='flex-1 w-100'>
                                            <DateForm
                                                name="Date"
                                                label="Start Date"
                                            />
                                        </div>
                                        <div className='sal flex flex-1 pt2 pt0-l pt0-m ml5-l ml5-m ml0 flex-column' >
                                            <div className='flex'>
                                                <p className='gray ma0 mb3-l mb2 f6'>Salary</p>
                                                <div className='w-70 curr'>
                                                    <SelectMenu
                                                    name='currency'
                                                    label='Currency'
                                                    options={currency}
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex mt3 mt1-l mt1-m'>
                                               <div>
                                                    <TextField
                                                        name="from"
                                                        id="filled-number"
                                                        label="From"
                                                        type="number"
                                                        value={values.from}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        InputLabelProps={{ shrink: true }}
                                                        variant="outlined"
                                                    />
                                                    <FormError name="from"/>
                                                </div>
                                                <div className='ml3'>
                                                    <TextField
                                                        name="to"
                                                        id="filled-number"
                                                        label="To"
                                                        type="number"
                                                        value={values.to}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        InputLabelProps={{ shrink: true }}
                                                        variant="outlined"
                                                    />
                                                    <FormError name="to"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt2 items-center justify-between">
                                    <p className='gray mr2 f6-l f6-m f7'>Willing to recruit from other Countries?</p>
                                    <input 
                                        name="otherCountries"
                                        type="checkbox" 
                                        checked={values.otherCountries}
                                        onChange={handleChange}
                                        onBlur={handleBlur} 
                                    />
                                      <FormError name="othercountries"/>
                                </div>
                                <button type='submit' disabled={isSubmitting} style={{ background: "#265cff" }} className="mt3 pointer fw6 f7 f6-l w-20-l w-30-m w-40 bn link dim br1  ph3 pv2 ph4-m pv3-m ph4-l pv3-l mb2 dib white">Post Job</button>
                            </form>
                            <div className='flex-1 hide f5-l h-50-m f7 gray bw2 bg-white ma4-l ma4-m ma3 br2 pa3 vh-50-l vh-25'>
                                <p className='tc'>Note</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores, consequuntur earum, nulla quisquam dicta fugiat aliquam similique quod eos perspiciatis recusandae nihil molestiae aspernatur illum dolore ab odit eum.</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
}

export default JobForm;

/*
Add Job Url (url field)
Job title (Text input)
Job description (paragraph)
Requirements (paragraph)
City, Country
Industry (dropdown)
Career level (dropdown)
Job roles (like candidate's work experience section)
Language requirements (like candidates language)
Skill set required (like candidates)
Start date (date picker)
Salary range (from - to)
Willingness to recruit from other countries? (Toggle Yes/No)
*/