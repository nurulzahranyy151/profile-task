import React from "react";
import Profile from "./component/Profile";
import './App.css';
import ProfileImage from './images/wonwoo.jpeg'; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Profile Picture</h1>
        <img src={ProfileImage} alt="Profile" style={{ width: "200px", borderRadius: "10px" }} />
      </div>
      <Profile/>
    </div>
  );
}

export default App;
