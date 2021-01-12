import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';

const moyynTheme = createMuiTheme({
	palette: {
		primary: {
			main:'#265CFF',
		},
		text: {
         secondary: '#6c757d'
    	} 
	},
	typography: {
		fontFamily: [
			'Poppins',
			'Roboto',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(',')
	}
})

ReactDOM.render(
  	/*<React.StrictMode>*/
  	<StylesProvider injectFirst>
	  	<ThemeProvider theme={moyynTheme}>
	   	<App />
	   </ThemeProvider>
	</StylesProvider>
  /*	</React.StrictMode>*/
   ,
  document.getElementById('root')
);