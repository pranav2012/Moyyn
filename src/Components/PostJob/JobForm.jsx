import React from 'react';
import { Formik } from "formik";
import { Postjobformvalidation } from "../../util/validation/form-validation";
import 'tachyons';
import {postjobinitialvalues} from "../../util/data/initial-values";
import '../../styles/postjob.scss';
import TextField from '@material-ui/core/TextField';
import FormError from '../PostJob/Formelements/FormError';
import Country from './Formelements/Country';
import City from './Formelements/City';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { careerLevelOptions, industries } from '../../util/data/static-data';
import SelectMenu from './Formelements/SelectMenuForm';
import AutocompleteChips from './Formelements/AutocompleteChipsForm';
import WorkExperience from './Formelements/WorkExperience';
import Languages from './Formelements/Languages';
import Skills from './Formelements/Skills';
import DateForm from './Formelements/DateForm';
import {useHistory} from 'react-router-dom';

function JobForm({setdata}) {
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
                        <>
                            <form className='center flex justify-center items-center flex-column w-90' method='post' onSubmit={handleSubmit}>
                                <h4 className='gray f3'>Enter Job Details</h4>
                                <div className={`tf w-60-l w-90 w-80-m `}>
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
                                <div className='tf mt3 w-60-l w-90 w-80-m'>
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
                                <div className='w-60-l w-90 w-80-m mt2-l mb2-l mt1 mb1'>
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
                                <div className='w-60-l w-90 w-80-m mt2-l mb2-l mt1 mb1 flex flex-row-l flex-row-m flex-column justify-between' >
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
                                <div className='w-60-l w-90 w-80-m mt2-l mb2-l mt1 mb1' >
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
                                        <div className='sal flex flex-1 mt2  mt0-l mt0-m ml5-l ml5-m ml0 flex-column' >
                                            <p className='gray ma0 mb3-l mb2 f6'>Salary</p>
                                            <div className='flex mt1'>
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
                        </>
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