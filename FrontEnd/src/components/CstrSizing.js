import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const CstrSizing = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({V:0,Ca0:0,A:16.96e12,Fa0:0,T:0,E:32400,Ua:0,Hrx0:0,T0:0,Fm0:71.87,Fb0:802.8,Cpa:35,Cpb:18,Cpc:46,Cpm:19.5});
    const handleButtonClick = () => {
        navigate('./CstrSizingAnswer', { state: {...formData}});
      };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value });
    }


    
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess'>CSTR Sizing with Heat Exchanger</h1>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="a">Volume (in ft^3)</label>
            <input type="text" id="V" name="V" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="b">Initial Conc</label>
            <input type="text" id="Ca0" name="Ca0" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="c">A</label>
            <input type="text" id="A" name="A" onChange={handleChange}/>
          </div>
          <div className="column">
            <label htmlFor="d">Initial Molar flow rate</label>
            <input type="text" id="Fa0" name="Fa0" onChange={handleChange}/>
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">Fc0</label>
          <input type="text" id="T" name="T" onChange={handleChange}/>
          K
        </div>
        <div className="row">
          <label htmlFor="input2">Ea</label>
          <input type="text" id="E" name="E" onChange={handleChange}/>
          J/mol
        </div>
        <div className="row">
          <label htmlFor="input3">Fb0</label>
          <input type="text" id="Ua" name="Ua" onChange={handleChange}/>
         
        </div>
        <div className='row'>
        <div className="column">
            <label htmlFor="cpb">Standard Heat of Reaction</label>
            <input type="text" id="Hrx0" name="Hrx0" onChange={handleChange}/>
            btu/lb-mol
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="cpa">Cp of A (btu/lb-mol F)</label>
            <input type="text" id="Cpa" name="Cpa" onChange={handleChange}/>
          </div>
          
          <div className="column">
            <label htmlFor="cpc"> T_O</label>
            <input type="text" id="T0" name="T0" onChange={handleChange}/>
            R
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
