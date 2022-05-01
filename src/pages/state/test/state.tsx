import React from "react";
import useState from ".././hooks/useState";
interface Props {}
const testUseState: React.FC<Props> = function () {
  const [state, setState] = useState<number>(0);

  const [state2, setState2] = useState<number>(1);
  return (
    <>
      <h1>testUseState</h1>
      <div>{state}</div>
      <div>{state2}</div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        handle click state
      </button>
    </>
  );
};
export default testUseState;
