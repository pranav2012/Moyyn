import React from 'react';
import { Field } from 'formik';
import { TextField } from '@material-ui/core';
import FormError from './FormError';

const DateForm = ({ name, label, variant = 'outlined', placeholder = 'dd/mm/yyyy'}) => {

	const reverseDate = (str) => str.split('-').reverse().join('-');

	const handleChange = (event, obj) => {
		let date = event.target.value;
		date = reverseDate(date);

		obj.setFieldValue(name, date)
	}
	
	return(
		<React.Fragment>
			<Field name={name}>
				{
					({ form, field, meta }) => {

						return(
							<TextField 
								{...field}	
								onChange={(e) => handleChange(e, form)}
								value={reverseDate(field.value)}						
								label={label} 
								variant={variant}
					         placeholder={placeholder}
								fullWidth
								type="date"
								InputLabelProps={{
							      shrink: true,
							   }}
							   InputProps={{
							   	style: {color: '#6c757d'}
							   }}
							/>				
						)
					}
				}
			</Field>
			<FormError name={name} />
		</React.Fragment>
	)
}

export default DateForm;