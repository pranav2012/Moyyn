import React, { useState, useEffect } from 'react';
import { FieldArray } from 'formik';
import { fallbackSkills } from '../../util/data/static-data';
import { sendRequest } from '../../util/helpers/helper-methods';
import { Chip, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormError from './FormError';

const twoChars = ['dv', 'f#', '3D', 'C', 'UI', 'QA', 'C#', 'vi', 'k2', 'Aq', 'UX', 'IT', 'R', 'P6', 'Qt', 'Pc', '3G', 'Im', 'NX', 'cx', 'cq', 'ir', 'PR', '2D', 'T1', 'Ef', 'du', 'QC', 'ml', 'tk', '4G', 'mf'];

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
		if (inputValue.length === 0) {
			setSkills([])
		} else if (inputValue.length < 3) {
			setSkills(twoChars)
		} else if (inputValue.length === 3) {
			sendRequest('/skills', 'POST', {skills_like: inputValue})
				.then(data => {
					if (data.found) {
						setSkills(data.skills)
					} else {
						setSkills([])
					}
				})
				.catch(err => setSkills(fallbackSkills))
		}
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
							 options={skills}
							 freeSolo={true}
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