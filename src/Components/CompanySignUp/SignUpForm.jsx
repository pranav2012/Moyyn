import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import 'tachyons';

function SignUpForm() {
    return (
    <div>
        <Formik
            initialValues={{ company: "", name: "",website: "",location:"",email: "", phone: "",password:""}}
            onSubmit={({resetForm}) => {
                resetForm({values: ''});
            }}

            validationSchema={Yup.object().shape({
                company: Yup.string()
                    .trim()
                    .required("required")
                    .matches(/^[a-z A-Z]+$/,"invalid company"),// eslint-disable-line
                name: Yup.string()
                    .trim()
                    .required("required")
                    .matches(/^[a-z A-Z]+$/,"invalid name"),// eslint-disable-line
                website: Yup.string()
                    .trim()
                    .required("required")
                    .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,"Not a website"), // eslint-disable-line
                location: Yup.string()
                    .trim()
                    .required("required"),
                email: Yup.string()
                    .trim()
                    .email()
                    .required("required"),
                password: Yup.string()
                    .trim()
                    .required("No password provided.")
                    .min(8, "Password too short - minimum 8 characters reuired.")
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, "Password must contain a number,Uppercase & a special character."),//eslint-disable-line
                phone: Yup.string()
                    .required("required")
                    .matches(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,"invalid number"),//eslint-disable-line
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
                        <button type='submit' disabled={isSubmitting} style={{background:"#265cff"}} className="mt3 fw6 f7 f6-l w-30-l w-40-m w-50 bn link dim br1 ph3 pv2 mb2 dib white">Register</button>
                    </form>
                );
            }}
        </Formik>
    </div>
    );
}

export default SignUpForm;