import React from "react";
import { motion } from "framer-motion";
import '../css/Parcours.css';
import '../../node_modules/animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Parcours extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pictureTransition: 0,
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
        if((window.pageYOffset<2300)&&(window.pageYOffset>1300)){
            this.state.pictureTransition = window.pageYOffset-1300;
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
            <div id="monParcours" className="parcoursContainer">
                <h1 style={{textAlign:"center"}}> Mon parcours </h1>
                <picture>
                    <motion.source
                        animate={{y:(-1000+this.state.pictureTransition)}}
                        media="(min-width: 900px)" srcSet={require('../img/portfolio_parcours.svg')}/>
                    <motion.img
                        animate={{x:(-1000+this.state.pictureTransition)}}
                        id="parcoursSVG" src={require('../img/portfolio_parcours_vertical.svg')} alt="IfItDoesntMatchAnyMedia"/>
                </picture>
            </div>
        )

    }
}

export default Parcours;