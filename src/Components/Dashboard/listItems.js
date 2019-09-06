import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business'
import PeopleIcon from '@material-ui/icons/People';
import AccountingBookIcon from '@material-ui/icons/Description'
import AssetManagerIcon from '@material-ui/icons/Assessment';
import GeneralLedgerIcon from '@material-ui/icons/Book';
import HelpDeskIcon from '@material-ui/icons/SupervisorAccount'
import BroadcastIcon from '@material-ui/icons/Send'
import IncomeTrackerIcon from '@material-ui/icons/Receipt'
import ExpenseTrackerIcon from '@material-ui/icons/Receipt'

import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button primaryText={<Link to={'./society'}>As</Link>}>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary='Society' />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountingBookIcon />
      </ListItemIcon>
      <ListItemText primary="Accounting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssetManagerIcon />
      </ListItemIcon>
      <ListItemText primary="Asset Manager" />
    </ListItem>
  </div>
);

export const thirdListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <IncomeTrackerIcon />
      </ListItemIcon>
      <ListItemText primary="Income Tracker" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExpenseTrackerIcon />
      </ListItemIcon>
      <ListItemText primary="Expense Tracker" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GeneralLedgerIcon />
      </ListItemIcon>
      <ListItemText primary="General Ledger" />
    </ListItem>
  </div>
);

export const fourthItemList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BroadcastIcon />
      </ListItemIcon>
      <ListItemText primary="Broadcast" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpDeskIcon />
      </ListItemIcon>
      <ListItemText primary="Help Desk" />
    </ListItem>
  </div>
);
