import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { 
	Typography,
	Toolbar,
	AppBar
} from '@material-ui/core';
import { goToURL } from '../../util/helpers/helper-methods';

const useStyles = makeStyles((theme) => ({
	logo: {
		color: "white",
		textDecoration: "none",
		fontSize: "2rem",
		fontWeight: "800",
		fontFamily: "Poppins",
		textAlign: "center",
		margin: theme.spacing(2),
		'&:hover': {
			cursor: 'pointer'
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
			margin: theme.spacing(1),
		},
	},
}));

const LogoBar = () => {
	const custom = useStyles();

	return(
		//Could find a better solution for border-top radius
		<AppBar position="static" style={{display: 'flex', alignItems: 'center', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
			<Toolbar>
				<Typography onClick={() => goToURL('https://moyyn.com/')} className={custom.logo}>
					Moyyn
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default LogoBar;