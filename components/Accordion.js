import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../styles/Accordion.module.scss'

export default function Accordion() {

    return (
        <>
            <section className={`${styles.block_accordion} py-4`}>
                <div className="container">
                    <h2 className={`${styles.block_accordion_title} mb-4`}>FAQ</h2>
                    <div className="accordion" id="accordionPanelsStayOpen">
                        <div className={`${styles.block_accordion_item} accordion-item my-3`}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className={`${styles.block_accordion_item_title} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                How do I get a Perky Pika?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className={`${styles.block_accordion_item_text} accordion-body`}>
                                6,666 Pikas will be available to mint in December 2021.  Follow our announcements via our social media channels for more information (Twitter and Discord).  Join us on Discord today to start earning LEAF coin in advance of the mint.  After launch, we plan to get listed on all the major marketplaces.
                            </div>
                            </div>
                        </div>
                        <div className={`${styles.block_accordion_item} accordion-item my-3`}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className={`${styles.block_accordion_item_title} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                When will the marketplace be live?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className={`${styles.block_accordion_item} accordion-item my-3`}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className={`${styles.block_accordion_item_title} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                What else can I do in the Pikaverse?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className={`${styles.block_accordion_item} accordion-item my-3`}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className={`${styles.block_accordion_item_title} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                What else can I do in the Pikaverse?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            .accordion-item:first-of-type .accordion-button {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }
            .accordion-button:not(.collapsed) {
                color: #23262F;
                background-color: #fff;
                box-shadow: none;
            }
            .accordion-button:not(.collapsed)::after {
                transform: rotate(-180deg);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")
            }
            `}</style>
        </>
    );
}
