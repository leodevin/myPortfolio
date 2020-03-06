import React from "react";
import '../css/Projectpage.css';


class Projectpage extends React.Component {

    render() {
        return (
            <div className="projetContainer">
                <h1 style={{textAlign:"center"}}> Mes Projets </h1>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-6">
                            <div id="bar1"/>
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
                        <div className="col-lg-7 col-md-6">
                            <div id="titreProjet2">Projet solidaire à Madagascar</div>
                            <div id="texteProjet2">Projet en équipe (5 amis) dans le cadre des scouts et guides de France.
                                La récolte de l’argent nécessaire à la réalisation du projet est dû à 2 ans de jobs étudiants
                                (babysitting, organisation de réception, déménagement etc).</div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div id="square2"/>
                            <img className="imageProjet mr-xl-5" src={require('../img/madagascar.jpg')}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-6">
                            <div id="square3"/>
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