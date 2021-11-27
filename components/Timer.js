import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '../styles/Timer.module.scss'

export default function Timer({ startDate = new Date('2021-11-29T00:00:00') }) {
    const [timeToStartArray, setTimeToStartArray] = useState([])
    const [timeToStart, setTimeToStart] = useState(new Date(startDate - new Date()))

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
            setTimeToStart(new Date(startDate - new Date()))
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        new Date(startDate - new Date()) > 0 &&
        <>
        <div className={`${styles.timerContainer} row mx-auto pt-5 mt-5`}>
            <div className={`${styles.timerDays} col-12`}>
                <span className={styles.timerDays}>
                    {timeToStart.getDate()}
                    {timeToStart.getDate() > 1 ? " DAYS" : " DAY"}
                </span>
            </div>
            </div>
            <div className={`${styles.timerContainer} row mx-auto `}>
                <div className={`${styles.timerNumber} col-12`}>
                    <span className={styles.timerNumber}>
                        {timeToStart.getHours()}.
                        {timeToStart.getMinutes()}.
                        {timeToStart.getSeconds()}
                    </span>
                </div>
            </div>
        </>
    )
}
