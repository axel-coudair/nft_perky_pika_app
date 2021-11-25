import React, { useState } from 'react'
import Timer from './Timer';
import CustomButton from './CustomButton';

export default function MintArea() {
    const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
    const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

    const [itemsAvailable, setItemsAvailable] = useState(0); // total nfts
    const [itemsRedeemed, setItemsRedeemed] = useState(); // total nfts minted
    const [itemsRemaining, setItemsRemaining] = useState(); // nft left
    const [startDate, setStartDate] = useState(); // when minting starts
    const [remainingTime, setRemainingTime] = useState(new Date(new Date('2021-11-29T00:00:00') - new Date()))
    const [candyMachine, setCandyMachine] = useState({});
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-md-3`}>
                    <Timer startDate={startDate} />
                </div>
                <div className={`col-md-3`}>
                    <CustomButton>Mint</CustomButton>
                </div>
            </div>
        </div >
    )
}
