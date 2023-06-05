import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
 
  
  function onDarkModeClick(e) {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    e.preventDefault();
    //console.log(isDarkMode);
  }
  
  function handleBtnClick(e) {
    const spaceIndex = e.target.innertext;
    console.log (spaceIndex);
  }

  /*if(isDarkMode === 1) {
    modeValue = 'App dark';
  } else {
    modeValue = "";
  }*/

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
