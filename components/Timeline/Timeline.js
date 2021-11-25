import React from "react";
import useStyles from './TimelineStyle';
import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
    const classes = useStyles();

    return (
        <>
            <div className={"block_roadmap"}>
                <h1>TEST</h1>
            </div>
            <style jsx>{`
            .block_roadmap {
            }
            `}</style>
        </>
    );
}
