import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";
import Projectpage from "./components/Projectpage";
import Parcours from "./components/Parcours";
import Competence from "./components/Competence";
import Footer from "./components/Footer";
import Form from "./components/ModalRegisterForm";


function App() {
  return (
    <div className="App">
        <a className="cvButton"  href={`${process.env.PUBLIC_URL}/docs/CV_L.DEVINCRE.pdf`} target='_blank' download>
            <div className="textCVButton">Mon CV</div>
            <img className="imgCV" alt="icon" src={require('../src/img/download.png')}/>
        </a>
      <Navbar/>
      <Frontpage/>
      <Projectpage/>
      <Parcours/>
      <Competence/>
      <Form/>
      <Footer/>
    </div>
  );
}



export default App;
