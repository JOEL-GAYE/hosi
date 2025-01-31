import React from 'react';
import "../App.css";

function Header({ clinicName = "Beauty Clinic", timings = "Mon to Fri 0900hrs to 1800hrs" }) {
  return (
    <div>
        <header className="header">
      <h1>{clinicName}</h1> 
      <h2 className="timeh2">{timings}</h2>
    </header>
    <navbar></navbar>
    </div>
  );
}

export default Header;
