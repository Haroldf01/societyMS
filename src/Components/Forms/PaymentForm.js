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
      </Grid>
    </React.Fragment>
  );
}
