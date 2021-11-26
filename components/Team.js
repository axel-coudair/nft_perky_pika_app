import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../styles/Team.module.scss'

export default function Team() {

    return (
        <>
            <section className={`${styles.block_team} py-4`}>
                <div className="container">
                    <h2 className={styles.block_team_title}>The perky pikas team</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.block_team_card} d-flex justify-content-center py-3`}>
                                <ul className={`${styles.block_team_card_container} d-flex flex-column`}>
                                    <li className="align-self-center">
                                        <img className={`${styles.block_team_card_img} my-2`} src="/team_1.png" />
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_title} h5`}>Pika Lilly</span>
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_text}`}>Community & Creative Direction</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.block_team_card} d-flex justify-content-center py-3`}>
                                <ul className={`${styles.block_team_card_container} d-flex flex-column`}>
                                    <li className="align-self-center">
                                        <img className={`${styles.block_team_card_img} my-2`} src="/team_2.png" />
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_title} h5`}>Pika Elder</span>
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_text}`}>Creative Direction & Lore</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.block_team_card} d-flex justify-content-center py-3`}>
                                <ul className={`${styles.block_team_card_container} d-flex flex-column`}>
                                    <li className="align-self-center">
                                        <img className={`${styles.block_team_card_img} my-2`} src="/team_3.png" />
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_title} h5`}>Pika Witch</span>
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_text}`}>Artist</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className={`${styles.block_team_card} d-flex justify-content-center py-3`}>
                                <ul className={`${styles.block_team_card_container} d-flex flex-column`}>
                                    <li className="align-self-center">
                                        <img className={`${styles.block_team_card_img} my-2`} src="/team_4.png" />
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_title} h5`}>Pika Tylo</span>
                                    </li>
                                    <li>
                                        <span className={`${styles.block_team_card_text}`}>Engineering</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            `}</style>
        </>
    );
}
