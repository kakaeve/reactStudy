import React from "react";

const DemoOutout = props => {
  console.log("데모 실행");
  return <p>{props.show ? "새거!" : ""}</p>;
};

export default React.memo(DemoOutout);
