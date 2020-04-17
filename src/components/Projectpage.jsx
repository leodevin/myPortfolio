import React from "react";
import { motion } from "framer-motion";
import '../css/Projectpage.css';
import '../../node_modules/animate.css';
import 'aos/dist/aos.css';


class Projectpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            barTransition: 0,
            square1Transition: 0,
            square2Transition: 0,
            titleToogled: false,
            titleReavealed: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        if((window.pageYOffset<1800)&&(window.pageYOffset>100)){
            this.setState({barTransition: window.pageYOffset});
        }
        if((window.pageYOffset<1800)&&(window.pageYOffset>600)){
            this.setState({square1Transition: window.pageYOffset});
        }
        if(window.innerWidth>1000){
            if((window.pageYOffset<2400)&&(window.pageYOffset>1200)){
                this.setState({square2Transition: window.pageYOffset});
            }
        }else{
            if((window.pageYOffset<3300)&&(window.pageYOffset>1800)){
                this.setState({square2Transition: (window.pageYOffset-1400)});
            }
        }
        if(window.innerWidth>1000){
            if((window.pageYOffset>2300) && (window.pageYOffset<2386)){
                this.setState({titleToogled: true});
                this.setState({titleReavealed: window.pageYOffset-2300})
            }
        } else if(window.innerWidth>400){
            if((window.pageYOffset>3500) && (window.pageYOffset<3586)){
                this.setState({titleToogled: true});
                this.setState({titleReavealed: window.pageYOffset-3500})
            }
        }else{
            if((window.pageYOffset>3700) && (window.pageYOffset<3786)){
                this.setState({titleToogled: true});
                this.setState({titleReavealed: window.pageYOffset-3700})
            }
        }

    };

    render() {
        return (
            <div className="projetContainer" id="mesProjets">
                <h1 style={{textAlign:"center"}}> Mes Projets </h1>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-6">
                            <motion.div
                                initial={{rotate:-37}}
                                animate={{x:(this.state.barTransition/18), y:(this.state.barTransition/12)}}
                                id="bar1"/>
                            <img className="imageProjet mr-xl-5" src={require('../img/Veelo.jpg')}/>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div id="titreProjet1">Veelo</div>
                            <div id="texteProjet1">Développement de sous gants connectés qui permettent aux livreurs à vélos de se déplacer en toute sécurité.
                                Notre système de communication innovant haptique envoie les informations de direction
                                à l’utilisateur en toute sécurité.</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 order-md-1 order-2">
                            <div id="titreProjet2">Projet solidaire à Madagascar</div>
                            <div id="texteProjet2">Projet en équipe (5 amis) dans le cadre des scouts et guides de France.
                                La récolte de l’argent nécessaire à la réalisation du projet est dû à 2 ans de jobs étudiants
                                (babysitting, organisation de réception, déménagement etc).</div>
                        </div>
                        <div className="col-lg-5 col-md-6 order-md-2 order-1">
                            <motion.div
                                initial={{rotate:20}}
                                animate={{opacity:1,
                                    x:(this.state.barTransition/18),
                                    y:(this.state.square1Transition/12)}}
                                id="square2"/>
                            <img className="imageProjet mr-xl-5" src={require('../img/madagascar.jpg')}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-6">
                            <img className="imageProjet mr-xl-5" src={require('../img/lumieres.jpg')}/>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div id="titreProjet1">Lampes connectées</div>
                            <div id="texteProjet1">Commande de la luminosité, intensité et couleur de trois lampes HueLights
                                via une application Android. Utilisation du serveur CloudMQTT et d’une carte Arduino connecté,
                                via un shield-Ethernet. Découverte du fonctionnement des « Beacons » pour détecter via Bluetooth
                                les lampes à proximité.</div>
                        </div>
                    </div>
                </div>
                <motion.div animate={{scale:(1+this.state.square2Transition/380)}} id="square3"/>
                <div id="recompense">
                    { this.state.titleToogled &&
                    <div className="container">
                        <div className="row">
                            <div className="col-12" id="containerConcourTitle1">
                                <motion.div
                                    id="concourTitle1"
                                    initial={{ y: 86 * 1.2 }}
                                    animate={{ y: 86-this.state.titleReavealed }}>Reveal from</motion.div>
                            </div>
                            <div className="col-12" id="containerConcourTitle2">
                                <motion.div
                                    id="concourTitle2"
                                    initial={{ y: -86 * 1.2 }}
                                    animate={{ y: this.state.titleReavealed-86 }}>the middle</motion.div>
                            </div>
                        </div>
                    </div>
                    }
                </div>

            </div>

        )

    }
}

export default Projectpage;