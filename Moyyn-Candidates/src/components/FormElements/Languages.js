import React, { useState } from "react";
import { FieldArray, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { languagesObject } from "../../util/data/static-data";
import {
	Grid,
	TextField,
	MenuItem,
	List,
	ListItem,
	ListItemText,
	FormHelperText,
	Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import './language.css';

const languagesArray = Object.values(languagesObject).map(
	(option) => option.name
);

const useStyles = makeStyles((theme) => ({
	errorText: {
		color: "red",
	},
}));

const levels = ["A1","A2", "B1", "B2", "C1", "C2", "Native"];

const Languages = () => {
	const custom = useStyles();

	const [valueLang, setValueLang] = useState("");
	const [inputValueLang, setInputValueLang] = useState("");

	return (
		<FieldArray name="Languages">
			{({ form, push, remove }) => {
				const handleLevelSelect = (level) => {
					if (!form.values.Languages.includes((item) => (item.name = valueLang))) {
						push({
							language: valueLang,
							level,
						});
						setValueLang("");
					}
				};
				return (
					<Grid container spacing={1}>
						<Grid item xs={7} className="lsv">
							<Autocomplete
								options={languagesArray}
								value={valueLang}
								onChange={(event, newValue) => {
									setValueLang(newValue);
								}}
								inputValue={inputValueLang}
								onInputChange={(event, newInputValue) => {
									setInputValueLang(newInputValue);
								}}
								renderInput={(params) => {
									return (
										<TextField
											{...params}
											label="Languages"
											variant="outlined"
										/>
									);
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								name="Languages"
								onBlur={form.handleBlur}
								fullWidth
								select
								className='lvl'
								variant="outlined"
								label="Level"
								disabled={!valueLang}
								value=""
							>
								{levels.map((level) => (
									<MenuItem
										key={level}
										onClick={() => handleLevelSelect(level)}
									>
										{level}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<ErrorMessage name="Languages">
							{(error) => {
								return (
									<FormHelperText className={custom.errorText}>
										{error}
									</FormHelperText>
								);
							}}
						</ErrorMessage>
						<Grid item xs={12}>
							<List>
								{form.values.Languages.map((item, i) => {
									return (
										<ListItem key={i} button divider>
											<ListItemText
												primary={
													<React.Fragment>
														<Typography
															component="span"
															variant="subtitle2"
															//className={classes.inline}
															color="textPrimary"
														>
															{item.language}
															<span
																style={{ fontSize: "0.8rem" }}
															>
																{` — ${item.level}`}
															</span>
														</Typography>
													</React.Fragment>
												}
											/>
											<HighlightOffIcon onClick={() => remove(i)} />
										</ListItem>
									);
								})}
							</List>
						</Grid>
					</Grid>
				);
			}}
		</FieldArray>
	);
};

export default Languages;
