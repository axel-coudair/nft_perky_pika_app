import React, { useState } from 'react'
import Timer from './Timer';
import CustomButton from './CustomButton';
import styles from '../styles/MintArea.module.scss'

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

        <div className="container">
            <div className="row" >
                < div className="col-xs-12" >
                    < div className={styles.mintArea} >
                        <Timer startDate={startDate} />
                        < div className="d-flex justify-content-center" >
                            <CustomButton disabled>Mint</CustomButton>
                        </div>
                        <div className={styles.remaingItemsDiv}>
                            <span>
                                6576/7867
                            </span>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <img className={styles.mintPikaPanel} src="/mint_assets/pannel_count.png" />
            </div>
        </div >
    )
}
