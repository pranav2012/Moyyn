import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import FormError from './FormError';

const FormikAutocomplete = ({ name, label, options, optionLabel, freeSolo = true,placeholder=null }) => {

	return (
		<React.Fragment>
			<Field name={name}>
				{({ form, field, meta }) => {

					//console.log('autocomplete value: ',form.values[name])

					return (
						<Autocomplete
							options={options}
							getOptionLabel={(option) => option[optionLabel]}
							fullWidth
							freeSolo={freeSolo}
							inputValue={form.values[name]}
							onInputChange={(event, newInputValue) => {
								form.setFieldValue(name, newInputValue);
							}}
							renderInput={(params) => (
								<TextField
									placeholder={placeholder}
									{...params}
									{...field}
									variant="outlined"
								/>
							)}
						/>
					);
				}}
			</Field>
			<FormError name={name} />
		</React.Fragment>
	);
};

export default FormikAutocomplete;
