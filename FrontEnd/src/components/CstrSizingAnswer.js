import React from 'react';
import { useNavigate } from 'react-router-dom';
const CstrSizingAnswer = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('/');
      };
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess'>CSTR Sizing with Heat Exchanger</h1>
        </div>
            <h2>Conversion is : </h2> 
            <h2>Temperature is : </h2>
            <button className="button2" onClick={handleButtonClick}>Home</button>
      </div>
    </div>
  );
};
export default CstrSizingAnswer;
