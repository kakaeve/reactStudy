import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutout from "./components/Demo/DemoOutout";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("실행중");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prev => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>토글버튼</Button>

      <Button onClick={toggleParagraphHandler}>버튼</Button>
      <DemoOutout show={showParagraph} />
    </div>
  );
}

export default App;
