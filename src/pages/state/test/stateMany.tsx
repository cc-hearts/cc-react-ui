import React from "react";
import useStateMany from "../hooks/useStateMany";
interface Props {}
const StateMany: React.FC<Props> = function () {
  const [state, setState] = useStateMany<number>(0);
  const [state2, setState2] = useStateMany<number>(1);
  return (
    <>
      <h1>StateMany</h1>
      <div>
        <span>{state}</span>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          handle click state
        </button>
      </div>
      <div>
        <span>{state2}</span>
        <button
          onClick={() => {
            setState2(state2 + 1);
          }}
        >
          handle click state2
        </button>
      </div>
    </>
  );
};
export default StateMany;
