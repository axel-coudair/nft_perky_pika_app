import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StylesContext } from '@mui/styles';
import useStyles from './HeaderStyle';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line


export default function Header() {
    const classes = useStyles();

    return (
        <Box className={classes.block_header} sx={{ flexGrow: 1 }}>
            <button className="btn btn-primary m-3">Button Primary</button>
           <img className={classes.block_header_img} src="/logo.png" />
        </Box>
    );
}
