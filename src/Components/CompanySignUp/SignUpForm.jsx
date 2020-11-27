import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import 'tachyons';
import { useHistory } from "react-router-dom";

function SignUpForm({backend_url,registered ,setregistered}) {
    let history = useHistory();
    return (
    <div>
        <Formik
            initialValues={{ company: "", name: "",website: "",location:"",email: "", phone: "",password:""}}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                /*fetch(backend_url + '/register', {
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body: */console.log(JSON.stringify({
                            company: values.company,
                            name: values.name,
                            website: values.website,
                            location:values.location,
                            email: values.email,
                            phone: values.phone,
                            password: values.password
                        }))/*
                    }).then(response=>response.json())
                    .then(data => {*/
                     //   if(data.status === 'sucess' || true){
                            setregistered(true);
                            history.push('/Dashboard');
                     /*   }
                        else{
                            setisregistered(false);
                        }
                    }).catch(console.log('cant register!'));*/
                    resetForm({values: ''});
            }}

            validationSchema={Yup.object().shape({
                company: Yup.string()
                    .trim()
                    .required("Required")
                    .matches(/^[a-z A-Z]+$/,"Invalid company name"),// eslint-disable-line
                name: Yup.string()
                    .trim()
                    .required("Required")
                    .matches(/^[a-z A-Z]+$/,"Invalid name "),// eslint-disable-line
                website: Yup.string()
                    .trim()
                    .required("Required")
                    .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a valid link"), // eslint-disable-line
                location: Yup.string()
                    .trim()
                    .required("Required"),
                email: Yup.string()
                    .trim()
                    .email("Not a valid email address")
                    .required("Required"),
                password: Yup.string()
                    .trim()
                    .required("Required")
                    .min(8, "Too short - minimum 8 characters reuired")
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password Must contain number & uppercase letters"),//eslint-disable-line
                phone: Yup.string()
                    .required("Required")
                    .matches(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,"Invalid number"),//eslint-disable-line
            })}
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
                    <form method='post' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="company"
                            placeholder=" Name of the Company"
                            value={values.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.company && touched.company ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.company && touched.company && (
                            <p className="input-feedback">{errors.company}</p>
                        )}

                        <br />
                        <input
                            type="text"
                            name="name"
                            placeholder=" Your Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.name && touched.name ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.name && touched.name && (
                            <p className="input-feedback">{errors.name}</p>
                        )}
                        
                        <br />

                        <input
                            type="text"
                            name="website"
                            placeholder=" Website"
                            value={values.website}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.website && touched.website ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.website && touched.website && (
                            <p className="input-feedback">{errors.website}</p>
                        )}

                        <br />

                        <input
                            type="text"
                            name="location"
                            placeholder=" Location"
                            value={values.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.location && touched.location ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.location && touched.location && (
                            <p className="input-feedback">{errors.location}</p>
                        )}

                        <br />

                        <input
                            type="text"
                            name="email"
                            placeholder=" Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.email && touched.email ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.email && touched.email && (
                            <p className="input-feedback">{errors.email}</p>
                        )}

                        <br />
                        <input
                            type="tel"
                            name="phone"
                            placeholder=" Phone Number"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.phone && touched.phone ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.phone && touched.phone && (
                            <p className="input-feedback">{errors.phone}</p>
                        )}

                        <br />

                        <input
                            type="password"
                            name="password"
                            placeholder=" Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.password && touched.password ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.password && touched.password && (
                            <p className="input-feedback">{errors.password}</p>
                        )}   
                        
                        <br/>
                        <button type='submit' disabled={isSubmitting} style={{background:"#265cff"}} className="mt3 pointer fw6 f7 f6-l w-30-l w-40-m w-50 bn link dim br1 ph3 pv2 mb2 dib white">Register</button>
                    </form>
                </>
                );
            }}
        </Formik>
    </div>
    );
}

export default SignUpForm;