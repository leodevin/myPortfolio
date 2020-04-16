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

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2500);
}

function showPage() {
    document.getElementById("loader_background").style.display = "none";
    document.getElementById("myDiv").style.display = "initial";
}


function App() {
    return (
        <div onLoad={() => myFunction()}>
            <div id="loader_background">
                <motion.div
                    id="loader"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        loop: Infinity,
                        repeatDelay: 1
                    }}
                />
            </div>
            <div style={{display: "none"}} id="myDiv" className="App">
                <a className="cvButton"  href={`${process.env.PUBLIC_URL}/docs/CV_L.DEVINCRE.pdf`} target='_blank' download>
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
