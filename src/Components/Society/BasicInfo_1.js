import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm({ state }) {
  const [values, setValues] = React.useState({
    name: '',
    registration_no: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    contact_no: '',
    // maintenance: '',
    area_code: '',
    landline_no: ''
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Society Registration Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="name"
            label="Society Name"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="registration_no"
            label="Registration Number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address"
            label="Address line 1"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="state"
            label="State"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="city"
            label="City"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="pincode"
            label="Zip / Postal code"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="contact_no"
            label="Mobile Number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
<<<<<<< HEAD
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="area_code"
            label="Area Code"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="landline_no"
            label="Landline Number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
=======

        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <TextField
              required
              name="area_code"
              label="Area Code"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={6}>
            <TextField
              required
              name="landline_no"
              label="Landline Number"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={6}>
            <TextField
              required
              name="num_of_flats"
              label="Number of Flats"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* 
        <Button onClick={handleSubmit} color='secondary'>
          Test
        </Button> */}
>>>>>>> 5ba0211577e0453133cf8c2567554f1e10b2c114
      </Grid>
    </React.Fragment>
  );
}
