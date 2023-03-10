import React, { useState } from "react";
import OutPut from "./OutPut";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello</h2>
      {!changeText && <OutPut>만나서 반가워!</OutPut>}
      {changeText && <p>변화</p>}

      <button onClick={changeTextHandler}>text change</button>
    </div>
  );
};

export default Greeting;
