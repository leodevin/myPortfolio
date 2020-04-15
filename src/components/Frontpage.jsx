import React from "react";
import '../css/Frontpage.css';
import { motion } from "framer-motion";

import AOS from 'aos';
import 'aos/dist/aos.css';



class Frontpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            circleTransition: 0,
            squareTransition:0,
        }
    }
    componentDidMount(){
        AOS.init({
            duration : 1000
        })
        window.addEventListener('scroll', this.listenToScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    listenToScroll = () => {
        if(window.pageYOffset<100){
            this.state.circleTransition = window.pageYOffset;
        }
        if(window.pageYOffset<200){
            this.state.squareTransition = window.pageYOffset;
        }
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }

    render() {
        return (
            <div className="cadre">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <h1>Léonard Devincre</h1>
                            <h2>Bonjour, je m’appelle Léonard Devincre et je suis étudiant en école d’ingénieur spécialisé en Objets connectés,
                                Réseaux et Services.</h2>
                        </div>
                        <div className="col-lg-5 col-md-4 d-none d-lg-block">
                            <motion.div initial={{opacity: 0, y:100}}
                                        animate={{opacity: 1, y:100-this.state.circleTransition}}
                                        id="circle" />
                            <img className="profil mr-xl-5 show-on-scroll" src={require('../img/myProfil2.jpg')} alt={"Avatar"} />
                        </div>
                        <div className="col-lg-3 col-md-6 col-7">
                            <h3>
                                <p>Etude de signaux</p>
                                <p>Gammification</p>
                                <p>Intelligence artificiel</p>
                                <p>Internet of Things (IOT)</p>
                            </h3>
                        </div>
                        <div className="col-lg-3 col-md-6 col-5">
                            <h3>
                                <p>Lean Startup</p>
                                <p>Modern management</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{opacity: 0, x:-200, rotate:20}}
                    animate={{opacity: 1, x:-200+ this.state.squareTransition}}
                    id="square"/>
            </div>
        )

    }
}

export default Frontpage;