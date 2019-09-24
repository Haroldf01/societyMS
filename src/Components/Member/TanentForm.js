import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function MemberTanent() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Society Registration Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="societyName"
            name="societyName"
            label="Society Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="RegistrationNo"
            name="RegistrationNo"
            label="Registration Number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="state" name="state" label="State" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNo"
            name="mobileNo"
            label="Mobile Number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="areaCode"
            name="areaCode"
            label="Area Code"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="landlineNo"
            name="landlineNo"
            label="Landline Number"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
