import React from "react";
import AddValue from "./components/AddValue";
import Counter from "./components/counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";


function App() {
  return (
    <div>
      <Counter/>  
     <IncreaseCounter/>
     <DecreaseCounter/>
     <IncreaseByTwoCounter/>
     <AddValue/>
    </div>
  );
}

export default App;