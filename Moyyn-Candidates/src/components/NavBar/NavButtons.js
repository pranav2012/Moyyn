import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import NavigationButton from './NavigationButton'

const useStyles = makeStyles(theme => ({

}))

const NavButtons = () => {
	const custom = useStyles();

	//if not logged in
	return(
		<Box className={custom.NavButtons}>
			<NavigationButton to='/comapnies' >
				For Companies
			</NavigationButton>
			<NavigationButton to='/candidates' >
				For Candidates
			</NavigationButton>
			<NavigationButton to='/jobs' >
				Jobs
			</NavigationButton>
			<NavigationButton to='/login' >
				Login
			</NavigationButton>
			<NavigationButton to='/signup' border >
				Signup
			</NavigationButton>
		</Box>
	)
}

export default NavButtons;