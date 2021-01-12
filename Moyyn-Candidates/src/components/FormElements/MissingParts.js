import React from 'react';
import Alert from '@material-ui/lab/Alert';

const returnName = (name) => {
	switch (name) {
		case 0:
			return 'Credentials';
		case 1: 
			return 'CV';
		case 2:
			return 'Personal information';
		case 3:
			return 'Preferences';
		default:
			break;
	}
}

const MissingParts = ({ alert }) => {

	if (alert.length < 1) {
		return(
			<React.Fragment>
			</React.Fragment>
		)
	} else {

		let missingPartsString = '';

		let tempArray = alert.filter(num => num !== 4);

		tempArray.forEach(part => {
			missingPartsString += ` ${returnName(part)},`
		})

		return(
			<React.Fragment>
				<Alert severity="warning">
					Following parts have missing required fields: 
					{
						missingPartsString
					}
				</Alert>
			</React.Fragment>
		)
	}

}

export default MissingParts