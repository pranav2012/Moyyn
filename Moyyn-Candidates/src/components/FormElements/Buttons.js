import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	box: {
		width: '70%',
		[theme.breakpoints.down("md")]: {
			width: '80%'
		},
		[theme.breakpoints.down("sm")]: {
			width: '90%'
		},
		[theme.breakpoints.down("xs")]: {
			width: '100%'
		}
	}
}))

const Buttons = ({ back, submit = false }) => {
	const custom = useStyles();

	return(
		<Box display='flex' justifyContent='center'>
			<Box className={custom.box} display='flex' justifyContent='space-between'>
				<Button style={{marginRight: '0.35rem'}} onClick={back} className='moyynButton--secondary'>
					Back
				</Button>
				<Button style={{marginLeft: '0.35rem'}} type='submit' className='moyynButton--main'>
					{
						submit ? 'Submit' : 'Next'
					}
				</Button>
			</Box>
		</Box>
	)
}

export default Buttons;