import React, { useEffect, useState } from "react";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  });

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  }

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
  }

  return (
    (isUserSignedIn && <Home onLogout={onLogout} />) || (<Login onLoginSuccessful={onLoginSuccessful} />)
  );

}

export default App;
