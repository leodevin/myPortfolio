import React from "react";
import { motion } from "framer-motion";
import '../css/Projectpage.css';
import '../../node_modules/animate.css';


class Projectpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            barTransition: 0,
            square1Transition: 0,
            square2Transition: 0,
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
            if((window.pageYOffset<2200)&&(window.pageYOffset>1700)){
                this.setState({square2Transition: window.pageYOffset-1700});
            }
        }else if(window.innerWidth>400){
            if((window.pageYOffset<3300)&&(window.pageYOffset>1800)){
                this.setState({square2Transition: (window.pageYOffset-1500)});
            }
        }else{
            if((window.pageYOffset<3700)&&(window.pageYOffset>2300)){
                this.setState({square2Transition: (window.pageYOffset-1300)});
            }
        }
        if(window.innerWidth>1000){
            if(window.pageYOffset>2300){
                if(window.pageYOffset>2386){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-2300})
                }
            }
        }else if(window.innerWidth>767){
            if(window.pageYOffset>2600){
                if(window.pageYOffset>2686){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-2600})
                }
            }
        }else if(window.innerWidth>600){
            if(window.pageYOffset>3200){
                if(window.pageYOffset>3286){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-3200})
                }
            }
        }else if(window.innerWidth>500){
            if(window.pageYOffset>3500){
                if(window.pageYOffset>3586){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-3500})
                }
            }
        }else if(window.innerWidth>400){
            if(window.pageYOffset>3500){
                if(window.pageYOffset>3586){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-3500})
                }
            }
        }else if(window.innerWidth>330){
            if(window.pageYOffset>4000){
                if(window.pageYOffset>4086){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-4000})
                }
            }
        }else{
            if(window.pageYOffset>4300){
                if(window.pageYOffset>4386){
                    this.setState({titleReavealed: 86})
                }else {
                    this.setState({titleReavealed: window.pageYOffset-4300})
                }
            }
        }

    };


    render() {
        return (
            <div id="projetRecompenceContainer">
                <div className="projetContainer" id="mesProjets">
                    <h1 style={{textAlign:"center"}}> Mes Projets </h1>
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-5 col-md-6">
                                <motion.div
                                    initial={{rotate:-37}}
                                    animate={{x:(this.state.barTransition/18), y:(this.state.barTransition/12)}}
                                    id="bar1"/>
                                <img className="imageProjet mr-xl-5" src={require('../img/Veelo.png')} alt="Veelo.png"/>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div id="titreProjet1">Veelo</div>
                                <div id="texteProjet1">Veelo est un système de géolocalisation innovant pour vélo.
                                    Nous avons fait le pari d’utiliser des retours haptiques pour communiquer avec l’utilisateur.
                                    Nos cyclistes peuvent ainsi être guidés de manière simple et intuitive, sans utiliser
                                    d’appareils visuels ou auditifs. Grâce à une matrice de vibreurs disposée sur des sous gants
                                    connectés, les utilisateurs se dirigent en toute sécurité.</div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 order-md-1 order-2">
                                <div id="titreProjet2">Projet solidaire à Madagascar</div>
                                <div id="texteProjet2">Projet en équipe dans le cadre des scouts et guides de France. Nous avons organisé une colonie de vavances pour des enfants défavorisés de la capitale.
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
                                <img className="imageProjet mr-xl-5" src={require('../img/madagascar.jpg')} alt="madagascar.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-5 col-md-6">
                                <img className="imageProjet mr-xl-5" src={require('../img/lumieres.jpg')} alt="lumieres.jpg"/>
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
                <div id="superRecompenceContainer">
                    <div id="recompense">
                        <motion.div  animate={{scale:(1+this.state.square2Transition/250)}} id="square3"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-12" id="containerConcourTitle1">
                                    <motion.div
                                        id="concourTitle1"
                                        initial={{ y: 86 * 1.2 }}
                                        animate={{ y: 86-this.state.titleReavealed }}>Mes meilleures</motion.div>
                                </div>
                                <div className="col-12" id="containerConcourTitle2">
                                    <motion.div
                                        id="concourTitle2"
                                        initial={{ y: -86 * 1.2 }}
                                        animate={{ y: this.state.titleReavealed-86 }}>réalisations</motion.div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5">
                                            <div id="whiteCircleRecompense">
                                                <img id="imageWhiteCircle" src={require('../img/challenge-innovation-logo.jpg')} alt="challenge-innovation-logo.jpg"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7">
                                            <div id="titleRecompense">2e place aux concours Challenge Innovation 2020</div>
                                            <div id="textRecompense">Le Challenge "Innovation Sécurité Routière" récompense
                                                les projets portant sur la sécurité routière. Mon équipe et moi-même avons obtenu
                                                la seconde place du concours pour notre projet Veelo. L'argent gagné nous permet
                                                aujourd'hui de développer notre projet en parallèle de nos études !</div>

                                        </div>
                                    </div>
                                </div>
                                <div className="container" style={{marginTop: "100px"}}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5">
                                            <div id="whiteCircleRecompense">
                                                <img id="imageWhiteCircle2" src={require('../img/innov_awards_logo.jpg')} alt="innov_awards_logo.jpg"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7">
                                            <div id="titleRecompense">2e prix du jury aux Graines d'Innov Awards 2017</div>
                                            <div id="textRecompense">Ce prix a récompensé le travail de mon équipe et moi-même sur notre projet Haptic Bracelet.</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}

export default Projectpage;