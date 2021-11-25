import React from "react";


export default function TextBlock() {
    return (
        <section className="block_bestpikas py-4">
            <div className="container">
                <div className="block_bestpikas_title mb-4 text-center text-lg-start">
                    <h2>The best Pikas on the NFT market</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 d-flex justify-content-lg-start justify-content-center">
                        <img className="block_best_perkys_img" src="/pikas.png" />
                    </div>
                    <div className="col-12 col-lg-7 pt-5">
                        <p>Perky Pikas is a collection of 6,666 unique NFTs on the Solana blockchain. Pick up your Perky Pika to join us in the Pikaverse: help us create a rich community and expand on the Pika storyline.</p>
                        <h5 className="h4">Fully Customizble Pikas</h5>
                        <p>Earn $LEAF coin by being an engaged member of the community.  Spend $LEAF coin to buy items on the marketplace and kit your Pika out in your favourite gear!</p>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .block_bestpikas {
                    color: #fff;
                }

                .block_bestpikas h5 {
                    font-weight: bold;
                }

                .block_best_perkys_img {
                    max-width: 350px;
                }
                .block_bestpikas_title {
                    font-family: 'M PLUS 1 Code', sans-serif;
                    text-transform: uppercase;
                }
                @media (max-width: 992px) {
                    .block_navbar {
                        position: initial;
                        background: #fff;
                    }
                  }

            `}</style>
        </section>
    );
}
