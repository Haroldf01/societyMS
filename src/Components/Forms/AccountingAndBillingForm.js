import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';


const useStyle = makeStyles({
  parkingTypo: {
    marginTop: '20px',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  formControl: {
    minWidth: '100%',
    marginTop: '0px'
  }
});

export default function AccountingAndBilling({ billheads }) {
  const classes = useStyle()
  const [values, setValues] = React.useState('');

  return (
    <React.Fragment>
      <div container='true'>&nbsp;</div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="maintenanceType" label="Maintenance Type" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField required id="maintenanceAmt" label="Maintenance Amount" fullWidth />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="currentMaintenanceBalance" label="Current Maintenance Balance" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField required id="yearOpeningBalance" label="Year Opening Balance" fullWidth />
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Divider variant="fullwidth" component='hr' absolute={true} />
      </Grid> */}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='penaltyType'>Penalty Type</InputLabel>
            <Select value={values} onChange={e => setValues(e.target.value)}>
              <MenuItem value='Fixed'>Fixed</MenuItem>
              <MenuItem value='Percent'>Percent</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="penaltyAmt"
            label="Penalty Amount"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Typography variant={"subtitle1"} className={classes.parkingTypo}>
            Self Owned Parking
            </Typography>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <TextField
            required
            id="selfTwoWheel"
            label="Two Wheeler"
            fullWidth
          />
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <TextField
            required
            id="selfFourWheel"
            label="Four Wheeler"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Typography variant={"subtitle1"} className={classes.parkingTypo}>
            Society Parking
            </Typography>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <TextField
            required
            id="societyTwoWheel"
            label="Two Wheeler"
            fullWidth
          />
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <TextField
            required
            id="societyFourWheel"
            label="Four Wheeler"
            fullWidth
          />
        </Grid>
      </Grid>

      <h1>BillHeads</h1>

      <List component='nav' >
        {billheads.map(bills =>
          <React.Fragment>
            <ListItem divider={true} button>
              <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Typography variant={"subtitle1"} className={classes.parkingTypo}>
                    {bills.billHeadTitle}
                  </Typography>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={6}>
                  <TextField
                    label="Penalty Type"
                    value={bills.penaltyType}
                    fullWidth
                  />
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={6}>
                  <TextField
                    label="Value"
                    value={bills.billHeadValue}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </ListItem>
          </React.Fragment>
        )}
      </List>
    </React.Fragment >
  );
}
