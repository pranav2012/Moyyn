import React from 'react';
import { Field } from 'formik';
import { TextField } from '@material-ui/core';
import FormError from './FormError';

const TextFieldForm = ({ name, label, type, shrink , variant = 'outlined', multiline = false, rows, placeholder = null, disabled = false }) => {

	return(
		<React.Fragment>
			<Field name={name}>
				{
					({ field, meta }) => {
						return(
							<TextField 
								{...field}							
							//	label={label} 
								variant={variant}
					         placeholder={placeholder}
								type={type}
					         multiline={multiline}
					         rows={rows}
								fullWidth
								InputLabelProps={{
								shrink: shrink,
					         }}
					         disabled={disabled}
							/>				
						)
					}
				}
			</Field>
			<FormError name={name} />
		</React.Fragment>
	)
}

export default TextFieldForm;