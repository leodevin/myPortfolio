import React from "react";
import '../css/Frontpage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';





class Frontpage extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        AOS.init({
            duration : 1000
        })
    }

    render() {
        return (
            <div className="cadre">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <h1>Léonard Devincre</h1>
                            <h2>Bonjour, je m’appel Léonard Devincre et je suis étudiant en école d’ingénieur spécialisé en Objets connectés,
                                Réseaux et Services.</h2>
                        </div>
                        <div className="col-lg-5 col-md-4 d-none d-lg-block profilContainer">
                            <img className="profil mr-xl-5 show-on-scroll" src={require('../img/myProfil2.jpg')} alt={"Avatar"} />
                            <div data-aos='fade-up' id="circle" ></div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <h3>
                                <p>Etude de signaux</p>
                                <p>Gammification</p>
                                <p>Intelligence artificiel</p>
                                <p>Internet of Things (IOT)</p>
                            </h3>
                        </div>
                        <div className="col-lg-3 col-6">
                            <h3>
                                <p> Lean Startup</p>
                                <p>Modern management</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-right' id="square"/>
            </div>
        )

    }
}

export default Frontpage;