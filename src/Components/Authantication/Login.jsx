import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function Login({backend_url,signclick,glog,loaduser}){
    const [log, setlog] = useState(0);
    const Form = () => (
        <>
            <a href="/#">Login</a>
            <hr />
            <br />
            <Formik
                initialValues={{ email: "", password: ""}}
                onSubmit={(values,{setSubmitting,resetForm}) => {
                    setSubmitting(true);
                    fetch(backend_url + '/login', {
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({
                            username: values.email,
                            password: values.password
                        })
                    }).then(response=>response.json())
                    .then(data => {
                        if (data.status === 'sucess'){
                            loaduser(data);
                            signclick('home');
                        }
                        else setlog(1);
                    })
                    resetForm({values: ''});
                }}

                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .trim()
                        .required("Required")
                        .min(4,"too short")
                        .matches(/^[a-zA-Z0-9\_\.\@]+$/,"invalid username"),  // eslint-disable-line
                    password: Yup.string()
                        .required("No password provided."),
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
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`top ${errors.email && touched.email ? 'error' : 'nb'}`}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
    
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${errors.password && touched.password ? 'error' : 'nb'}`}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <br />
                            {(log === 1 && <p className='err'>Invalid username or Password</p>) || (glog === 1 && <p className='nt'>Google Login failed!</p>)}
                            <button type='submit' disabled={isSubmitting} className="btn1 login-btn">Log In</button>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
    return <Form/>
}
export default Login;
