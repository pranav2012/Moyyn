import React from 'react';
import { 
	Typography,
	Link
} from '@material-ui/core';

const ErrorPage = ({ setError }) => {

	const handleClick = () => {
		setError(false)
	}

	return(
		<React.Fragment>
			<Typography align="center" color='textSecondary'>
				Sorry, something went wrong, please{" "}
				<Link
					component='button'
					onClick={handleClick}
					style={{ cursor: "pointer" }}
				>
					<Typography>try again</Typography>
				</Link>{" "}
				or contact us at Talent@moyyn.com
			</Typography>
		</React.Fragment>
	)
}

export default ErrorPage;