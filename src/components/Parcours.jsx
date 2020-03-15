import React from "react";
import '../css/Parcours.css';
import '../../node_modules/animate.css';


class Parcours extends React.Component {

    render() {
        return (
            <div className="parcoursContainer">
                <h1 style={{textAlign:"center"}}> Mon parcours </h1>
                <img style={{marginTop:"100px"}} src={require('../img/portfolio_parcours.svg')}/>
            </div>
        )

    }
}

export default Parcours;