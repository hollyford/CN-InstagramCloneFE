import React, { useState, useEffect } from "react";
import './App.css';
import { Feed } from "./components/feed";
import { Login } from "./components/login";
import { tokenFetch } from "./utils";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    tokenFetch(setUser);
  });
  
  return (
    <div className="App">{!user ? <Login setUser={setUser} /> : <Feed />}</div>
  )
}

export default App;
