import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import Face3Icon from '@mui/icons-material/Face3';
import { pink } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function BurgerMenu() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClickOpen = e => {
    // console.log(e.target);
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['inbox', 'telegram', 'instagram', 'about me'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handleClickOpen}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <EmailIcon color="primary" />}
                {index === 1 && <TelegramIcon color="secondary" />}
                {index === 2 && <InstagramIcon color="success" />}
                {index === 3 && <Face3Icon sx={{ color: pink[500] }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['location', 'question'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <LocationOnIcon />}
                {index === 1 && <ContactSupportIcon />}
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
      <>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon fontSize="large" />
        </Button>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </>
    </div>
  );
}
