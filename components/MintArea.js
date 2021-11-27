import React, { useState } from 'react'
import Timer from './Timer';
import CustomButton from './CustomButton';
import styles from '../styles/MintArea.module.scss'

export default function MintArea() {
    const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
    const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

    const [itemsAvailable, setItemsAvailable] = useState(0); // total nfts
    const [itemsRedeemed, setItemsRedeemed] = useState(); // total nfts minted
    const [itemsRemaining, setItemsRemaining] = useState(0); // nft left
    const [startDate, setStartDate] = useState(); // when minting starts
    const [remainingTime, setRemainingTime] = useState(new Date(new Date('2021-11-29T00:00:00') - new Date()))
    const [candyMachine, setCandyMachine] = useState({});
    const mintIsDisabled = remainingTime > 0
    return (

        <div className="container ">
            <div className="row" >
                < div className="col-md-4" >
                </div>
                < div className={`col-md-4 py-5 mt-5  ${styles.mintAreaCol}`} >
                    < div className={styles.mintArea} >
                        {remainingTime > 0 ? <Timer startDate={startDate} /> : ""}
                        < div className="d-flex justify-content-center" >
                            {mintIsDisabled ?
                                <CustomButton disabled>Mint</CustomButton>
                                :
                                <CustomButton >Mint</CustomButton>
                            }
                        </div>
                        <div className={styles.remaingItemsDiv}>
                            <span>
                                {itemsRemaining}/{itemsAvailable}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 py-2" >
                    <img className={styles.centerItem} src="/mint_assets/pannel_count.png" />
                </div>
            </div >
        </div >
    )
}
