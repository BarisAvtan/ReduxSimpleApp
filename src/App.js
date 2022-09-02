import React from "react";
import Counter from "./components/counter";
import DecreaseCounter from "./components/decreaseCounter";
import IncreaseByTwoCounter from "./components/increaseByTwoCounter";
import IncreaseCounter from "./components/increaseCounter";


function App() {
  return (
    <div>
      <Counter/>
      {/* <increaseCounter/>
      <DecreaseCounter/>
      <IncreaseCounter/>
      <IncreaseByTwoCounter/> */}
    </div>
  );
}

export default App;