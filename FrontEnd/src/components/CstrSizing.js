import React from 'react';
import { useNavigate } from 'react-router-dom';
const CstrSizing = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('./CstrSizingAnswer');
      };
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess'>CSTR Sizing with Heat Exchanger</h1>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="a">Volume (in m^3)</label>
            <input type="text" id="a" name="a" />
          </div>
          <div className="column">
            <label htmlFor="b">Initial Conc</label>
            <input type="text" id="b" name="b" />
          </div>
          <div className="column">
            <label htmlFor="c">A</label>
            <input type="text" id="c" name="c" />
          </div>
          <div className="column">
            <label htmlFor="d">Initial Molar flow rate</label>
            <input type="text" id="Fa_O" name="Fa_O" />
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">T</label>
          <input type="text" id="input1" name="input1" />
          K
        </div>
        <div className="row">
          <label htmlFor="input2">Ea</label>
          <input type="text" id="input2" name="input2" />
          J/mol
        </div>
        <div className="row">
          <label htmlFor="input3">Overall Heat Transfer Coefficient</label>
          <input type="text" id="input3" name="input3" />
          W/K
        </div>
        <div className='row'>
        <div className="column">
            <label htmlFor="cpb">Standard Heat of Reaction</label>
            <input type="text" id="H_O" name="H_O" />
            W
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="cpa">Cp of A (J/mol K)</label>
            <input type="text" id="cpa" name="cpa" />
          </div>
          
          <div className="column">
            <label htmlFor="cpc"> T_O</label>
            <input type="text" id="cpc" name="cpc" />
            K
          </div>
        </div>
        <div className='row'>
            <button className="button2" onClick={handleButtonClick}>Calculate X and T</button>
        </div> 
      </div>
    </div>
  );
};
export default CstrSizing;
