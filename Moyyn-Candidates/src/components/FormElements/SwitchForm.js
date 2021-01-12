import React from "react";
import { Field } from "formik";
import { FormControlLabel,Typography, Switch } from "@material-ui/core";
import FormError from './FormError';


const SwitchForm = ({ name, label, variant = 'caption' }) => {

	return (
		<Field name={name}>
			{({ field, meta, form }) => {
				return (
					<React.Fragment>
						<FormControlLabel
							label={<Typography variant={variant} color='textSecondary'>{label}</Typography>}
							control={
								<Switch
									{...field}
									checked={field.value}
									color="primary"
									disableRipple

								/>
							}
						></FormControlLabel>
						<FormError name={name} />
					</React.Fragment>
				);
			}}
		</Field>
	);
};

export default SwitchForm;
