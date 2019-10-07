import React from 'react';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

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

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Collapse, List } from '@material-ui/core'

// import { Link } from 'react-router-dom';

export default function SideBar() {
  // const classes = useStyles();
  // const [expand, setExpand] = React.useState(true);

  // function handleClick() {
  //   setExpand(!expand);
  // }
}

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <List>
      <ListItem button onClick={SideBar.prototype.handleClick}>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary='Society' />
        {SideBar.prototype.expand ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={SideBar.prototype.expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemText primary="Register Society" />
          </ListItem>
        </List>
      </Collapse>
    </List>


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
