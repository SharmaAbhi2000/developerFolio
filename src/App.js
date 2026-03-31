import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import BackgroundLines from "./components/backgroundLines/BackgroundLines";

function App() {
  return (
    <div>
      <BackgroundLines />
      <Main />
    </div>
  );
}

export default App;
