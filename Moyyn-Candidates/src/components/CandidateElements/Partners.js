import React from 'react';
import { 
	Grid,
	Typography,
	Box,
	Button,
	useMediaQuery
} from '@material-ui/core';
import { goToURL } from '../../util/helpers/helper-methods';

const renderSuggestions = (array) => {
	if (array.length > 0) {
		return(
			array.map((job, i) => {
				return(
					<React.Fragment key={i}>
						<Grid item xs={12}>
							<Typography variant='caption'>
								{job.Title}, <em>{job.Location[0]} {job.Location[1]}</em>
							</Typography>
						</Grid>
					</React.Fragment>
				)
			})
		)	
	} else {
		return(
			<React.Fragment>
				<Grid item xs={12}>
					<Typography align='center' variant='subtitle2'>
						No current matches.
					</Typography>
					<Typography align='center' variant='subtitle2'>
						Submit a general application to our partner platform via your personal recommendation link and get matches for new jobs posted regularly.
					</Typography>
				</Grid>
			</React.Fragment>
		)
	}
}

const Partners = ({ talentuno, moberries }) => {

	const screenAtSmall = useMediaQuery("(max-width:600px)");
	const screenAtLarge = useMediaQuery("(max-width:1280px)");

	if (screenAtLarge) {
		return(
			<React.Fragment>
				<Grid item xs={12}>
					<Grid container spacing={2}  >
						<Grid item xs={12} >
							<Typography variant='subtitle2' color='primary' align='center'>
								<b>Matches - Partner Platform 1</b>
							</Typography>
						</Grid>
						<Grid item xs={12} >
							<Box p={1} width='100%'>
								{/*add case where there are no matches*/}
								<Grid container>
									{
										renderSuggestions(moberries)	
									}
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={12} >
							<Button
								onClick={() => goToURL("https://moyyn.com/de-personal-recommendation")} 
								fullWidth
								className='moyynButton--main fullHeight'
								style={{textTransform: 'none', height: '100%'}}
							>
								{
								   screenAtSmall ? 'Recommendation link' : 'Personal recomendation link'
								}
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}  >
						<Grid item xs={12} >
							<Typography variant='subtitle2' color='primary' align='center'>
								<b>Matches - Partner Platform 2</b>
							</Typography>
						</Grid>
						<Grid item xs={12} >
							<Box p={1} width='100%'>
								<Grid container>
									{
										renderSuggestions(talentuno)
									}
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={12} >
							<Grid container spacing={1}>
								<Grid item xs={6} >
									<Button 
										onClick={() =>goToURL("https://moyyn.com/hu-personal-recommendation")}
										fullWidth 
										className='moyynButton--main' 
										style={{textTransform: 'none'}}
									>
										{
										   screenAtSmall ? 'Hungary' : 'Recomendation link - Hungary'
										}
									</Button>
								</Grid>
								<Grid item xs={6} >
									<Button 
										onClick={() =>goToURL("https://moyyn.com/pl-personal-recommendation")}
										fullWidth 
										className='moyynButton--main' 
										style={{textTransform: 'none'}}
									>
										{
										   screenAtSmall ? 'Poland' : 'Recomendation link - Poland'
										}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	} else {
		return(
			<React.Fragment>
				<Grid item xs={12}>
					<Grid container spacing={3}  >
						<Grid item xs={6}>
							<Typography variant='subtitle2' color='primary' align='center'>
								<b>Matches - Partner Platform 1</b>
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant='subtitle2' color='primary' align='center'>
								<b>Matches - Partner Platform 2</b>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}  >
						<Grid item xs={6}>
							<Box p={1} width='100%'>
								{/*add case where there are no matches*/}
								<Grid container>
									{
										renderSuggestions(moberries)	
									}
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box p={1} width='100%'>
								<Grid container>
									{
										renderSuggestions(talentuno)
									}
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}  >
						<Grid item xs={6}>
							<Button
								onClick={() => goToURL("https://moyyn.com/de-personal-recommendation")} 
								fullWidth
								className='moyynButton--main fullHeight'
								style={{textTransform: 'none'}}
							>
								Personal recomendation link
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Grid container spacing={1}>
								<Grid item xs={6} >
									<Button 
										onClick={() =>goToURL("https://moyyn.com/hu-personal-recommendation")}
										fullWidth 
										className='moyynButton--main' 
										style={{textTransform: 'none'}}
									>
										{
										   screenAtSmall ? 'Hungary' : 'Recomendation link - Hungary'
										}
									</Button>
								</Grid>
								<Grid item xs={6} >
									<Button 
										onClick={() =>goToURL("https://moyyn.com/pl-personal-recommendation")}
										fullWidth 
										className='moyynButton--main' 
										style={{textTransform: 'none'}}
									>
										{
										   screenAtSmall ? 'Poland' : 'Recomendation link - Poland'
										}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}

export default Partners;