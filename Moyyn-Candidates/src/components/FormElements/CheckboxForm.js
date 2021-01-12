import React from "react";
import { Field } from "formik";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';
import FormError from './FormError';

const CheckboxForm = ({ name, label, variant = 'caption' }) => {
	const neonStyles = useNeonCheckboxStyles();

	return (
		<Field name={name}>
			{({ field, meta, form }) => {
				return (
					<React.Fragment>
						<FormControlLabel
							label={<Typography variant={variant} color='textSecondary'>{label}</Typography>}
							control={
								<Checkbox
									{...field}
									checked={field.value}
									color="primary"
									disableRipple
					            classes={neonStyles}
					            checkedIcon={<span />}
					            icon={<span />}
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

export default CheckboxForm;
