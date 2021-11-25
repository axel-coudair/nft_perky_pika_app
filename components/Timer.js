import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '../styles/Timer.module.css'

export default function Timer({ startDate = new Date('2021-11-29T00:00:00') }) {
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
        new Date(startDate - new Date()) > 0 && <div className="container pt-5 pb-5 m-5" >
            <div className={`${styles.timerContainer} row mx-auto`}>
                {timeToStartArray.map((timeToStartItem, index) =>
                    <div className={"col-3 "} key={index}>
                        <div className={`${styles.timerNumber} col-12`}>
                            <span className={styles.timerNumber}>{timeToStartItem.number}</span>
                        </div>
                        <div className={`${styles.timerLabel} col-12`}>
                            <span>{timeToStartItem.label}</span>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}
