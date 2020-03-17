import React from "react";
import '../css/Navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <nav id="Home" className="navbar navbar-expand-md navbar-light bg-white shadow-none myNav">

                    <a id="madeInReact" className="navbar-brand" href="#Home">
                        <img id="contactIcon" src={require('../img/logo_react.svg')} alt={"icon"} href="#"/>
                        Mon portfolio en ReactJS
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto mr-5 ">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#mesProjets">Projets</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#monParcours">Parcours</a>
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