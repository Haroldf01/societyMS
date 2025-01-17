import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Stepper, Step, StepLabel } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import BusinessIcon from '@material-ui/icons/Business';

import useStyles from './styles';
import MemberInfo from './MemberInfo_1';
import MemberParking from './MemberParkings_2';
import MemberTanent from './TanentForm_3';
import Copyright from '../Copyright';


function getStepContent(step) {
  switch (step) {
    case "Basic Info":
      return <MemberInfo />;
    case "Member Parking":
      return <MemberParking />;
    case "Member Tenant":
      return <MemberTanent />;
    default:
      throw new Error('Unknown step');
  }
}

let steps = ['Basic Info'];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [checked, setChecked] = React.useState({
    parking: false,
    tenant: false
  });

  document.title = 'Member Registration';

  const handleChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (checked.parking === true && steps.includes('Member Parking') !== true) {
    steps.push('Member Parking');
  }

  if (checked.tenant === true && steps.includes('Member Tenant') !== true) {
    steps.push('Member Tenant');
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            <BusinessIcon /> Add Members
          </Typography>
          <Stepper steps={steps[activeStep]} className={classes.stepper}>
            {console.log(steps)}
            {steps.map(label => (
              <Step key={label[activeStep]}>
                <StepLabel>{label}</StepLabel>
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
                  {getStepContent(steps[activeStep])}
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
                    onChange={handleChange('parking')}
                    color="primary"
                  />
                }
                label="Do You Own a Parking?"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange('tenant')}
                    // onChange={(event) => { setTenant(event.target.checked); addItem(); }}
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
