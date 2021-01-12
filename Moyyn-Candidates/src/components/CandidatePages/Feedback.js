import React, { useState } from 'react'
import { sendRequest } from '../../util/helpers/helper-methods';
import {
	Grid,
	Typography,
	TextareaAutosize,
	Box,
	Button,
	useMediaQuery
} from '@material-ui/core';
import { goToURL } from '../../util/helpers/helper-methods';

const Feedback = ({ email }) => {

	const screenAtSmall = useMediaQuery("(max-width:600px)");
	const [feedback, setFeedback] = useState('');

	const handleSubmitFeedback = () => {
		//send feedback to backend
		if (feedback.length > 0) {
			sendRequest('/feedback', 'POST', {
				email,
				feedback
			});
		}
		goToURL("https://moyyn.com", false);
	}

	return(
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography
					color='textSecondary'
					style={{ marginBottom: "2rem" }}
					align="center"
				>
					Please take a moment to give us 
					 feedback about your job matches
				</Typography>
				<TextareaAutosize
					value={feedback}
					onChange={(e) => setFeedback(e.target.value)}
					rowsMin={5}
					style={{ width: "100%", fontSize: "1.5rem" }}
				/>
				<Box m={2} display="flex" justifyContent="center">
					<Button
						className="moyynButton--main"
						onClick={handleSubmitFeedback}
						style={{ textTransform: 'none' }}
					>	
						{
							screenAtSmall ? 'Send' : "Send and go back to homepage"
						}
					</Button>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Feedback;