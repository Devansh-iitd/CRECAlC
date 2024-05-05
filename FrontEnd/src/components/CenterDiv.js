import React from 'react';

import { useNavigate } from 'react-router-dom';
const CenterDiv = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to HeatExchanger component when the button is clicked
    navigate('./HeatExchanger');
  };
  const handleButtonClick2 = () => {
    // Navigate to HeatExchanger component when the button is clicked
    navigate('./AdiabaticTubular');
  };
  const handleButtonClick3 = () => {
    // Navigate to HeatExchanger component when the button is clicked
    navigate('./EquilibriumConversion');
  };
  const handleButtonClick4 = () => {
    // Navigate to HeatExchanger component when the button is clicked
    navigate('./CstrSizing');
  };
  return (
    <div className="container">
      <div className="content">
        <button className="button" onClick={handleButtonClick}>Heat of Reaction</button>
        <button className="button" onClick={handleButtonClick2}>Adiabatic Tubular Reactor</button>
        <button className="button" onClick={handleButtonClick3}>Equilibrium Conversion</button>
        <button className="button" onClick={handleButtonClick4}>CSTR Sizing with Heat Exchanger</button>
      </div>
    </div>
  );
};
export default CenterDiv;
