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
import { StylesContext } from "@mui/styles";


export default function TextBlock(){
    return (
        <section className="block_bestpikas py-4">
            <div className="container">
                <div className="block_bestpikas_title">
                    <h2>The best Pikas on the NFT market</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="block_best_perkys_img" src="/pikas.png"/>
                    </div>
                    <div className="col-12 col-sm-6">
                        <p>Pesky Penguins is a deflationary collection of 8888 8686 NFTs on the Solana Blockchain. Every Penguin is completely unique! But not every Penguin is here to stay…</p>
                        <h5>Pesky Penguins</h5>
                        <p>Pesky Penguins is a deflationary collection of 8888 8686 NFTs on the Solana Blockchain. Every Penguin is completely unique! But not every Penguin is here to stay…</p>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .block_bestpikas {
                    color: #fff;
                }
                
                .block_best_perkys_img {
                    max-width: 350px;
                }
                .block_bestpikas_title {
                    font-family: 'M PLUS 1 Code', sans-serif;
                    text-transform: uppercase;
                }
                @media (max-width: 992px) {
                    .block_navbar {
                        position: initial;
                        background: #fff;
                    }
                  }

            `}</style>
        </section>
    );
}
