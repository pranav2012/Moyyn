import React from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { sendRequest } from '../../util/helpers/helper-methods';
import '../../Svg/FormImage1';
import { pageOneValidation as validationSchema } from '../../util/validation/form-validation';
import {
	Grid,
	Link,
	Typography,
	Box,
	Button,
	useMediaQuery
} from '@material-ui/core'
import TextField from '../FormElements/TextFieldForm';
import Checkbox from '../FormElements/CheckboxForm';
import '../FormElements/language.css'
import FormImage1 from '../../Svg/FormImage1';
import Switch from '../FormElements/SwitchForm';

const PageOne = ({ initialValues, handleFormChange }) => {

	const history = useHistory();
	const screenAtSmall = useMediaQuery("(max-width:600px)");

	const handleSubmit = (values, { setErrors }) => {
		sendRequest('/email', 'POST', { email: values.Email })
			.then(data => {
				if (data.found) {
					setErrors({ Email: '*Email address already in use' })
				} else {
					handleFormChange(values, 0, 'cv')
				}
			})
	}

	return (
		<React.Fragment>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{
					({ values }) => {

						return (
							<div className="flex flex-row-l self-start flex-row-m flex-column">
								<div className="flex flex-1 mt5-m mt2 mt5-l" >
									<div className="tc">
										<p className='f3-l f4-m f6 tc gray'>The journey to your next job starts here</p>
										<FormImage1/>
										<p className='f5-l f6-m f7 tc gray'>Join  our talent pool for free and let our AI find you the perfect job</p>
									</div>
									<hr className='vh-75-l vh-50-m ml4' style={{ border: "1px solid rgb(249, 246, 246)" }} />
								</div>

								<div className='flex-1 flex-2-m flex-2-mo bg-white br2 pb6-l pb4-m pb4 pt3-l pt5-m pt2'>
										<Form>
											<Grid className="lsv-pp" container spacing={4} item xs={12} style={{margin:"0", padding: "1rem", paddingTop:"0"}} >
												<Grid item xs={12} style={{ paddingTop: "0" }}>
													<Typography
														variant="h6"
														style={{ marginBottom: "1rem" }}
														align="center"
														color='textSecondary'
													>
														Apply Now
													</Typography>
												</Grid>
												<Grid item xs={12}>
													<Box width='100%' display='flex' justifyContent='center'>
														<Box width={screenAtSmall ? '100%' : '90%'} display='flex' justifyContent='center'>
															<Grid container spacing={3}>
																<Grid item xs={12}>
																	<TextField
																		name='Email'
																		placeholder="Email"
																	/>
																</Grid>

																{/* <Grid item xs={12}>
																<TextField 
																	name='Password'
																	placeholder='Password'
																/>
															</Grid>

															<Grid item xs={12}>
																<TextField 
																	name='Confirm Password'
																	placeholder='Confirm Password'
																/>
															</Grid> */}

																<Grid item xs={12} md={6}>
																	<TextField
																		name='First Name'
																		placeholder='First Name'
																	/>
																</Grid>
																<Grid item xs={12} md={6}>
																	<TextField
																		name="Last Name"
																		placeholder="Last Name"
																	/>
																</Grid>

																<Grid item xs={12}>
																	{/* <div className='flex items-center'>
																		<span className='mr1 gray f5-l f5-m f6'>Currently Looking For a Job</span>
																		<label className="switch" htmlFor="job">
																			<input name="Currently Looking For Job" type="checkbox" id="job" />
																			<div className="slider round"></div>
																		</label>
																	</div> */}
																	<Switch 
																name="Currently Looking For Job"
																label="Currently Looking For a Job"
																variant='body1'
															/>
																</Grid>

																<Grid item xs={12}>
																	<Checkbox
																		name='TermsAndPrivacy'
																		label={
																			<React.Fragment>
																				By submitting the application I confirm I have read
																			and agreed to the{" "}
																				<Link
																					href="https://moyyn.com/terms-and-conditions-2/"
																					rel="noopener"
																					target="_blank"
																					style={{ cursor: "pointer" }}
																				>
																					Terms of Use
																			</Link>{" "}
																				and{" "}
																				<Link
																					href="https://moyyn.com/privacy/"
																					rel="noopener"
																					target="_blank"
																					style={{ cursor: "pointer" }}
																				>
																					Privacy Policy
																			</Link>
																			.{" "}
																			</React.Fragment>
																		}
																	/>
																</Grid>
															</Grid>
														</Box>
													</Box>
												</Grid>
												<Grid item xs={12}>
													<Box display='flex' justifyContent='center'>
														<Button type='submit' className='moyynButton--main'>
															Next
														</Button>
													</Box>
												</Grid>
												<Grid item xs={12}>
													<Typography variant='subtitle2' color='textSecondary' align="center">
														Already submitted an application? Check application status{" "}
														<Link
															onClick={() => history.push('/candidate')}
															style={{ cursor: "pointer" }}
														>
															{" "}
													here
												</Link>
													</Typography>
												</Grid>
											</Grid>
										</Form>
									</div>
							</div>
						)
					}
				}
			</Formik>
		</React.Fragment>
	)
}

export default PageOne;