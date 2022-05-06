import React, { useState } from 'react'
import { Drawer, ListItemButton } from '@mui/material'
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["Products", "Services", "About Us", "Contact Us", "Login", "Logout"];

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        PAGES.map((page, index) => (
                            <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                                <ListItemIcon>{page}</ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp;