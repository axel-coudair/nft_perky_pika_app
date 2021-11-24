import React, { useState } from 'react'
import Timer from '../Timer/Timer';
import CustomButton from '../CustomButton/CustomButton';
import useStyles from './MintAreaStyle';
import { Card, Typography, CardContent} from '@mui/material';

export default function MintArea() {
    const classes = useStyles()
    const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
    const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

    const [itemsAvailable, setItemsAvailable] = useState(0); // total nfts
    const [itemsRedeemed, setItemsRedeemed] = useState(); // total nfts minted
    const [itemsRemaining, setItemsRemaining] = useState(); // nft left
    const [startDate, setStartDate] = useState(); // when minting starts
    const [remainingTime, setRemainingTime] = useState(new Date(new Date('2021-11-29T00:00:00') - new Date()))
    const [candyMachine, setCandyMachine] = useState({});
    return (
        <div>
            <Timer startDate={startDate} />
            <CustomButton>Mint</CustomButton>
            <span className={classes.countSpan}>8757/6589</span>
            <Card className={classes.countSpan}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
