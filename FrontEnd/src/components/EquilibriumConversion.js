import React from 'react';
import { useNavigate } from 'react-router-dom';

const EquilibriumConversion = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('./EquilibriumConversionAnswer');
      };
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess'>Equilibrium Conversion</h1>
        </div>
        <div className='row'></div>
      <div className="row">
          <label htmlFor="input1">Kc</label>
          <input type="text" id="input1" name="input1" />
        </div>
        <div className="row">
          <label htmlFor="input2">Standard Heat of Reaction</label>
          <input type="text" id="H_O" name="H_O" />
          J/mol
        </div>
        <div className="row">
          <label htmlFor="input3">Cp_a</label>
          <input type="text" id="Cp_a" name="Cp_a" />
          J/mol K
        </div>
        <div className="row">
          <label htmlFor="input3">T1</label>
          <input type="text" id="T1" name="T1" />
          K
        </div>
        
        <div className='row'>
            <button className="button2" onClick={handleButtonClick}>Calculate and plot graph</button>
        </div> 
      </div>
    </div>
  );
};
export default EquilibriumConversion;
