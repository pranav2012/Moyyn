import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
   logoMain: {
		color: '#265CFF' ,
		textDecoration: 'none',
		fontSize: '1.5rem',
		fontWeight: '800',
		fontFamily: 'Poppins',
		textAlign: 'center',
/*		[theme.breakpoints.down('sm')]: {
		}*/
	},
	logoSecondary: {
		color: 'white' ,
		textDecoration: 'none',
		fontSize: '1.5rem',
		fontWeight: '800',
		fontFamily: 'Poppins',
		textAlign: 'center',
/*		[theme.breakpoints.down('sm')]: {
		}*/
	},
}));

const Logo = ({ color = 'main' }) => {
	const custom = useStyles();

	return(
		<NavLink to='/' className={color === 'main' ? custom.logoMain : custom.logoSecondary } >
			Moyyn
		</NavLink>
	)
}

export default Logo;