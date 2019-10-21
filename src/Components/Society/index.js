import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Stepper, Step, StepLabel } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business'

import SocietyBasicForm from './BasicInfo_1';
import WingStructure from './WingStructure_2';
import Copyright from '../Copyright';

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
  stepper: {
    paddingLeft: theme.spacing(4)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Basic Info', 'Wings Info'];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '',
    registration_no: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    contact_no: '',
    maintenance: '',
    area_code: '',
    landline_no: ''
  });

  document.title = 'Society Registration';

  const handleState = () => {
    let data_obj = {
      name: data.name,
      registration_no: data.registration_no,
      address: data.address,
      state: data.state,
      city: data.city,
      pincode: data.pincode,
      contact_no: data.contact_no,
      area_code: data.area_code,
      landline_no: data.landline_no
    }

    console.log('inside state function', data_obj);
  }

  // REVIEW in `getStepContent()` i have passed in the function as a prop. And also brought this function in from out.
  // TODO get the prop thing working. For reference use Accounting and billing index.js

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SocietyBasicForm stateData={handleState} />;
      case 1:
        return <WingStructure />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // console.log(localStorage.getItem('token'));

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  }

  // React.useEffect(() => {
  //   axios.get(`http://192.168.0.104:8000/api/society/`, config)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       console.log(res.status);
  //     });
  // });

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   // post
  // }

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            <BusinessIcon /> Society Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you! Your Society has been Registered.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  {/* <SocietyBasicForm data={ state } /> */}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                    </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      // onClick={handleSubmit}
                      // onChange={(event) => { setTenant(event.target.checked); addItem(); }}
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
