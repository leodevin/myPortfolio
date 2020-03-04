import React from "react";
import '../css/Navbar.css';


class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white myNav">

                    <a className="navbar-brand" href="#">
                        <img id="contactIcon" src={require('../img/contact_icon.png')} alt={"icon"} href="#"/>
                        Me contacter
                    </a>
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
                            <a className="nav-link" href="#">Mes projets</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Mon parcours</a>
                        </li>
                        <li className="nav-item mx-3">
                            <img className="icon" src={require('../img/linkedin_icon.png')} alt={"icon"} href="#"/>
                        </li>
                        <li className="nav-item mx-3">
                            <img className="icon" src={require('../img/email_icon.png')} alt={"icon"} href="#"/>
                        </li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default Navbar;