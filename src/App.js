import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="App position-relative">
      <Navbar loggedIn={loggedIn} onSignInClick={toggleLoggedIn} />
      <HomePage loggedIn={loggedIn} />


      <div
        className="position-fixed bottom-0 end-0 m-4 bg-primary p-4 rounded-circle d-md-none"
        style={{ color: 'white', zIndex: 1000 }}
      >
        <i className="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}

export default App;
