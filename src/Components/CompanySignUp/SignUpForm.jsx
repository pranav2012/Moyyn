import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {Signupformvalidation, SignupEditformvalidation}  from "../../util/validation/form-validation";
import 'tachyons';
import MuiAlert from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function SignUpForm({backend_url, companyid, setregistered,signupforminitialvalues,editcompany}) {
    
    let history = useHistory();

    const [email, setemail] = useState("");
    const [err,seterr] = useState({
        is:false,
        msg:""
    });

    useEffect(()=>{
        if(email !==""){
            fetch(backend_url + '/company/validateEmail', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    email: email
                })
            }).then(res=>res.json())
            .then((data)=>{
                if(data.success){
                    if(!data.result.Availability){
                        seterr({
                            is:true,
                            msg:"Account already exist's with this email"
                        })
                    }
                }
            })
        }
    },[email,backend_url,err]);

    const [IsSnackbarOpen, setIsSnackbarOpen] = useState(true);

    return (
    <div>
        <Formik
            initialValues={signupforminitialvalues}
            enableReinitialize={true}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                fetch(`${backend_url}/company/${editcompany?'update':'create'}`, {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({
                        _id:companyid,
                        company: values.company, 
                        name: values.name,
                        website: values.website,
                        location:values.location,
                        email: values.email, 
                        phone: values.phone,
                        password:values.password
                    })
                }).then(response=>response.json())
                .then(data => {
                    // console.log(data)
                    if(data.success === true){
                        !editcompany?setregistered(true):console.log();
                        setIsSnackbarOpen({
                            state:true,
                            error:false,
                            msg:data.message
                        })
                        history.push('/conformation');
                    }
                    else{
                        setIsSnackbarOpen({
                            state:true,
                            error:true,
                            msg:data.message[0].message[0]
                        })
                    }
                }).catch(console.log('cant register!'));
                resetForm({values: ''});
            }}

            validationSchema={editcompany?SignupEditformvalidation:Signupformvalidation}
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

                const handleEmail = (e) => {
                    if(editcompany){
                        handleChange(e);
                    } 
                    else{
                        setemail(e.target.value);
                        handleChange(e);
                    }
                }

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
                            disabled={editcompany}
                            onChange={(e)=>handleEmail(e)}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${((errors.email && touched.email) || err.is )  ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {((errors.email && touched.email) || err.is ) && (
                            <p className="input-feedback">{err.is?err.msg:errors.email}</p>
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
                        {!editcompany?
                        <>
                        <input
                            type="password"
                            name="password"
                            placeholder={editcompany?" Confirm password to edit details":" Password"}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-60-l w-90 w-80-m ${errors.password && touched.password ? 'error mt0 mb0' : 'mt2-l mb2-l mt1 mb1'}`}
                        />
                        {errors.password && touched.password && (
                            <p className="input-feedback">{errors.password}</p>
                        )}   
                        </>:<></>}
                        <br/>

                        <button type='submit' disabled={isSubmitting} style={{background:"#265cff"}} className="mt3 pointer fw6 f7 f6-l w-30-l w-40-m w-50 bn link dim br1 ph3 pv2 mb2 dib white">{editcompany?"Make Changes":"Submit"}</button>
                    </form>
                </>
                );
            }}
        </Formik>
        <Snackbar
			open={IsSnackbarOpen.state}
			autoHideDuration={5000}
			onClose={() => setIsSnackbarOpen(false)}
		>
		<MuiAlert
            elevation={6}
            variant="filled"
            onClose={() => setIsSnackbarOpen(false)}
            severity={IsSnackbarOpen.error?"error":"success"}
		>
		{IsSnackbarOpen.msg}
		</MuiAlert>
		</Snackbar>
    </div>
    );
}

export default SignUpForm;