import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Frontpage from "./components/Frontpage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Frontpage/>
    </div>
  );
}

export default App;
