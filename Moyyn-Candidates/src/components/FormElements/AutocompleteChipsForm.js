import React from 'react';
import { FieldArray } from 'formik';
import { Chip, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormError from './FormError';

const AutocompleteChipsForm = ({ name, options, label, freeSolo=false, placeholder=null }) => {
	return(
		<FieldArray name={name}>
			{
				({ form, push, remove }) => {

					const handleChange = (event, values) => {
						event.stopPropagation();
						if (event.keyCode === 8) {
							remove(values.length);
						} else {
							push(values[values.length - 1])
						}
					}

					return(
						<React.Fragment>
							<Autocomplete 
							 multiple
					         options={options.map(option => option)}
							 onChange={handleChange}
							 freeSolo={freeSolo}
					         value={form.values[name]}
								closeIcon={false}
					         renderTags={(value, getTagProps) =>
					            value.map((option, index) => (
					               <Chip 
					              		{...getTagProps({ index })} 
					              		label={option}
					              		key={option} 
					              		onDelete={() => remove(index)}
					              	/>
					            ))
					         }
					         renderInput={(params) => (
					            <TextField 
					           		{...params} 
					           		variant="outlined" 
									   //label={label} 
									   placeholder={placeholder}
					           	/>
					         )}
					      />
					      <FormError name={name} />
						</React.Fragment>
					)
				}
			}
		</FieldArray>
	)
}

export default AutocompleteChipsForm;