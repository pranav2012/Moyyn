import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendRequest } from '../../util/helpers/helper-methods';
import {
	Grid,
	Typography,
	TextField,
	Box,
	Button,
	Link,
	FormHelperText,
	useMediaQuery,
} from '@material-ui/core';

const EnterEmail = ({ email, setEmail, setError, setIsLoading, setSuggestions }) => {

	const [name, setName] = useState('')
	const [isNotFound, setIsNotFound] = useState(false);

	const screenAtSmall = useMediaQuery("(max-width:600px)");
	const history = useHistory();

	const handleEmailChange = (event) => {
		if (isNotFound) {
			setIsNotFound(false);
		}
		setEmail(event.target.value)
	}

	const handleRequest = () => {
		sendRequest('/email', 'POST', { email })
			.then(data => {
				if (data.found) {
					setName(data.name);
				} else {
					setIsNotFound(true);
				}
			})
			.catch(err => setError(true))
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleRequest();
		}
	}

	const handleNameApprove = () => {
		setIsLoading(true);

		sendRequest('/suggestions', 'POST', { email: email })
			.then(data => {

				if (data.found) {
					setSuggestions(data.suggestions)
					setIsLoading(false);
					history.push('/dashboard')
				} else {
					setIsLoading(false);
					history.push('/candidate/partners')
				}
			})
			.catch(err => setError(true));
	}

	return (
		<React.Fragment>
			<Grid container spacing={7}>
				{
					!name && (
						<React.Fragment>
							<Grid item xs={12}>
								<Typography color='textSecondary' align='center'>
									Check for new job matches
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Grid container>
									<Grid item xs={12} >
										<Box width='100%' display='flex' justifyContent='center'>
											<Box width='80%' display='flex' justifyContent='center'>
												<TextField
													value={email}
													onChange={handleEmailChange}
													onKeyDown={handleKeyDown}
													fullWidth
													placeholder='Enter email address'
													inputProps={{
														style: { textAlign: "center", paddingBottom:"0.8rem" },
													}}
												/>
											</Box>
										</Box>
										<div className='flex justify-center items-center mt4'>
												<Button
													fullWidth
													className='moyynButton--main mb4'
													onClick={handleRequest}
												>
												Check {screenAtSmall?'':"Jobs"}
												</Button>
										</div>
									</Grid>
									
									{
										isNotFound && (
											<Grid item xs={12}>
												<Box width='100%' display='flex' justifyContent='center'>
													<FormHelperText style={{ color: 'red' }}>
														*Email not found
													</FormHelperText>
												</Box>
											</Grid>
										)
									}
								</Grid>
							{/* </Grid>
							{
								screenAtSmall && (
									<Grid item xs={12}>
										<Button
											fullWidth
											className='moyynButton--main'
											onClick={handleRequest}
										>
											Next
										</Button>
									</Grid>
								)
							}
							<Grid item xs={12}> */}
								<Typography variant='subtitle2' color='textSecondary' align="center">
									New candidate? Click{" "}
									<Link
										onClick={() => history.push('/application')}
										style={{ cursor: "pointer" }}
									>
										{" "}
										here
									</Link>
								</Typography>
							</Grid>
						</React.Fragment>
					)
				}
				{
					name && (
						<React.Fragment>
							<Grid item xs={12}>
								<Typography variant='h6' color='textSecondary' align='center'>
									Are you {name}?
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Box width='100%' display='flex' justifyContent='center'>
									<Button onClick={() => setName('')} style={{ marginRight: '1rem', textTransform: 'none' }} className='moyynButton--secondary'>
										{
											screenAtSmall ? 'No' : 'No, let me try again'
										}
									</Button>
									<Button onClick={() => handleNameApprove()} style={{ marginLeft: '1rem', textTransform: 'none' }} className='moyynButton--main'>
										{
											screenAtSmall ? 'Yes' : "Yes, let's continue"
										}
									</Button>
								</Box>
							</Grid>
						</React.Fragment>
					)
				}
			</Grid>
		</React.Fragment>
	)
}

export default EnterEmail;