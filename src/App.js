import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";
import Projectpage from "./components/Projectpage";
import Parcours from "./components/Parcours";
import Competence from "./components/Competence";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Frontpage/>
      <Projectpage/>
      <Parcours/>
      <Competence/>
    </div>
  );
}

export default App;
