import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="societyName"
            name="societyName"
            label="Society Name"
            fullWidth
            autoComplete="sName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="RegistrationNo"
            name="RegistrationNo"
            label="Registration Number"
            fullWidth
            autoComplete="regNum"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
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
            autoComplete="address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNo"
            name="mobileNo"
            label="Mobile Number"
            fullWidth
            autoComplete="mobile number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="areaCode"
            name="areaCode"
            label="Area Code"
            fullWidth
            autoComplete="area code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="landlineNo"
            name="landlineNo"
            label="Landline Number"
            fullWidth
            autoComplete="landline number"
          />
        </Grid>
        {/*<Grid item xs={12}>*/}
          {/*<FormControlLabel*/}
            {/*control={<Checkbox color="secondary" name="saveAddress" value="yes" />}*/}
            {/*label="Use this address for payment details"*/}
          {/*/>*/}
        {/*</Grid>*/}
      </Grid>
    </React.Fragment>
  );
}
