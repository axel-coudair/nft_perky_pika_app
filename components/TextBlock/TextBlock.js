import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useStyles from './TextBlockStyle';


export default function TextBlock() {
    const style = useStyles();

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        textAlign: 'left',
      }));

    return (
        <Box className={style.block_best_perkys} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={style.block_best_perkys_title} variant="h3"> The best Pikas on the NFT market</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                        <img className={style.block_best_perkys_img} src="/pikas.png"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="p">
                    Pesky Penguins is a deflationary collection of 8888 8686 NFTs on the Solana Blockchain. Every Penguin is completely unique! But not every Penguin is here to stay…
                    </Typography>
                    <Typography variant="h5">Pesky Penguins</Typography>
                    <Typography variant="p">Pesky Penguins</Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
