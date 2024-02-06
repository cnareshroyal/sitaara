import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HouseSidingTwoToneIcon from '@mui/icons-material/HouseSidingTwoTone';import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import RadioTwoToneIcon from '@mui/icons-material/RadioTwoTone';
import AddIcon from '@mui/icons-material/Add';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';

export default function Sidebar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
    // Function to toggle the drawer state
    const handleToggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',padding:'10px' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HouseSidingTwoToneIcon/>
              </ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Home" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CloudUploadTwoToneIcon/>
              </ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Request Songs" />}
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <RadioTwoToneIcon/>   
              {!isSmallScreen && <ListItemText primary="YourLibrary" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
                <FavoriteIcon/>
              {!isSmallScreen && <ListItemText primary="LIked songs" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <EarbudsIcon />
                    {!isSmallScreen && <ListItemText primary="Create playlist" />}
                    <AddIcon onClick={handleToggleDrawer} />
                </ListItemButton>
          </ListItem>

  {isDrawerOpen && (
    <ListItem disablePadding>
      <ListItemButton onClick={handleToggleDrawer}>
        {!isSmallScreen && <ListItemText primary="Select the songs" />}
      </ListItemButton>
    </ListItem>
  )}

        </List>
      </nav>
      <Divider />
    </Box>
  );
}
