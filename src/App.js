import React, { useState } from "react";
import './App.css';

import { Login } from "./login";
import { Register } from "./register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleFormSwitch = (formType) => {
    setShowLogin(formType === 'login');
  };

  return (
    <div className="App">
      {showLogin ? (
        <Login onFormSwitch={handleFormSwitch} />
      ) : (
        <Register onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default App;
