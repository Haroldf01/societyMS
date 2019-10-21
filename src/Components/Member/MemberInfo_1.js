import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Grid, Typography, Select } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

const useStyle = makeStyles({
  formControl: {
    minWidth: '100%',
    marginTop: '0px'
  }
});


export default function MemberInfo() {
  const classes = useStyle()
  const [values, setValues] = React.useState('');

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Member Registration Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <TextField
            required
            id="wingName"
            label="Wing"
            fullWidth
          />
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <TextField
            required
            id="floor"
            label="Floor"
            fullWidth
          />
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='unitType'>Unit Type</InputLabel>
            <Select value={values} onChange={e => setValues(e.target.value)}>
              <MenuItem value='Flat'>Flat</MenuItem>
              <MenuItem value='Shop'>Shop</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="unitNumber"
            label="Unit Number"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="area"
            label="Area"
            fullWidth
          // helperText='in sq feets'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="firstName"
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
            name="email"
            label="Email"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="contact"
            label="Contact No."
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography variant={"h6"} align={"center"}>
        Previous Dues
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            required
            id="principalAmount"
            label="Principal Amount"
            fullWidth
          />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            required
            id="penaltyAmount"
            label="Penalty Amount"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
