import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar'; // Ensure the Navbar component is correctly placed in `components` folder
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Add Navbar Component */}
      <Navbar />
      <header className="App-header">

      </header>
      <Home />
    </div>
  );
}

export default App;
