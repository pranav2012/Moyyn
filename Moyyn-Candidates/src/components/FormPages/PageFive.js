import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { pageFiveValidation as validationSchema } from '../../util/validation/form-validation';
import { careerLevelOptions, industries } from '../../util/data/static-data'; 
import { Grid } from '@material-ui/core'
import SelectMenu from '../FormElements/SelectMenuForm';
import WorkExperience from '../FormElements/WorkExperience';
import Languages from '../FormElements/Languages';
import AutocompleteChips from '../FormElements/AutocompleteChipsForm';
import Buttons from '../FormElements/Buttons';
import MissingParts from '../FormElements/MissingParts';
import { fallbackSkills } from '../../util/data/static-data';


const PageFive = ({ initialValues, handleFormChange, formComplete }) => {

	const [alert, setAlert] = useState([]);

	const handleSubmit = (values) => {
		const [isComplete, missingParts] = formComplete();

		if (isComplete) {
			handleFormChange(values, 4, false, true, true);
		} else {
			setAlert(missingParts);
		}
		//handleFormChange(values, 4, false, true, true);
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
								<div className='bg-white c-shadow'>
										<Form onKeyDown={onKeyDown}> 
											<Grid container spacing={3} style={{padding:"2rem"}}>
												{/* <Grid item xs={12}>
													<Typography 
														variant="h6"
														style={{ marginBottom: "1rem" }}
														align="center"
														color='textSecondary'
													>
														Career and skills
													</Typography>
												</Grid> */}
												<Grid item xs={12}>
													<SelectMenu
														name='Career Level'
														label='Career level'
														options={careerLevelOptions}
													/>
												</Grid>
												<Grid item xs={12} className="lsv">
													<AutocompleteChips 
														name='Industries'
														placeholder='Industries'
														options={industries}
													/>
												</Grid>
												<Grid item xs={12} className="lsv"> 
													{/* <Skills />  */}
													<AutocompleteChips freeSolo={true} 
														name='Skills'
														//label='Skills'
														placeholder="Skills"
														options={fallbackSkills}
													/> 
												</Grid>
												<Grid item xs={12}>
													<WorkExperience />
												</Grid>
												<Grid item xs={12} >
													<Languages />
												</Grid>
												<Grid item xs={12}>
													<MissingParts alert={alert}/>
												</Grid>
												<Grid item xs={12}>
													<Buttons back={() => handleFormChange(values, 4, 'preferences', false)} submit />
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

export default PageFive;