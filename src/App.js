import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";
import Projectpage from "./components/Projectpage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Frontpage/>
      <Projectpage/>
    </div>
  );
}

export default App;
