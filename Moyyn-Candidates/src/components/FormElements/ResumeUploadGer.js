import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { DropzoneAreaBase } from "material-ui-dropzone";
import Alert from '@material-ui/lab/Alert';
import ResumePreview from './ResumePreview';
import FormError from './FormError';

const useStyles = makeStyles(theme => ({
	preview: {
		textDecoration: "underline",
		cursor: 'pointer'
	},
	paragraph: {
		color: '#6c757d',
		fontSize:'12px'
	}
}));

const ResumeUploadGer = () => {
	const custom = useStyles();

	const [isPreviewOpen, setIsPreviewOpen] = useState(false)

	const screenAtSmall = useMediaQuery("(max-width:600px)");

	const handleIsPreviewOpen = () => {
		isPreviewOpen ? setIsPreviewOpen(false) : setIsPreviewOpen(true);
	}

	return(
		<Field name='CV2'>
			{
				({ form, field, meta }) => {

					const handleResumeUploadGer = (payload) => {
						form.setFieldValue('CV2', [payload[0]])
					}

					return(
						<Grid container spacing={3}>
							<ResumePreview
								open={isPreviewOpen}
								close={handleIsPreviewOpen}
								src={field.value.length > 0 ? field.value[0].data : null}
							/>
							<Grid item xs={12}>
								<DropzoneAreaBase
									fileObjects={field.value}
									acceptedFiles={[".pdf"]}
									filesLimit={1}
									dropzoneText={"Upload your German CV as pdf file (Max file size 3MB)" }
									onAdd={(file) => handleResumeUploadGer(file)}
									showPreviewsInDropzone={false}
									dropzoneClass={custom.paragraph}
								/>

							</Grid>
							<FormError name='CV2' />
							{
								field.value.length > 0 && (
									<React.Fragment>
										<Grid item xs={12}>
											<Alert severity="success">
												File uploaded successfully
											</Alert>
										</Grid>
										{
											!screenAtSmall && (
												<Grid item xs={12}>
													<Typography 
														color='textSecondary' 
														align='center'
														className={custom.preview}
														onClick={handleIsPreviewOpen}
													>
														Preview
													</Typography>
												</Grid>
											)
										}
									</React.Fragment>
								)
							}
						</Grid>
					)
				}
			}
		</Field>
	)
}

export default ResumeUploadGer