import React from 'react';
import { withStyles } from '@material-ui/styles';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Navbar from '../NavBar';

const colorTheme = createMuiTheme({
	palette: {
		primary: { main: '#393975' },
		secondary: { main: '#11cb5f' },
	},
});

export default function Palette() {
	return (
		<ThemeProvider theme={colorTheme}>
			<Navbar />
		</ThemeProvider>
	);
}
