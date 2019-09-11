import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';

import { TextField, Button, Grid, List } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import NestedList from './List'

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

function WingModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dataModal, setDataModal] = React.useState({
    wingName: '',
    numOfFloors: 0
  });

  // const handleChange = name => event => {
  //   setDataModal({...dataModal, [name]: event.target.value });
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(dataModal)
    setOpen(false)
  }

  return (
    <div>
      <NestedList />

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
              onClick={handleSubmit}
              className={classes.button}
            >
              Done
            </Button>
          </div>
        </Fade>
      </Modal>
      <h2>wing name {dataModal.wingName}</h2>
      <h2>wing name {dataModal.numOfFloors}</h2>
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