import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Grid, Typography, Select, Button, List, ListItem } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Tooltip } from '@material-ui/core';
import { Backdrop, Modal } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

import TableDemo from './TableDemo';

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(3, 6, 3),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	}
}));

const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

let vehicleArray = [];

function ParkingModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [dataModal, setDataModal] = React.useState({
		vehicleId: 0,
		vehicleType: '',
		registrationNo: '',
		parkingType: ''
	})

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = name => event => {
		setDataModal({
			...dataModal,
			[name]: event.target.value
		})
	}

	const addVehicle = () => {
		vehicleArray.push({
			vehicleId: dataModal.vehicleId,
			vehicleType: dataModal.vehicleType,
			registrationNo: dataModal.registrationNo,
			parkingType: dataModal.parkingType
		})
		console.log(vehicleArray)
		handleClose()
	}

	return (
		<React.Fragment>
			{/* <Button onClick={handleOpen} className={classes.buttons}>
				Add Vehicle
			</Button> */}

			<Grid container justify="center">
				<Grid item>
					<Tooltip title="Add" placement="bottom-start">
						<Button onClick={handleOpen}>Add Vehicle</Button>
					</Tooltip>
				</Grid>
			</Grid>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<Typography variant="h6" gutterBottom>
							Add Parking
			</Typography>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								name="vehicleId"
								label="Vehicle"
								fullWidth
								// onChange={e => setDataModal({ ...dataModal, vehicleId: e.target.value })}
								onChange={handleChange('vehicleId')}
							/>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='vehicleType'>Vehicle Type</InputLabel>
								<Select value={dataModal.vehicleType} onChange={handleChange('vehicleType')}>
									<MenuItem value='TwoWheeler'>Two Wheeler</MenuItem>
									<MenuItem value='FourWheeler'>Four Wheeler</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								name="registrationNo"
								label="Registration No"
								fullWidth
								onChange={handleChange('registrationNo')}
							/>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='parkingType'>Parking Type</InputLabel>
								<Select value={dataModal.parkingType} onChange={handleChange('parkingType')}>
									<MenuItem value='SocietyOwned'>Society Owned</MenuItem>
									<MenuItem value='SelfOwned'>Self Owned</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Button
							variant="outlined"
							color="secondary"
							onClick={addVehicle}
							className={classes.button}
						>
							Done
			</Button>
					</div>
				</Fade>
			</Modal>

			<List component='nav'>
				{vehicleArray.map(vehicles =>
					<React.Fragment>
						<ListItem button>
							<Grid container spacing={3}>
								<Grid item lg={3} md={3} sm={6} xs={6}>
									<TextField
										label="Vehicle ID"
										value={vehicles.vehicleId}
										fullWidth
									/>
								</Grid>

								<Grid item lg={3} md={3} sm={6} xs={6}>
									<TextField
										label="Vehicle Type"
										value={vehicles.vehicleType}
										fullWidth
									/>
								</Grid>
								<Grid item lg={3} md={3} sm={6} xs={6}>
									<TextField
										label="Registration No"
										value={vehicles.registrationNo}
										fullWidth
									/>
								</Grid>
								<Grid item lg={3} md={3} sm={6} xs={6}>
									<TextField
										label="Parking Type"
										value={vehicles.parkingType}
										fullWidth
									/>
								</Grid>
							</Grid>
						</ListItem>
					</React.Fragment>
				)}
			</List>
		</React.Fragment>
	);
}

export default function MemberParking() {
	return (
		<React.Fragment>
			<Typography variant="h6" color={'textSecondary'}>
				Parking Details
		</Typography>
			<Grid container spacing={3}>
				{/* <ParkingModal /> */}
				<TableDemo />
			</Grid>
		</React.Fragment>
	);
}
