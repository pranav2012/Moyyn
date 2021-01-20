import React from 'react';
import { Formik, Form } from 'formik';
import { pageThreeValidation as validationSchema } from '../../util/validation/form-validation';
import { countriesArray, citiesArray, visaOptions } from '../../util/data/static-data';
import { Grid } from '@material-ui/core';
import TextField from '../FormElements/TextFieldForm'; 
import Checkbox from '../FormElements/CheckboxForm';
import Autocomplete from '../FormElements/AutocompleteForm';
import SelectMenu from '../FormElements/SelectMenuForm';
import PhoneNumber from '../FormElements/PhoneNumberForm';
import DateForm from '../FormElements/DateForm';
import Buttons from '../FormElements/Buttons';

const PageThree = ({ initialValues, handleFormChange }) => {

	const handleSubmit = (values) => {
		handleFormChange(values, 2, 'preferences')
	}
	
	return(
		<React.Fragment>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
					{
						({ values }) => {

							return(
								<div className='bg-white c-shadow'>
										<Form>
										<Grid container spacing={5} style={{padding:"2rem"}}>
											{/* <Grid item xs={12}>
												<Typography
													variant="h6"
													style={{ marginBottom: "1rem" }}
													align="center"
													color='textSecondary'
												>
													Personal Info
												</Typography>
											</Grid> */}
											{/*Left*/}
											<Grid item xs={12} lg={6} >
												<Grid container spacing={5}>
													<Grid item xs={12} className="lsv">
														<Autocomplete freeSolo={false}
															options={countriesArray}
															optionLabel="name"
															name="Country of Residence"
															placeholder="Country of Residence"
														/>
													</Grid>
													<Grid item xs={12}>
														<SelectMenu
															name="Visa Status"
															label="Visa Status"
															options={visaOptions}
														/>
													</Grid>
													<Grid item xs={12}>
													{/* <div className='flex items-center'>
														<span className='mr1 gray'>Currently Employed</span>
														<label className="switch" htmlFor="employed">
															<input type="checkbox" name="Currently Employed" id="employed"/>
															<div className="slider round"></div>
														</label>
													</div> */}
														<Checkbox
															name="Currently Employed"
															label="Currently Employed"
															variant='body1'
														/>
													</Grid>
													<Grid item xs={12} className="lsv-pp">
														<PhoneNumber name="Contact Number" />
													</Grid>
												</Grid>
											</Grid>
											{/*Right*/}
											<Grid item xs={12} lg={6}>
												<Grid container spacing={5}>
													<Grid item xs={12} className="lsv">
														<Autocomplete 
															options={citiesArray}
															optionLabel="city"
															name="City of Residence"
															placeholder="City of Residence"
														/>
													</Grid>
													<Grid item xs={12}>
														<DateForm
															name="Earliest Joining Date"
															label="Earliest Joining Date"
														/>
													</Grid>
													<Grid item xs={12}>
													{/* <div className='flex items-center'>
														<span className='mr1 gray'>EU Driver's License</span>
														<label className="switch" htmlFor="dl">
															<input name="Driver's License" type="checkbox" id="dl"/>
															<div className="slider round"></div>
														</label>
													</div> */}
														<Checkbox
															name="Driver's License"
															label="EU Driver's License"
															variant='body1'
														/>
													</Grid>
													<Grid item xs={12} className="lsv-pp">
														{/*eslint-disable-next-line*/}
														<TextField
															name="Notice Period"
															label="Notice Period (In Months)"
															type="number"
															placeholder="Notice Period (In Months)"
															// eslint-disable-next-line
															disabled={!values['Currently Employed']}
														/>
													</Grid>
												</Grid>
											</Grid>
											<Grid item xs={12}>
												<Buttons back={() => handleFormChange(values, 2, 'cv', false)} />
											</Grid>
										</Grid>
									</Form>
									</div>
							)
						}
					}
			</Formik>
		</React.Fragment>
	)
}

export default PageThree;