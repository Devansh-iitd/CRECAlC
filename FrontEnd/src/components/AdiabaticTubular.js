import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdiabaticTubular = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('./AdiabaticTubularAnswer');
      };
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess'>Adiabatic Tubular Reactor</h1>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="a">Standard Heat(H_O)</label>
            <input type="text" id="H_O" name="H_O" />
            W
          </div>
          <div className="column">
            <label htmlFor="b">Molar Flow Rate(mol/s)</label>
            <input type="text" id="FA_O" name="FA_O" />
            
          </div>
          <div className="column">
            <label htmlFor="c">Initial Conc (M)</label>
            <input type="text" id="CA_O" name="CA_O" />
          </div>
          <div className="column">
            <label htmlFor="d">Reversible?</label>
            <input type="text" id="r" name="r" />
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">T1</label>
          <input type="text" id="input1" name="T1" />
          K
        </div>
        <div className="row">
          <label htmlFor="input2">T2</label>
          <input type="text" id="input2" name="T2" />
          K
        </div>
        <div className="row">
          <label htmlFor="input3">T_O</label>
          <input type="text" id="input3" name="T_O" />
          K
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="cpa">Ea (J/mol)</label>
            <input type="text" id="Ea" name="Ea" />
          </div>
          <div className="column">
            <label htmlFor="cpb">K1</label>
            <input type="text" id="K1" name="K1" />
          </div>
          <div className="column">
            <label htmlFor="cpc">Kc_O</label>
            <input type="text" id="Kc_O" name="Kc_O" />
          </div>
          <div className="column">
            <label htmlFor="cpd">Cp_a (J/mol K)</label>  
            <input type="text" id="Cp_a" name="Cp_a" />
          </div>
        </div>
        <div className='row'>
            <label htmlFor="cpd">Gas Phase</label>  
            <input type="text" id="g" name="g" />
        </div>
        <div className='row'>
            <button className="button2" onClick={handleButtonClick}>Reactor Volume and Graphs</button>
        </div> 
      </div>
    </div>
  );
};
export default AdiabaticTubular;
