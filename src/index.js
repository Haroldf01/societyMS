import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

// const theme = getMuiTheme({
// 	palette: {
// 		primary: '#00bcd4',
// 		secondary: '#ff4081'
// 	}
// });

// <MuiThemeProvider theme={theme}>
// 	<App />
// </MuiThemeProvider>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
