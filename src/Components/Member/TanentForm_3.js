import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function MemberTanent() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tenant Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="fistName"
            label="First Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="lastName"
            label="Last Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="contactNo"
            label="Contact No."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="email"
            label="Email ID"
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant='subtitle1'>
        Agreement Duration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="from"
            label="From"
            type="date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="to"
            label="To"
            type="date"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment >
  );
}
