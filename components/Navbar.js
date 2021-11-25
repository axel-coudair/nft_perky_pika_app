import React from "react";


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
                            <a className="nav-link" href="#" target="blank">Home</a>
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
                        <li className="nav-item">
                            <a className="nav-link" href="#" target="blank">Mint</a>
                        </li>
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
                    color: #000;
                    position: absolute;
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
