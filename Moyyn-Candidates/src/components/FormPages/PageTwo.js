import React from 'react';
import { Formik, Form } from 'formik';
import { pageTwoValidation as validationSchema } from '../../util/validation/form-validation';
import { Grid, Typography } from '@material-ui/core';
import ResumeUpload from '../FormElements/ResumeUpload';
import Buttons from '../FormElements/Buttons';
import { AvailableJobs } from '../../util/data/AvailableJobs';
import AutocompleteChips from '../FormElements/AutocompleteChipsForm';
import ResumeUploadGer from '../FormElements/ResumeUploadGer';


const PageTwo = ({ initialValues, handleFormChange }) => {

	const handleSubmit = (values) => {
		handleFormChange(values, 1, 'information')
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

						//console.log(values)
						return (
							<div className='bg-white c-shadow'>
								<Form>
									<Grid container spacing={3} xs={12} style={{ padding: "2rem" }}>
										{/* <Grid item xs={12}>
												<Typography
													variant="h6"
													style={{ marginBottom: "1rem" }}
													align="center"
													color='textSecondary'
												>
													Upload CV
												</Typography>
											</Grid> */}
										<div className='flex'>
											<div className='mr4 flex-1'><ResumeUpload /></div>
											<div className='flex-1'><ResumeUploadGer /></div>
										</div>
										<Grid item xs={12}>
											<Typography
												variant="h6"
												style={{ marginBottom: "1rem" }}
												align="center"
												color='textSecondary'
												className="f4-l f5-m f6"
											>
												Positions applying for
													</Typography>

											<Grid item xs={12} className='lsv'>
												<AutocompleteChips
													name="Desired Position"
													placeholder="Desired Positions"
													options={AvailableJobs}
												/>
											</Grid>

										</Grid>
										<Grid item xs={12}>

											<Buttons back={() => handleFormChange(values, 1, true, false)} />
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

export default PageTwo;