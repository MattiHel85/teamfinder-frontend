// #040035
import React from 'react';
// import { SignInProps } from '../types/props';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import RestoreIcon from '@mui/icons-material';

const Footer: React.FC = () => {
    const [value, setValue] = React.useState(0);
    return (
    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
    >
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  )
}

export default Footer