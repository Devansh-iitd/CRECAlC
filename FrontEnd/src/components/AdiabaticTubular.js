import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const AdiabaticTubular = () => {
    const navigate = useNavigate();
    
      const [formData, setFormData] = useState({
        Hrx0: "",
        Fa0: "",
        Ca0: "",
        reversible: "",
        T1: "",
        T2: "",
        T0: "",
        E: "",
        k1: "",
        kc0: "",
        Cpa: "",
        gasphase: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };

      const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('./AdiabaticTubularAnswer',{ state: {...formData}});

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
            <input type="text" id="Hrx0" name="Hrx0" onChange={handleChange} />
            W
          </div>
          <div className="column">
            <label htmlFor="b">Molar Flow Rate(mol/s)</label>
            <input type="text" id="Fa0" name="Fa0" onChange={handleChange} />
            
          </div>
          <div className="column">
            <label htmlFor="c">Initial Conc (M)</label>
            <input type="text" id="Ca0" name="Ca0" onChange={handleChange} />
          </div>
          <div className="column">
            <label htmlFor="d">Reversible?</label>
            <input type="text" id="reversible" name="reversible" onChange={handleChange} />
          </div>
        </div>
      <div className="row">
          <label htmlFor="input1">T1</label>
          <input type="text" id="input1" name="T1" onChange={handleChange} />
          K
        </div>
        <div className="row">
          <label htmlFor="input2">T2</label>
          <input type="text" id="input2" name="T2" onChange={handleChange} />
          K
        </div>
        <div className="row">
          <label htmlFor="input3">T_O</label>
          <input type="text" id="input3" name="T0" onChange={handleChange} />
          K
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="cpa">Ea (J/mol)</label>
            <input type="text" id="E" name="E" onChange={handleChange} />
          </div>
          <div className="column">
            <label htmlFor="cpb">K1</label>
            <input type="text" id="k1" name="k1" onChange={handleChange} />
          </div>
          <div className="column">
            <label htmlFor="cpc">Kc_O</label>
            <input type="text" id="kc0" name="kc0" onChange={handleChange} />
          </div>
          <div className="column">
            <label htmlFor="cpd">Cp_a (J/mol K)</label>  
            <input type="text" id="Cpa" name="Cpa" onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
            <label htmlFor="cpd">Gas Phase</label>  
            <input type="text" id="gasphase" name="gasphase" onChange={handleChange} />
        </div>
        <div className='row'>
            <button className="button2" onClick={handleButtonClick}>Reactor Volume and Graphs</button>
        </div> 
      </div>
    </div>
  );
};
export default AdiabaticTubular;


