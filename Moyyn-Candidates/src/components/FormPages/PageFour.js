import React from 'react';
import { Formik, Form } from 'formik';
import { pageFourValidation as validationSchema } from '../../util/validation/form-validation';
import { europeanCountries, europeanCities } from '../../util/data/static-data'; 
import { Grid, Typography, Divider } from '@material-ui/core'
import Checkbox from '../FormElements/CheckboxForm';
import DesiredEmployment from '../FormElements/DesiredEmployment';
import AutocompleteChips from '../FormElements/AutocompleteChipsForm';
import ProfilePicker from '../FormElements/ProfilePicker';
import Buttons from '../FormElements/Buttons';

const PageFour = ({ initialValues, handleFormChange }) => {

	const handleSubmit = (values) => {
		handleFormChange(values, 3, 'career')
	}

	const onKeyDown = (keyEvent) => {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	}

	return(
		<React.Fragment>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
					{
						({ values }) => {
							
							return(
								<Form onKeyDown={onKeyDown}>
									<Grid container spacing={5}>
										<Grid item xs={12}>
											<Typography
												variant="h6"
												style={{ marginBottom: "1rem" }}
												align="center"
												color='textSecondary'
											>
												Preferences
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Checkbox
												name='Relocation Willingness'
												label='I am willing to relocate'
												variant='body1'
											/>
										</Grid>
										<Grid item xs={12}>
											<Divider />
										</Grid>
										{
											values['Relocation Willingness'] && (
												<React.Fragment>
													<Grid item xs={12}>
														<AutocompleteChips
															name="Countries of Preference"
															label="Countries of preference"
															options={europeanCountries}
														/>
													</Grid>
													<Grid item xs={12}>
														<AutocompleteChips
															name="Cities of Preference"
															label="Cities of preference"
															options={europeanCities}
														/>
													</Grid>
													<Grid item xs={12}>
														<Divider />
													</Grid>
												</React.Fragment>
											)
										}


										<Grid item xs={12}>
											<DesiredEmployment />
										</Grid>
										<Grid item xs={12}>
											<Divider />
										</Grid>
										<Grid item xs={12}>
											<ProfilePicker  />
										</Grid>
										<Grid item xs={12}>
											<Buttons back={() => handleFormChange(values, 3, 'information', false)} />
										</Grid>
									</Grid>
								</Form>
							)
						}
					}
			</Formik>
		</React.Fragment>
	)
}

export default PageFour;