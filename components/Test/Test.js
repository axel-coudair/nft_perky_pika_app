import { Grid } from '@mui/material';
import React from 'react'
import useStyles from './TestStyle';

export default function Test() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.testDiv}>
                lkjjkn
            </div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    bhkjbkj
                </Grid>
                <Grid item xs={3}>
                    bhkjbkj
                </Grid>
                <Grid item xs={3}>
                    bhkjbkj
                </Grid>
                <Grid item xs={3}>
                    bhkjbkj
                </Grid>
            </Grid>
        </>
    )
}