import React from "react";
import Link from 'next/link';


export default function Navbar() {

    return (
        <nav className="block_navbar navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <div className="d-flex flex-grow-1 justify-content-between justify-content-md-start">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggle">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" target="blank">
                                <span className="nav-link">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" target="blank">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" target="blank">Marketplace</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" target="blank">Lore</a>
                        </li>
                        <Link href="/mint" target="blank">
                            <a className="nav-link">
                                Mint
                            </a>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#" target="blank">Discord</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" target="blank">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .block_navbar {
                    color: #23262F;
                    position: absolute;
                    width: 100%;
                }
                .navbar-light .navbar-nav .nav-link {
                    color: #23262F;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: bold;
                    text-decoration: underline 0.15em rgba(255, 255, 255, 0);
                    transition: text-decoration-color 300ms;
                }
                .navbar-light .navbar-nav .nav-link:hover {
                    color: #23262F;
                    text-transform: uppercase;
                    text-decoration-color: #23262F;

                font-weight: bold;
                }
                @media (max-width: 992px) {
                    .block_navbar {
                        position: initial;
                        background: #fff;
                    }
                  }

            `}</style>
        </nav>
    );
}
