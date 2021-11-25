import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StylesContext } from '@mui/styles';
import useStyles from './HeaderStyle';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line


export default function Header() {
    const styles = useStyles();

    return (
        <>
         <div className="block_header">
            <img className="block_header_img" src="/logo.png" />
        </div>
        <style jsx>{`
            .block_header {
                min-height: 100vh;
                padding: 4rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                background-image: url('/background_header.png');
                background-size: cover;
                background-position: top center;
                background-repeat: no-repeat;
            }
            `}</style>
        </>
    );
}
