import React from "react";
import { Field } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import FormError from './FormError';

const FormikPhoneNumber = ({ name }) => {

	return (
		<React.Fragment>
			<Field name={name}>
				{({ form, field, meta }) => {
					return (
						<MuiPhoneNumber
							inputProps={{ ...field }}
							fullWidth
							variant="outlined"
							defaultCountry={"de"}
							placeholder="+49 30 901820"
							error={false}
							label ="Phone Number"
						/>
					);
				}}
			</Field>
			<FormError name={name}/>
		</React.Fragment>
	);
};

export default FormikPhoneNumber;
