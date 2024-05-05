import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdiabaticTubularAnswer = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('/');
      };
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess2'>Adiabatic Tubular Reactor</h1>
        </div>
        
        <div className='row'><h2>Volume of Adiabatic Tubular Reactor is : </h2></div> 
        <div className='row'><button className="button2" onClick={handleButtonClick}>Home</button></div>
            
      </div>
    </div>
  );
};
export default AdiabaticTubularAnswer;
