import React from 'react';
import reactionImage from './Reaction.png';
import { useNavigate,useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react'
const HeatExchangerAnswer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('/');
      };
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess'>Heat of Reaction</h1>
        </div>
        <img src={reactionImage} alt="Description of the image" />
        <div className="row">
          <div className="column">
            <label htmlFor="a">Value of a:</label>
            <input type="text" id="a" name="a" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="b">Value of b:</label>
            <input type="text" id="b" name="b" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="c">Value of c:</label>
            <input type="text" id="c" name="c" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="d">Value of d:</label>
            <input type="text" id="d" name="d" onChange={handleChange}/>
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">Reference Temperature:</label>
          <input type="text" id="input1" name="input1" onChange={handleChange}/>
          K
        </div>
        <div className="row">
          <label htmlFor="input2">Temperature of Reaction:</label>
          <input type="text" id="input2" name="input2" onChange={handleChange}/>
          W/m
        </div>
        <div className="row">
          <label htmlFor="input3">Standard Heat of Reaction at Tr:</label>
          <input type="text" id="input3" name="input3" onChange={handleChange}/>
          J/mol
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="a">Cp of A (J/mol K)</label>
            <input type="text" id="cpa" name="cpa" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="b">Cp of B (J/mol K)</label>
            <input type="text" id="cpb" name="cpb" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="c">Cp of C (J/mol K)</label>
            <input type="text" id="cpc" name="cpc" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="d">Cp of D (J/mol K)</label>
            <input type="text" id="cpd" name="cpd" onChange={handleChange}/>
          </div>
        </div>  
            <h2>Heat of Reaction is : </h2> 
            <button className="button2" onClick={handleButtonClick}>Home</button>
      </div>
    </div>
  );
};
export default HeatExchangerAnswer;
