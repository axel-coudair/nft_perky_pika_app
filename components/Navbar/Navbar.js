import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import useStyles from './NavbarStyle';


export default function Navbar() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.block_navbar} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Profile</Button>
                    <Button color="inherit">Marketplace</Button>
                    <Button color="inherit">Lore</Button>
                    <Button color="inherit">Mint</Button>
                    <Button color="inherit">Discord</Button>
                    <Button color="inherit">Twitter</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
