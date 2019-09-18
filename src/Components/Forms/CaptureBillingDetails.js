import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Typography, Modal, Grid, TextField } from '@material-ui/core/';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import BusinessIcon from '@material-ui/icons/Business'

import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';

import BillingDetails from './AccountingAndBillingForm';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="http://arsalaan.net/">
				Arsalaan
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalPaper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	formControl: {
		minWidth: '100%',
		marginTop: '0px'
	}
}));

const steps = ['Accounting & Billing Info'];

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

export default function CaptureBillingDetails() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [open, setOpen] = React.useState(false);
	const [dataModal, setDataModal] = React.useState({
		billHeadTitle: '',
		penaltyType: '',
		billHeadValue: 0,
		currentBalance: 0,
		yearOpening: 0
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleChange = name => event => {
		setDataModal({
			...dataModal,
			[name]: event.target.value
		})
	}

	const newBillHead = () => {
		console.log('button event fired')
		handleClose()
	}

	return (
		<React.Fragment>
			<CssBaseline />

			{/* ADD BILL HEAD MODAL START */}
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
					<div className={classes.modalPaper}>
						<Typography variant="h6" gutterBottom>
							New Bill Head
            </Typography>
						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								id="billHeadTitle"
								name="billHeadTitle"
								label="Title"
								fullWidth
								// onChange={e => setDataModal({ ...dataModal, billHeadTitle: e.target.value })}
								onChange={handleChange('billHeadTitle')}
							/>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='penaltyType'>Penalty Type</InputLabel>
								<Select value={dataModal.penaltyType} onChange={handleChange('penaltyType')}>
									<MenuItem value='Fixed'>Fixed</MenuItem>
									<MenuItem value='Percent'>Percent</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								id="billHeadValue"
								name="billHeadValue"
								label="Value"
								fullWidth
								onChange={handleChange('billHeadValue')}
							/>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								id="currentAmt"
								name="currentAmt"
								label="Current Balance"
								fullWidth
								onChange={handleChange('currentBalance')}
							/>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								id="yearOpenAmt"
								name="yearOpenAmt"
								label="Yearly Amt"
								fullWidth
								onChange={handleChange('yearOpening')}
							/>
						</Grid>
						<Button
							variant="outlined"
							color="secondary"
							onClick={newBillHead}
							className={classes.button}
						>
							Done
            </Button>
					</div>
					<h1>{dataModal.billHeadTitle} - {dataModal.billHeadValue} - {dataModal.penaltyType}</h1>
				</Fade>
			</Modal>

			{/* ADD BILL HEAD MODAL END */}

			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<ListItemIcon >
						<BusinessIcon />
					</ListItemIcon>
					<Typography variant="h5" align="center">
						Accounting & Billing Info
			</Typography>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
									Thank you! Your detials are captured.
				  </Typography>
							</React.Fragment>
						) : (
								<React.Fragment>
									<BillingDetails />
									<div className={classes.buttons}>
										<Button
											onClick={handleOpen}
											className={classes.button}
											variant='outlined'
											color='secondary'>
											Add Bill Heads
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={handleNext}
											className={classes.button}
										>
											{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
										</Button>
									</div>
								</React.Fragment>
							)}
					</React.Fragment>
				</Paper>
				<Copyright />
			</main>
		</React.Fragment>
	);
}
