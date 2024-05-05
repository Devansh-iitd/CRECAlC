import React from 'react';
import reactionImage from './Reaction.png';
import { useNavigate } from 'react-router-dom';
const HeatExchangerAnswer = () => {
    const navigate = useNavigate();
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
            <label htmlFor="a">Cp of A (J/mol K)</label>
            <input type="text" id="cpa" name="cpa" />
          </div>
          <div className="column">
            <label htmlFor="b">Cp of B (J/mol K)</label>
            <input type="text" id="cpb" name="cpb" />
          </div>
          <div className="column">
            <label htmlFor="c">Cp of C (J/mol K)</label>
            <input type="text" id="cpc" name="cpc" />
          </div>
          <div className="column">
            <label htmlFor="d">Cp of D (J/mol K)</label>
            <input type="text" id="cpd" name="cpd" />
          </div>
        </div>  
            <h2>Heat of Reaction is : </h2> 
            <button className="button2" onClick={handleButtonClick}>Home</button>
      </div>
    </div>
  );
};
export default HeatExchangerAnswer;
