import React, { useState } from 'react'
import { useEffect } from 'react';
import useStyles from './TimerStyle'
import { Grid } from '@mui/material';

export default function Timer({ startDate = new Date('2021-11-29T00:00:00') }) {
    const classes = useStyles();
    const [timeToStartArray, setTimeToStartArray] = useState([])

    const updateTimer = (timeToStart) => {
        setTimeToStartArray([{
            label: "Days",
            number: timeToStart.getDate()
        }, {
            label: "Hours",
            number: timeToStart.getHours()
        }, {
            label: "Minutes",
            number: timeToStart.getMinutes()
        }, {
            label: "Seconds",
            number: timeToStart.getSeconds()
        }])
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const timeToStart = new Date(startDate - new Date())
            updateTimer(timeToStart)
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        new Date(startDate - new Date()) > 0 && 
            <Grid container mx="auto" className={classes.timerContainer}>
                {timeToStartArray.map((timeToStartItem, index) =>
                    <Grid item xs={3} key={index}>
                        <div xs={3} className={classes.timerNumber}>
                            <span className={classes.timerNumber}>{timeToStartItem.number}</span>
                        </div>
                        <div className={`${classes.timerLabel}`}>
                            <span>{timeToStartItem.label}</span>
                        </div>
                    </Grid>
                )}
            </Grid>
    )
}
