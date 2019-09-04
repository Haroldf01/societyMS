import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export default function PaymentForm() {
  // const theme = createMuiTheme();

  // theme.typography.subtitle1 = {
  // };

    // ToDo: If possible apply custom theme and split range of typography
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Accounting Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField required id="currentBalance" label="Current Balance" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField required id="sinkingFund" label="Sinking Fund" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField required id="repairFund" label="Repair Fund" fullWidth />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField required id="maintenanceAmt" label="Maintenance Amount" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="penaltyAmt"
            label="Select fixed-percent"
            helperText=""
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="penaltyAmt"
            label="Penalty Amount"
            helperText="Fixed Amt or percentage"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant="subtitle1" gutterBottom align={'left'}>
        Self Owned Parking
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="selfTwoWheel"
            label="Two Wheeler"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="selfFourWheel"
            label="Four Wheeler"
            fullWidth
          />
        </Grid>
      </Grid>
      <div>&nbsp;</div>
        <Typography variant="subtitle1" gutterBottom align={'left'}>
          Society Owned Parking
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="societyTwoWheel"
            label="Two Wheeler"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="societyFourWheel"
            label="Four Wheeler"
            fullWidth
          />
        </Grid>
      </Grid>


      {/* ALTERNATIVE IF ABOVE NOT WORKING */}

      {/*<div>&nbsp;</div>*/}
      {/*<Typography variant="h6" gutterBottom>*/}
        {/*Society Owned Parking*/}
      {/*</Typography>*/}
      {/*<Grid container spacing={3}>*/}
        {/*<Grid item xs={6} sm={3}>*/}
          {/*<TextField*/}
            {/*required*/}
            {/*id="societyTwoWheel"*/}
            {/*label="Two Wheeler"*/}
            {/*fullWidth*/}
          {/*/>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={6} sm={3}>*/}
          {/*<TextField*/}
            {/*required*/}
            {/*id="societyFourWheel"*/}
            {/*label="Four Wheeler"*/}
            {/*fullWidth*/}
          {/*/>*/}
        {/*</Grid>*/}
      {/*</Grid>*/}
    </React.Fragment>
  );
}
