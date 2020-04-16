import React from "react";
import { motion } from "framer-motion";
import '../css/Projectpage.css';
import '../../node_modules/animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Projectpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            barTransition: 0,
            trigerSquareTransition: false,
            square2Transition: 0
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
        if((window.pageYOffset<900)&&(window.pageYOffset>600)){
            this.state.barTransition = window.pageYOffset-600;
        }
        if(window.pageYOffset>1000){
            this.state.trigerSquareTransition = true;
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
            <div className="projetContainer" id="mesProjets">
                <h1 style={{textAlign:"center"}}> Mes Projets </h1>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-6">
                            <div
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
                            {this.state.trigerSquareTransition && (
                                <motion.div
                                initial={false}
                                animate={{opacity:1,
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 270, 270, 20],
                                    borderRadius: ["5%", "5%", "50%", "50%", "1%"],}}
                                transition={{duration:1}} id="square2"/>
                            )}
                            <img className="imageProjet mr-xl-5" src={require('../img/madagascar.jpg')}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-6">
                            <div data-aos="zoom-out-down" id="square3"/>
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
            </div>

        )

    }
}

export default Projectpage;