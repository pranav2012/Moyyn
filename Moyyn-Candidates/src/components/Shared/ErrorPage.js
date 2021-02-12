import React from 'react';
import { 
	Typography,
	Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const ErrorPage = ({ setError }) => {

	let history = useHistory();

	const handleClick = () => {
		setError(false);
		history.push('/application');
	}

	return(
		<React.Fragment>
			<Typography align="center" className="w-80" color='textSecondary'>
				Thank you for your interest in applying to our Talent Pool. There has been an issue while submitting your application. 
				Please provide your email address to get the application link once the issue is solved.
				<br/><br/>
					<Button
					onClick={handleClick}
					variant="outlined"
					style={{backgroundColor:"#265CFF",color:"white",paddingBottom:"2px"}}
					className="c-shadow dim w-20"
				>
					<Typography>Next</Typography>
				</Button>{" "}
			</Typography>
		</React.Fragment>
	)
}

export default ErrorPage;