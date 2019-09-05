import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles({
  parkingTypo: {
    marginTop: '20px',
    fontWeight: 'bold'
  }
});

export default function PaymentForm() {
  const classes = useStyle()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Billing Details
      </Typography>
      <Grid container spacing={3}>
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

      <Grid container spacing={3}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={4}>
            <Typography variant={"subtitle1"} className={classes.parkingTypo}>
                Self Owned Parking
            </Typography>
          </Grid>

          <Grid item lg={4} md={4}>
            <TextField
              required
              id="selfTwoWheel"
              label="Two Wheeler"
              fullWidth
            />
          </Grid>

          <Grid item lg={4} md={4}>
            <TextField
              required
              id="selfFourWheel"
              label="Four Wheeler"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item lg={4} md={4}>
            <Typography variant={"subtitle1"} className={classes.parkingTypo}>
              Society Parking
            </Typography>
          </Grid>

          <Grid item lg={4} md={4}>
            <TextField
              required
              id="societyTwoWheel"
              label="Two Wheeler"
              fullWidth
            />
          </Grid>

          <Grid item lg={4} md={4}>
            <TextField
              required
              id="societyFourWheel"
              label="Four Wheeler"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
