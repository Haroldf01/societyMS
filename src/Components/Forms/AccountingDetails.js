import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Accounting() {
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
