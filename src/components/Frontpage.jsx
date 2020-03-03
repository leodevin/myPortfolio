import React from "react";
import '../css/Frontpage.css';


class Frontpage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cadre">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h1>Léonard Devincre</h1>
                            <h2>Bonjour, je m’appel Léonard Devincre et je suis étudiant en école d’ingénieur spécialisé en Objets connectés,
                                Réseaux et Services.</h2>
                        </div>
                        <div className="col-sm-5 profilContainer">
                            <img className="profil mr-xl-5" src={require('../img/myProfile.jpg')} alt={"Avatar"} />
                            <div id="circle"></div>
                        </div>
                        <div className="col-sm-3">
                            <h3>
                                <p>Etude de signaux</p>
                                <p>Gammification</p>
                                <p>Intelligence artificiel</p>
                                <p>Internet of Things (IOT)</p>
                            </h3>
                        </div>
                        <div className="col-sm-3">
                            <h3>
                                <p> Lean Startup</p>
                                <p>Modern management</p>
                            </h3>
                        </div>
                    </div>
                </div>
                <div id="square"/>
            </div>
        )

    }
}

export default Frontpage;