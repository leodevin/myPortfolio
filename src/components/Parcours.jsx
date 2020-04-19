import React from "react";
import '../css/Parcours.css';
import '../../node_modules/animate.css';
import 'aos/dist/aos.css';


class Parcours extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pictureTransition: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        if((window.pageYOffset<2300)&&(window.pageYOffset>1300)){
            this.setState({pictureTransition: window.pageYOffset});
        }
    };

    render() {
        return (
            <div id="monParcours" className="parcoursContainer">
                <h1 style={{textAlign:"center"}}> Mon parcours </h1>
                <picture>
                    <source media="(min-width: 900px)" srcSet={require('../img/portfolio_parcours.svg')}/>
                    <img id="parcoursSVG" src={require('../img/portfolio_parcours_vertical.svg')} alt="IfItDoesntMatchAnyMedia"/>
                </picture>
            </div>
        )

    }
}

export default Parcours;