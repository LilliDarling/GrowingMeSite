import React from 'react';

// Fuck with the to variable here for direction of the buttons
const Button = ({ to }) => {
  return (
    //Redirect the page to the latest posts - still needed
    <button class="blueButton" onClick={() => window.location.href = to}>Latest Posts</button>
  );
};


export default Button;