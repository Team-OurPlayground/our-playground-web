import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {IconButton} from "@mui/material";
import {Dehaze} from "@mui/icons-material";

function ServerListDrawer({servers}) {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    const Serverlist = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem sx={{pl: '0.5rem', pr: '1rem'}} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Dehaze />
                    </ListItemIcon>
                    <ListItemText primary="OURPLAYGROUND" />
                    </ListItemButton>
                </ListItem>
                {servers.map((text, index) => (
                    <ListItem key={text} sx={{pl: '0.5rem', pr: '1rem'}} disablePadding>
                        <ListItemButton sx={{borderRadius: '10px'}}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {servers.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer(true)}><Dehaze /></IconButton>
                <SwipeableDrawer
                    anchor='left'
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {Serverlist()}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

export default ServerListDrawer;