import { useState } from 'react';

import classes from './App.module.scss';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function App() {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    // setState({ ...state, [anchor]: open });
    setState(!state);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='Home'>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <Divider />
        <ListItem button key='Dev'>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary='Dev Notes' />
        </ListItem>
        <Divider />
        <ListItem button key='Contacts'>
          <ListItemIcon>
            <ConnectWithoutContactIcon />
          </ListItemIcon>
          <ListItemText primary='Contacts' />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div className={classes.app}>
      <div key="left">
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer("left", true)}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <Button key='Home' sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
              <Button key='Dev' sx={{ my: 2, color: 'white', display: 'block' }}>Dev Notes</Button>
              <Button key='Contacts' sx={{ my: 2, color: 'white', display: 'block' }}>Contacts</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          open={state}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
