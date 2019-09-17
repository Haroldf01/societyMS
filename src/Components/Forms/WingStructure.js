import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';

import { TextField, Button, Grid, ListItem } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { List, ListItemText, ListItemIcon } from '@material-ui/core'

import BusinessIcon from '@material-ui/icons/Business'

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
		padding: theme.spacing(2, 4, 3),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	root: {
		width: '100%',
		maxWidth: 240,
		backgroundColor: theme.palette.background.paper,
		fontSize: '24px'
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

let wingStructArray = []

function WingModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [dataModal, setDataModal] = React.useState({
		wingName: '',
		numOfFloors: 0
	});

	const addElements = () => {
		wingStructArray.push({ wingName: dataModal.wingName, numOfFloors: dataModal.numOfFloors })
		console.log(wingStructArray)
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<List component='nav' className={classes.root}>
				{wingStructArray.map(wings =>
					<React.Fragment>
						<ListItem button>
							<ListItemIcon>
								<BusinessIcon />
							</ListItemIcon>
							<ListItemText>{wings.wingName} - {wings.numOfFloors} Floors</ListItemText>
						</ListItem>
					</React.Fragment>
				)}
			</List>

			{/* <ul>
				{
					wingStructArray.map(wings => (
					<li>{wings.wingName} {wings.numOfFloors}</li>
					))}
			</ul> */}

			<Button variant="outlined" color='secondary' onClick={handleOpen}>
				Add Wings
      </Button>
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
							Add Wing
            </Typography>
						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								id="wingName"
								name="wingName"
								label="Wing Name"
								fullWidth
								onChange={e => setDataModal({ ...dataModal, wingName: e.target.value })}
							/>
						</Grid>

						<Grid item lg={8} md={8} sm={10} xs={10}>
							<TextField
								required
								id="numOfFloors"
								name="numOfFloors"
								label="Num of Floors"
								fullWidth
								onChange={e => setDataModal({ ...dataModal, numOfFloors: e.target.value })}
							/>
						</Grid>
						<Button
							variant="outlined"
							color="secondary"
							onClick={addElements}
							className={classes.button}
						>
							Done
            </Button>
					</div>
				</Fade>
			</Modal>

		</div>
	);
}


export default function WingStructure() {
	return (
		<div>
			<WingModal />
		</div>
	);
}