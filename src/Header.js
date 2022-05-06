import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import DrawerComp from './DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PAGES = ["Products", "Services","About Us","Contact Us"];

const Header = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon sx={{ fontSize: "2rem" }} />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize: '1.5rem', paddingLeft: '5%'}}>
                                    Shoppe
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                                {
                                    PAGES.map((page, index) => (
                                        <Tab key={index} label={page} />
                                    ))
                                }
                                <Button variant="conatained" sx={{ marginLeft: 'auto' }}>Login</Button>
                                <Button variant="conatained" sx={{ marginLeft: '0.25em' }}>Sign Up</Button>
                            </Tabs>
                        )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;