import React from 'react';
import {
	Grid,
	Typography,
	Button,
	Box,
	Divider,
	useMediaQuery
} from '@material-ui/core';
import { goToURL } from '../../util/helpers/helper-methods';

const PartnerSuggestions = () => {

	const screenAtSmall = useMediaQuery("(max-width:600px)");

	return(
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography color='textSecondary' variant='h6' align='center'>
						Partner Job Matches
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color='textSecondary'>
						Thank you for applying and joining out talent pool, You do not have any matching jobs from our direct clients at the moment!
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color='textSecondary'>
						At Moyyn, we work directly with clients as well as several partner platforms to increase your chances of getting a job, especially during the current Covid situation.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color='textSecondary' style={{fontSize:"0.94rem"}}>
						<span className="f5">What are the advantages of being recommended by us?</span>
							<br/> &nbsp;&nbsp;&nbsp;&nbsp; • Because we work closely with our partners, companies are more willing to consider your application and hire you if you meet their requirements
							<br/> &nbsp;&nbsp;&nbsp;&nbsp; • You are also considered as a skilled candidate recommended by Moyyn and you have a higher chance of being interviewed for suitable positions
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color='textSecondary'>
						After clicking the link, you can apply to the career network of our partner and start getting job offers matching your skills immediately. Please note that we share your CV only with our direct clients and we do not share any info about your profile to other partner platforms. If you are interested in expanding your job opportunities, you can register directly on our partner platforms.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color='textSecondary'>
					P.S: If you are applying at a later point of time, please save and use your personal recommendation link while registering at our partners at any point of time.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<Typography variant='subtitle2' color='primary' align='center'>
								Partner Platform 1
							</Typography>
						</Grid>
						<Grid item xs={6} style={{margin:"0 auto"}}>
								<Button
									onClick={() => goToURL("https://moyyn.com/de-personal-recommendation")} 
									fullWidth
									className='moyynBtn'
									//style={{textTransform: 'none', padding: '1.2rem'}}
								>
									Personal recomendation link
								</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<Typography variant='subtitle2' color='primary' align='center'>
								Partner Platform 2
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item xs={6} >
									<Button 
										onClick={() =>goToURL("https://moyyn.com/hu-personal-recommendation")}
										fullWidth 
										className='moyynBtn' 
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
										className='moyynBtn' 
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
				<Grid item xs={12} >
					<Box style={{ marginTop: '2rem' }} width='100%' display='flex' justifyContent='center'>
						<Button onClick={() => goToURL("https://moyyn.com", false)} className='moyynButton--secondary' style={{ textTransform: 'none'}}>
							Back to homepage
						</Button>
					</Box>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default PartnerSuggestions;