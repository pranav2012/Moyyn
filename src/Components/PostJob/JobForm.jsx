import React from 'react';
import { Formik } from "formik";
import { Postjobformvalidation } from "../../util/validation/form-validation";
import 'tachyons';
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

function JobForm({setdata,postjobinitialvalues}) {
    let history = useHistory();
    return (
        <div className='jobform flex-1 w-100 vh-100'>
            <Formik
                initialValues={postjobinitialvalues}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setdata(values);
                    history.push('/dashboard')
                    resetForm({ values: '' });
                }}

                validationSchema={Postjobformvalidation}
            >
                {props => {
                    const {
                        values,// eslint-disable-line
                        touched,// eslint-disable-line
                        errors,// eslint-disable-line
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
                                        name="job_title"
                                        id="outlined-basic"
                                        label="Job Title"
                                        variant="outlined"
                                        value={values.job_title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='w-100'
                                    />
                                    <FormError name="job_title" />
                                </div>
                                <div className='tf mt3 w-80-l w-90 w-80-m'>
                                    <TextField
                                        name="job_url"
                                        id="outlined-basic"
                                        label="Job URL"
                                        variant="outlined"
                                        value={values.job_url}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-100`}
                                    />
                                    <FormError name="job_url" />
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
                                            name='Career Level'
                                            label='Career level'
                                            options={careerLevelOptions}
                                        />
                                    </div>
                                    <div className='mt3'>
                                        <WorkExperience />
                                    </div>
                                    <div className='mt3'>
                                        <Languages />
                                    </div>

                                    <Skills />

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
                                        name="othercountries"
                                        type="checkbox" 
                                        value={values.othercountries}
                                        onChange={handleChange}
                                        onBlur={handleBlur} 
                                    />
                                      <FormError name="othercountries"/>
                                </div>

                                <button type='submit' disabled={isSubmitting} style={{ background: "#265cff" }} className="mt3 pointer fw6 f7 f6-l w-20-l w-30-m w-40 bn link dim br1  ph3 pv2 ph4-m pv3-m ph4-l pv3-l mb2 dib white">Post your job</button>
                            </form>
                            <div className='flex-1 f5-l h-50-m f7 gray bw2 bg-white ma4-l ma4-m ma3 br2 pa3 vh-50-l vh-25'>
                                <p className='tc'>Note</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores, consequuntur earum, nulla quisquam dicta fugiat aliquam similique quod eos perspiciatis recusandae nihil molestiae aspernatur illum dolore ab odit eum.</p>
                            </div>
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