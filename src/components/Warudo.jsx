import React from "react";

function Warudo({ seconds }) {
  if (seconds < 10) {
    return null;
  }
  
return (
    <div>
        <h2 style={{ fontSize: '50px' }}>ZA WARUDO !!!</h2>
        <img src="za-warudo.gif" alt="ZA WARUDO" />
    </div>
);
}

export default Warudo;