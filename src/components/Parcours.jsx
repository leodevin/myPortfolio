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
                <img data-aos="fade-right" style={{marginTop:"100px"}} src={require('../img/portfolio_parcours.svg')}/>
            </div>
        )

    }
}

export default Parcours;