import React from "react";
import { motion } from "framer-motion";
import '../css/Navbar.css';
import { Link } from "react-scroll";

class Navbar extends React.Component {

    render() {
        return (
            <motion.nav
                initial={{y:1000}}
                animate={{y:0}}
                transition={{delay:2.5, duration: 0.5}}
                id="Home"
                className="navbar navbar-expand-md navbar-light bg-white shadow-none myNav">

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
                            <Link
                                activeClass="active"
                                to="mesProjets"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                clasName="nav-link">
                                <a className="nav-link">Projets</a></Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                activeClass="active"
                                to="monParcours"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                clasName="nav-link">
                                <a className="nav-link">Parcours</a></Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                activeClass="active"
                                to="mesCompetences"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                clasName="nav-link">
                                <a className="nav-link">Compétences</a></Link>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="https://www.linkedin.com/in/léonard-devincre-861308151/"><img className="icon" src={require('../img/linkedin_icon.png')} alt={"icon"}/></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="mailto:leonard.devincre@free.fr"><img className="icon" src={require('../img/email_icon.png')} alt={"icon"} href="#"/></a>
                        </li>
                    </ul>
                </div>
            </motion.nav>
        )

    }
}

export default Navbar;