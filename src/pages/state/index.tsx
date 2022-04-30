import React from "react";
import State from "./test/state";
import StateMany from "./test/stateMany";
interface Props {}
const States: React.FC<Props> = function () {
  return (
    <>
      <State />
      <hr />
      <StateMany />
    </>
  );
};
export default States;
