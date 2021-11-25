import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../styles/Timeline.module.scss'

export default function Timeline() {

    return (
        <>
            <section className={`${styles.block_timeline} py-4`}>
                <div className="container">
                    <h2 className={styles.block_timeline_title}>RoadMap</h2>
                    <div className={styles.timeline}>
                        <div className={`${styles.timeline_container} ${styles.left}`}>
                            <div className={`${styles.timeline_content}`}>
                                <h2 className={`${styles.timeline_content_title} fs-3`}>Phase 1</h2>
                                <p className={`${styles.timeline_content_text} fs-4`}>Launch 6666 Perkys pikas</p>
                            </div>
                        </div>
                        <div  className={`${styles.timeline_container} ${styles.right}`}>
                            <div className={`${styles.timeline_content}`}>
                                <h2 className={`${styles.timeline_content_title} fs-3`}>Phase 2</h2>
                                <p className={`${styles.timeline_content_text} fs-4`}>Launch customization marketplace</p>
                            </div>
                        </div>
                        <div className={`${styles.timeline_container} ${styles.left}`}>
                            <div className={`${styles.timeline_content}`}>
                                <h2 className={`${styles.timeline_content_title} fs-3`}>Phase 3</h2>
                                <p className={`${styles.timeline_content_text} fs-4`}>Expanding the pikaverse: Pika houses and babies.</p>
                            </div>
                        </div>
                        <div  className={`${styles.timeline_container} ${styles.right}`}>
                            <div className={`${styles.timeline_content}`}>
                                <h2 className={`${styles.timeline_content_title} fs-3`}>Phase 4</h2>
                                <p className={`${styles.timeline_content_text} fs-4`}>Game launch and much more in between</p>
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
