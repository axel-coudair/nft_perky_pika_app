import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StylesContext } from '@mui/styles';
import useStyles from './HeaderStyle';



export default function Header() {
    const style = useStyles();

    return (
        <Box className={style.block_header} sx={{ flexGrow: 1 }}>
           <img className={style.block_header_img} src="/logo.png" />
        </Box>
    );
}
