import React from 'react';
import { motion } from "framer-motion";
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";
import Projectpage from "./components/Projectpage";
import Parcours from "./components/Parcours";
import Competence from "./components/Competence";
import Footer from "./components/Footer";

function myFunction() {
    setTimeout(showPage, 2500);
}

function showPage() {
    document.getElementById("loader_background").style.display = "none";
    document.getElementById("myDiv").style.display = "initial";
}


function App() {
    return (
        <div onLoad={() => myFunction()}>
            <motion.div
                initial={{y:0}}
                animate={{y: -500}}
                transition={{delay:2, duration:0.5}}
                id="loader_background">
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                    </svg>
                </div>
            </motion.div>
            <div
                id="myDiv"
                className="App">
                <a className="cvButton"  href={`${process.env.PUBLIC_URL}/docs/CV_L.DEVINCRE.pdf`} target='_blank' rel='noopener' download>
                    <div className="textCVButton">Mon CV</div>
                    <img className="imgCV" alt="icon" src={require('../src/img/download.png')}/>
                </a>
                <Navbar/>
                <Frontpage/>
                <Projectpage/>
                <Parcours/>
                <Competence/>
                <Footer/>
            </div>
        </div>
    );
}


export default App;
