import React from 'react';
import reactionImage from './Reaction.png';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
const HeatExchanger = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({a:0,b:0,c:0,d:0,Tr:0,T:0,Hrx0:0,cpa:0,cpb:0,cpc:0,cpd:0});
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('./HeatExchangerAnswer', {state: {...formData}});
      };

    const handleChange = (e) => {
      const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value});
        console.log(formData)
    }
    



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
            <input type="text" id="a" name="a" onChange= {handleChange} />
          </div>
          <div className="column">
            <label htmlFor="b">Value of b:</label>
            <input type="text" id="b" name="b" onChange= {handleChange} />
          </div>
          <div className="column">
            <label htmlFor="c">Value of c:</label>
            <input type="text" id="c" name="c" onChange= {handleChange}  />
          </div>
          <div className="column">
            <label htmlFor="d">Value of d:</label>
            <input type="text" id="d" name="d" onChange= {handleChange}  />
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">Reference Temperature:</label>
          <input type="text" id="Tr" name="Tr" onChange= {handleChange}  />
          K
        </div>
        <div className="row">
          <label htmlFor="input2">Temperature of Reaction:</label>
          <input type="text" id="T" name="T" onChange= {handleChange}  />
          K
        </div>
        <div className="row">
          <label htmlFor="input3">Standard Heat of Reaction at Tr:</label>
          <input type="text" id="Hrx0" name="Hrx0" onChange= {handleChange}  />
          cal/mol
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="cpa">Cp of A (cal/mol K)</label>
            <input type="text" id="cpa" name="cpa" onChange= {handleChange} />
          </div>
          <div className="column">
            <label htmlFor="cpb">Cp of B (cal/mol K)</label>
            <input type="text" id="cpb" name="cpb" onChange= {handleChange}  />
          </div>
          <div className="column">
            <label htmlFor="cpc">Cp of C (cal/mol K)</label>
            <input type="text" id="cpc" name="cpc" onChange= {handleChange}  />
          </div>
          <div className="column">
            <label htmlFor="cpd">Cp of D (cal/mol K)</label>
            <input type="text" id="cpd" name="cpd" onChange= {handleChange} />
          </div>
        </div>
        <div className='row'>
            <button className="button2" onClick={handleButtonClick}>Calculate</button>
        </div> 
      </div>
    </div>
  );
};
export default HeatExchanger;
