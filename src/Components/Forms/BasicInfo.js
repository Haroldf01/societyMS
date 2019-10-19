import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


export default function AddressForm() {

  const [data, setData] = React.useState({
    name: '',
    registration_no: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    contact_no: '',
    maintenance: '',
    area_code: '',
    landline_no: '',
  });
  const [isVerified, setIsVerified] = React.useState(false);

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      societyName: data.societyName,
      registrationNo: data.registrationNo,
      addressLine_1: data.addressLine_1,
      state: data.state,
      city: data.city,
      zipcode: data.zipcode,
      mobileNo: data.mobileNo,
      areaCode: data.areaCode,
      landlineNo: data.landlineNo
    };

    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }
    }

    let token;

    axios.post(`http://192.168.0.104:8000/api/society/`, user, config)
      .then(res => {
        token = JSON.stringify(res.data.token);
        localStorage.setItem('token', token);
        if (res.status === 200) {
          setIsVerified(true);
        }
      });
  };

  if (isVerified) {
    console.log('inside if verified === True');
    // return <Redirect to={{ pathname: '/dashboard' }} />;
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Society Registration Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="societyName"
            label="Society Name"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="RegistrationNo"
            label="Registration Number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address1"
            label="Address line 1"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="state" name="state" label="State" fullWidth />
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
            name="zip"
            label="Zip / Postal code"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="mobileNo"
            label="Mobile Number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="areaCode"
            label="Area Code"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="landlineNo"
            label="Landline Number"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
