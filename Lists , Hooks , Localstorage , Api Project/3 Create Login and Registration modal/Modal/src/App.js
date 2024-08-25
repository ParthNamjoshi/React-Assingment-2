import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPage from "./MainPage";
import LoginModel from "./LoginModel";
import RegModel from "./RegModel";
const App = () => {

  return (
    <div>
      <MainPage />
      <LoginModel />
      <RegModel />
    </div>
  );
};

export default App;
