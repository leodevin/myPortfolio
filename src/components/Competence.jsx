import React from "react";
import '../css/Competence.css';
import '../../node_modules/animate.css';


class Competence extends React.Component {

    render() {
        return (
            <div className="competenceContainer">
                <h1 style={{textAlign:"center"}}> Mes compétences </h1>
                <div id="mesCompetences" className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="competenceTitle">Programmation</h3>
                            <img className="imgCompetence" src={require('../img/programmation_icones.png')}/>
                        </div>
                        <div className="col-md-4">
                            <h3 className="competenceTitle">Langues</h3>
                            <img className="imgCompetence" src={require('../img/icone_langue.png')}/>
                        </div>
                        <div className="col-md-4">
                            <h3 className="competenceTitle">Associatifs</h3>
                            <img className="imgCompetence" src={require('../img/icone_associatif.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Competence;