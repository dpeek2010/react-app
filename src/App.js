import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    console.log("toggle clicked");
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Body darkMode={darkMode} />
    </div>
  );
}
