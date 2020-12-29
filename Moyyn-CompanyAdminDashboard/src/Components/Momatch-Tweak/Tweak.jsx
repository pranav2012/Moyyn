import React, {useState} from 'react';
import SelectMenu from './Formelements/SelectMenuForm';
import WorkExperience from './Formelements/WorkExperience';
import Skills from './Formelements/Skills';
import AutocompleteChips from './Formelements/AutocompleteChipsForm'
import Languages from './Formelements/Languages';
import { Formik } from "formik";
import {careerLevelOptions, industries} from '../../util/data/static-data';
import {postjobinitialvalues} from '../../util/data/initial-values';
import {Postjobformvalidation} from '../../util/data/form-validation'
import '../../styles/tweak.scss'

export default function Tweak() {

    const [data, setdata] = useState([])
    return (
        <div className='mt4 br2 bg-white c-shadow pa4'>
            <div className='w-100 flex justify-center mt2'><p className='ma0 gray pl2 f4-l f4-m f6'>Momatch Inputs</p></div>
            <Formik
                initialValues={postjobinitialvalues}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    setdata(arr=>[...data,values]);
                    // history.push('/dashboard')
                    resetForm({ values: '' });
                }}

                validationSchema={Postjobformvalidation}
            >
             {props => {
                    const {
                        isSubmitting,
                        handleSubmit,
                    } = props;
                return (
                    <div className='mt2'>
                        <form method='post' onSubmit={handleSubmit}>
                            <div className='' >
                                    <div className='mt3 flex flex-row-l flex-row-m flex-column'>
                                        <div className='w-80-l w-80-m w-100 mt3 mt0-l mt0-m'>
                                            <SelectMenu
                                                name='Career Level'
                                                label='Career level'
                                                options={careerLevelOptions}
                                            />
                                        </div>
                                        <div className='w2'></div>
                                        <div className='w-80-l w-80-m w-100 mt3 mt0-l mt0-m lang'>
                                            <Languages />
                                        </div>
                                    </div>
                                    <div className='mt3 flex flex-row-l flex-row-m flex-column lang'>
                                        <div className='w-80-l w-80-m w-100 mt3 mt0-l mt0-m'>
                                            <AutocompleteChips
                                                name='Industries'
                                                label='Industries'
                                                options={industries}
                                            />
                                        </div>
                                        <div className='w2'></div>
                                        <div className='w-80-l w-80-m w-100 mt3 mt0-l mt0-m'>
                                            <Skills/>
                                        </div>
                                    </div>
                                    <div className='mt3'>
                                        <WorkExperience />
                                    </div>
                            </div>
                <div className='flex justify-center'>
                    <button type='submit' disabled={isSubmitting} style={{ background: "#265cff" }} className="mt3 pointer fw6 f7 f6-l w-20-l w-30-m w-40 bn link dim br1  ph3 pv2 ph4-m pv3-m ph4-l pv3-l mb2 dib white"><span className='hide-mo'>Run</span> Momatch</button>
                </div>
            </form>
                    </div>
                )
            }}
            </Formik>              
        </div>
    )
}
