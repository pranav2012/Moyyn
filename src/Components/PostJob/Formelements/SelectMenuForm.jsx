import React from "react";
import { TextField } from "@material-ui/core";
import { Field } from "formik";
import FormError from './FormError';

const FormikSelectMenu = ({ name, label, options }) => {

	return (
		<React.Fragment>
			<Field name={name}>
				{({ field, meta }) => {
					return (
						<TextField
							{...field}
							label={label}
							fullWidth
							select
							SelectProps={{
								native: true,
							}}
							variant="outlined"
						>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.name}
								</option>
							))}
						</TextField>
					);
				}}
			</Field>
			<FormError name={name} />
		</React.Fragment>
	);
};

export default FormikSelectMenu;
