import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	AppBar, 
	Toolbar 
} from '@material-ui/core';
import NavButtons from './NavButtons';
import Logo from '../Shared/Logo';

const useStyles = makeStyles(theme => ({
	NavBar: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: theme.spacing(2),
	}
}))

const NavBar = () => {
	const custom = useStyles();

	return(
		<AppBar color='primary' position='sticky'  >
			<Toolbar color='primary' className={custom.NavBar}>
				<Logo color='secondary' />
				<NavButtons />
			</Toolbar>
		</AppBar>
	)
}

export default NavBar;