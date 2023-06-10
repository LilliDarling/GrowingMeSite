import React, { useState } from "react";
import "../css/button.css"

const ButtonGroup = ({buttons, doSomethingAfterClick}) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    doSomethingAfterClick(event);
  };
  
  return (
    <>
    {buttons.map((buttonLabel, i) => (
      <button 
        key={i} 
        name={buttonLabel} 
        onClick={() => setClickedId(i)}
        className={i === clickedId ? "customButton active" : "customButton"}
        > 
        {buttonLabel}
        </button>
        ))}
    </>
  );
};

export default ButtonGroup;