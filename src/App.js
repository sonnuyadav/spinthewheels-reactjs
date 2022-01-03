import "./App.css";
import React, { useEffect } from "react";
import Routers from "./components/my-routes/Routers";
import WOW from "wow.js";

function App() {
  const wow = new WOW();
  useEffect(() => {
    wow.init();
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
