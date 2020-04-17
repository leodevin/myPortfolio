import React from "react";
import '../css/Frontpage.css';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';



class Frontpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            circleTransition: 0,
            squareTransition:0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        if(window.pageYOffset<100){
            this.setState({
                circleTransition: window.pageYOffset
            });
        }
        if(window.pageYOffset<400){
            this.setState({
                squareTransition: window.pageYOffset
            });
        }
    };

    render() {
        return (
            <motion.div
                initial={{y:1000}}
                animate={{y:0}}
                transition={{delay:2.5, duration: 1}}
                className="cadre">
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
                    initial={{ rotate:20}}
                    animate={{ opacity:1, x:this.state.squareTransition-230}}
                    id="square"/>
            </motion.div>
        )

    }
}

export default Frontpage;