import React from 'react';
import Palette from '../theme';
import FirstSlide from './firstSlide';

class LandingPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Palette />
				<FirstSlide />
			</React.Fragment>
		)
	}
}

export default LandingPage;
