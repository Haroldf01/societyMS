import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import FloorIcon from '../assets/icons/floor.svg';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 240,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(5),
	},
}));

export default function NestedList() {
	const classes = useStyles();
	const [expand, setExpand] = React.useState(true);

	function handleClick() {
		setExpand(!expand);
	}

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					Nested List Items
        </ListSubheader>
			}
			className={classes.root}
		>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="Inbox" />
				{expand ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={expand} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							{/* <FloorIcon /> */}
						</ListItemIcon>
						<ListItemText primary="0th Floor" />
					</ListItem>
				</List>
			</Collapse>
		</List>
	);
}
