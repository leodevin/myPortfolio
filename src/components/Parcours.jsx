import React from "react";
import '../css/Parcours.css';
import '../../node_modules/animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Parcours extends React.Component {
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
            <div id="monParcours" className="parcoursContainer">
                <h1 style={{textAlign:"center"}}> Mon parcours </h1>
                <picture>
                    <source media="(min-width: 900px)" srcSet={require('../img/portfolio_parcours.svg')}/>
                    <img id="parcoursSVG" data-aos="fade-right" src={require('../img/portfolio_parcours_vertical.svg')} alt="IfItDoesntMatchAnyMedia"/>
                </picture>
            </div>
        )

    }
}

export default Parcours;