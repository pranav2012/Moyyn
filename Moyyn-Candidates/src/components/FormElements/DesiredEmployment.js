import React from "react";
import { Field } from "formik";
import {
	Grid,
	Typography,
	Checkbox,
	FormControlLabel,
} from "@material-ui/core";
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';
import FormError from './FormError';

const DesiredEmployment = () => {
	const neonStyles = useNeonCheckboxStyles();

	return(
		<Field name="Desired Employment">
 			{({ form, meta, field }) => {

 				return(
					<Grid container>
						<Grid item xs={12}>
							<Typography
								color="textSecondary"
								variant="h6"
								style={{ fontSize: "1rem", marginBottom: '0.5rem' }}
							>
								Type of desired employment:
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Full Time"
								{...field}
								name="Desired Employment.Full Time"
								control={
									<Checkbox
										checked={
											form.values["Desired Employment"]['Full Time']
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Part Time"
								{...field}
								name="Desired Employment.Part Time"
								control={
									<Checkbox
										checked={
											form.values["Desired Employment"]['Part Time']
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Remote"
								{...field}
								name="Desired Employment.Remote"
								control={
									<Checkbox
										checked={
											form.values["Desired Employment"].Remote
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Freelancer"
								{...field}
								name="Desired Employment.Freelancer"
								control={
									<Checkbox
										checked={
											form.values["Desired Employment"].Freelancer
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormError name="Desired Employment" />
						</Grid>
					</Grid>
				)}
			}
		</Field>
	);
}

export default DesiredEmployment;
