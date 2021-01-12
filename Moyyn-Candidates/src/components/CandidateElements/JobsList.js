import React from 'react';
import { sendRequest } from '../../util/helpers/helper-methods';
import {
	Grid, 
	Typography,
	FormControlLabel,
	Checkbox,
	Link,
	Button,
	useMediaQuery
} from '@material-ui/core';
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';

const JobsList = ({ email, suggestions, moveToPage, form, setForm }) => {

	// console.log(form)
	const screenAtSmall = useMediaQuery("(max-width:600px)");
	const neonStyles = useNeonCheckboxStyles();

	const handleCheck = (code) => {
		if (form.includes(code)) {
			setForm((prevState) => prevState.filter((c) => c !== code));
		} else {
			setForm((prevState) => [...prevState, code]);
		}
	};

	const handleSubmit = () => {
		//send form to backend
		sendRequest('/jobs', 'POST', {
			email,
			jobs: form
		})
		//move to partner suggestions
		moveToPage('partner-suggestions')
	}

	const viewJob = (index) => {
		moveToPage(`suggestions/job-description/${index}`)
	}

	return(
		<React.Fragment>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Typography color='textSecondary'>
						Please pick the jobs that have been matched to your profile.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color='textSecondary'>					
						To view job description click on the job title.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='subtitle2' color='textSecondary'>					
						If you don't see a fitting match, please proceed by selecting 'General Application' and we will get back to you when we have new job offers published by our clients.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12}>
							<FormControlLabel
					        	control={
					          	<Checkbox
					          		checked={form.includes('GA')}
										onChange={() => handleCheck('GA')}
					          		//
					            	disableRipple
					            	classes={neonStyles}
					             	checkedIcon={<span />}
					             	icon={<span />}
					           	/>
					         }
					         label={<Typography>General Application</Typography>}
					      />
						</Grid>
						{
							suggestions.map((suggestion, i) => {
								return(
									<React.Fragment key={i}>
										<Grid item xs={12}>
											<FormControlLabel
												control={
													<Checkbox
														checked={form.includes(suggestion.Code)}
														onChange={() => handleCheck(suggestion.Code)}
														//
														disableRipple
					            					classes={neonStyles}
					             					checkedIcon={<span />}
					             					icon={<span />}
													/>
												}
												label={
													<Link
														component="button"
														onClick={() => viewJob(i)}
													>
														<Typography>
															{suggestion.Title}, {suggestion.Location[0]} {suggestion.Location[1]}
														</Typography>
													</Link>
												}
											/>
										</Grid>
									</React.Fragment>
								)
							})
						}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button
						style={{ textTransform: 'none' }} 
						className='moyynButton--main'
						onClick={handleSubmit}
						fullWidth={screenAtSmall}
					>
						{
							screenAtSmall ? "Submit and continue" : "Submit and continue to partner matches"
						}
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default JobsList;