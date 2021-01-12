import React, { useState, useEffect } from 'react';
import { FieldArray } from 'formik';
import { fallbackSkills } from '../../../util/data/static-data';
import { Chip, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormError from './FormError';


const Skills = () => {

	const [skills, setSkills] = useState([]);
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (event, values) => {
		if (event !== null) {
			if (event.key !== 'Enter') {
				setInputValue(event.target.value);
			}
		}
	}

	useEffect(() => {
		setSkills(fallbackSkills)
	},[inputValue, setInputValue])

	return(
		<FieldArray name='Skills'>
			{
				({ form, push, remove }) => {

					const handleChange = (event, values) => {
						event.stopPropagation();
						if (event.keyCode === 8) {
							remove(values.length);
						} else {
							push(values[values.length - 1]);
							setInputValue('');
						}
					}

					return(
						<React.Fragment>
							<Autocomplete
							onInputChange={handleInputChange}
					         inputValue={inputValue}  
							 multiple
							 freeSolo
					         options={skills}
					         onChange={handleChange}
					         value={form.values.Skills}
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
					           		label='Skills'
					           	/>
					         )}
					      />
					      <FormError name='Skills' />
						</React.Fragment>
					)
				}
			}
		</FieldArray>
	)
}

export default Skills;