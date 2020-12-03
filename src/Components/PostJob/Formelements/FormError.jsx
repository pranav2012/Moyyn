import React from 'react';
import { ErrorMessage } from 'formik';
import {
	FormHelperText, 
} from '@material-ui/core';

const FormError = ({ name }) => {
	return(
		<ErrorMessage name={name}>
			{
				(error) => {
					return(
						<FormHelperText style={{color: 'red'}}>
							{error}
						</FormHelperText>
					)
				}
			}
		</ErrorMessage>
	)
}

export default FormError;