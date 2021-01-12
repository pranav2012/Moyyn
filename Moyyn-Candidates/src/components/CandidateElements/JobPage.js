import React from 'react';
import { useParams } from 'react-router-dom';
import { 
	Grid, 
	Typography, 
	Button,
	useMediaQuery
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const JobPage = ({ suggestions, moveToPage }) => {

	const screenAtSmall = useMediaQuery("(max-width:600px)");
	const params = useParams();
	const index = params.id;
	const job = suggestions[index];

	return(
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant={screenAtSmall ? 'h6' : 'h4'}>{job.Title}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant={screenAtSmall ? 'subtitle2' : 'h6'}>
						<LocationOnIcon /> {job.Location[0]},{" "}
						{job.Location[1]}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={1}>
						{job.Description.split("\n").map((node, i) => {
							return (
								<Grid key={i} item xs={12}>
									<Typography variant={screenAtSmall ? 'body2' : 'body1'} color='textSecondary'>{node}</Typography>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button
						onClick={() => moveToPage('suggestions')}
						className="moyynButton--main"
						style={{ textTransform: "none", marginTop: "1rem" }}
						fullWidth={screenAtSmall}
					>
						Back to all jobs
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}
export default JobPage