import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassesPlayground from "./modules/inheritance/pages/classes-playground";

function App() {
  const H1_STYLES = {
    fontSize: 56,
    textTransform: "uppercase" as any,
    letterSpacing: 6,
  };

  return (
    <div className="App">
      <h1 style={H1_STYLES}>Playground</h1>
      <div
        style={{
          padding: 20,
          border: "dashed orange 2px",
          minHeight: "50vh",
          width: "100%",
        }}
      >
        <ClassesPlayground />
      </div>
    </div>
  );
}

export default App;
