import React from "react";
import ButtonGroup from "../components/ButtonGroup";

const App = () => {

    const printButtonLabel = (event) => {
        console.log(event.target.name);
        //do some stuff here
      };
      
  return (
    <div className="App">
      <ButtonGroup buttons={["One", "Two", "Three"]} 
      doSomethingAfterClick={printButtonLabel} />
    </div>
  );
};

export default App;