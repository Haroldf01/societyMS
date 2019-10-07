import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TableDemo from './TableDemo';
// import Editable from './ClassTableDemo';

export default function MemberParking() {
	return (
		<React.Fragment>
			<Typography variant="h6" color={'textSecondary'}>
				Parking Details
		</Typography>
			<Grid container spacing={3}>
				<TableDemo />
				{/* <Editable /> */}
			</Grid>
		</React.Fragment>
	);
}
