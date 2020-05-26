import React from "react";
import "./App.css";
import Nav from "./component/nav.jsx";
import NavBottom from "./component/navbottom.jsx";
import NavNew from "./component/navnew.jsx";
import NavFixed from "./component/navfixed.jsx";
import Background from "./component/background";
import Cards from "./component/cards.jsx";
import CardsNew from "./component/cardnew";

function App() {
  return (
    <div className="App">
      <NavFixed />

      <Nav />
      <NavNew />
      <Background />
      <Cards />
      <CardsNew />
      <NavBottom />
    </div>
  );
}

export default App;
