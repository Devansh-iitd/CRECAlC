import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
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
            <input type="text" id="V" name="V" />
          </div>
          <div className="column">
            <label htmlFor="b">Initial Conc</label>
            <input type="text" id="Ca0" name="Ca0" />
          </div>
          <div className="column">
            <label htmlFor="c">A</label>
            <input type="text" id="A" name="A" />
          </div>
          <div className="column">
            <label htmlFor="d">Initial Molar flow rate</label>
            <input type="text" id="Fa0" name="Fa0" />
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">T</label>
          <input type="text" id="T" name="T" />
          K
        </div>
        <div className="row">
          <label htmlFor="input2">Ea</label>
          <input type="text" id="E" name="E" />
          J/mol
        </div>
        <div className="row">
          <label htmlFor="input3">Overall Heat Transfer Coefficient</label>
          <input type="text" id="Ua" name="Ua" />
          W/K
        </div>
        <div className='row'>
        <div className="column">
            <label htmlFor="cpb">Standard Heat of Reaction</label>
            <input type="text" id="Hrx0" name="Hrx0" />
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
            <input type="text" id="T0" name="T0" />
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
