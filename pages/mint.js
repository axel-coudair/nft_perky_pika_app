import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import Timer from '../components/Timer/Timer';
import CustomButton from '../components/CustomButton/CustomButton';
import MintArea from '../components/MintArea/MintArea';


export default function mint() {
    return (
        <>
            <Link href="/">
                <Button variant="contained">Home</Button>
            </Link>
            <MintArea/>

        </>
    )
}
