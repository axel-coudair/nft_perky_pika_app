import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'


export default function mint() {
    return (
        <>
            mint here
            <Link href="/">
                <Button variant="contained">Home</Button>
            </Link>
        </>
    )
}
