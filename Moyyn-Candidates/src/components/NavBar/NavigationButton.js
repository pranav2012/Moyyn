import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	NavLink: {
		color: 'white',
		textDecoration: 'none',
		padding: theme.spacing(1),
		'&:hover': {
			color: '#6c757d'
		},
		margin: 'auto 0.5rem'
	},
	NavLinkWithBorder: {
		color: 'white',
		textDecoration: 'none',
		border: '3px solid white' ,
		borderRadius: '5px',
		padding: theme.spacing(1),
		'&:hover': {
			color: '#6c757d',
			border: '3px solid #6c757d' 
		},
		margin: 'auto 0.5rem'
	},
	active: {
		color: '#6c757d',
	},
	activeWithBorder: {
		color: '#6c757d',
		border: '3px solid #6c757d' 
	}
}))

const NavigationButton = ({ to, border = false, children }) => {
	const custom = useStyles();

	return(
		<NavLink to={to} className={border ? custom.NavLinkWithBorder : custom.NavLink} activeClassName={border ? custom.activeWithBorder : custom.active} >
			{children}
		</NavLink>
	)
}

export default NavigationButton;