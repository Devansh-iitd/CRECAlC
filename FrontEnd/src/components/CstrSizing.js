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
            <label htmlFor="a">Value of a:</label>
            <input type="text" id="a" name="a" />
          </div>
          <div className="column">
            <label htmlFor="b">Value of b:</label>
            <input type="text" id="b" name="b" />
          </div>
          <div className="column">
            <label htmlFor="c">Value of c:</label>
            <input type="text" id="c" name="c" />
          </div>
          <div className="column">
            <label htmlFor="d">Value of d:</label>
            <input type="text" id="d" name="d" />
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">Reference Temperature:</label>
          <input type="text" id="input1" name="input1" />
          K
        </div>
        <div className="row">
          <label htmlFor="input2">Temperature of Reaction:</label>
          <input type="text" id="input2" name="input2" />
          W/m
        </div>
        <div className="row">
          <label htmlFor="input3">Standard Heat of Reaction at Tr:</label>
          <input type="text" id="input3" name="input3" />
          J/mol
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="cpa">Cp of A (J/mol K)</label>
            <input type="text" id="cpa" name="cpa" />
          </div>
          <div className="column">
            <label htmlFor="cpb">Cp of B (J/mol K)</label>
            <input type="text" id="cpb" name="cpb" />
          </div>
          <div className="column">
            <label htmlFor="cpc">Cp of C (J/mol K)</label>
            <input type="text" id="cpc" name="cpc" />
          </div>
          <div className="column">
            <label htmlFor="cpd">Cp of D (J/mol K)</label>
            <input type="text" id="cpd" name="cpd" />
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
