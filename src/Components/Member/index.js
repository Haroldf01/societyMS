import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Stepper, Step, StepLabel } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';

import { FormControlLabel, Checkbox } from '@material-ui/core';

import MemberInfo from './MemberInfo';
import MemberParking from './MemberParkings';
import MemberTanent from './TanentForm';
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
  }
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return <MemberInfo />;
    case 1:
      return <MemberParking />;
    case 2:
      return <MemberTanent />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(['Basic Info'])
  const [checked, setChecked] = React.useState({
    parking: false,
    tenant: false
  });

  console.log('checked parking', checked.parking);
  console.log('checked tenant', checked.tenant);

  const handleChange = name => event => {
    console.log('inside HANDLE CHANGE FUNCTION');
    setChecked({ ...checked, [name]: event.target.checked });
  };

  const addItem = () => {
    console.log('inside ADDITEM FUNCTION');
    setSteps([...steps, {
      id: steps.length === activeStep,
      value: handleChange()
    }]);
    console.log('line 89 setSteps output', steps)
  };

  console.log('line 92 setSteps outside output', steps)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            <BusinessIcon /> Add Members
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label.id}>
                <StepLabel>{label.value}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you! Your Member has been Registered.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
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
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
          {activeStep === 0 ? (
            <React.Fragment>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.parking}
                    value={checked.parking}
                    onChange={handleChange('parking')}
                    // onChange={(event) => { handleChange('parking'); addItem(); }}
                    color="primary"
                  />
                }
                label="Do You Own a Parking?"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.tenant}
                    value={checked.tenant}
                    // onChange={handleChange('tenant')}
                    onChange={(event) => { handleChange('tenant'); addItem(); }}
                    color="primary"
                  />
                }
                label="Are you a tenant?"
              />
            </React.Fragment>) : (
              <div></div>
            )}
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
