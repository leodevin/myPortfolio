import React from "react";
import '../css/Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white myNav">
                <a className="navbar-brand" href="#">My Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto mr-5 ">
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default Navbar;