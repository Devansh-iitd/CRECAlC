import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { useState,useEffect } from 'react';
const CstrSizingAnswer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;
    const [responses,setResponse] = useState();
    const handleButtonClick = () => {
        // Navigate to HeatExchanger component when the button is clicked
        navigate('/');
      };
      useEffect( () => {
        axios.post('http://localhost:5000/functions/tempcalc',formData)
        .then((response) => {
          //console.log(response.data);
          setResponse(response.data);
        }
        )
        .catch((error) => {
            console.log(error);
        });
      }, []);

      console.log(responses);
    
  return (
    <div className="container">
      <div className="content">
        <div className='row'>
        <h1 className='headprocess2'>CSTR Sizing with Heat Exchanger</h1>
        </div>
        <LineChart width={400} height={400} data={[
    { x: 1, temp: 100 },
    { x: 2, temp: 150 },
    { x: 3, temp: 125 },
    // Add more data points as needed
]}>
    <XAxis dataKey="temp" tickSize={1} label={{ value: 'Temperature', position: 'insideBottom', offset: -5 }} />
    <YAxis label={{ value: 'X(Conversion)', angle: -90, position: 'insideLeft' }} />
    <CartesianGrid stroke="#555" strokeDasharray="3 3" opacity={0.5} />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="x" stroke="#8884d8" strokeWidth={2} />
</LineChart>
            <div className='row'>
              <div className='column'><h2>Conversion is : </h2> </div>
              <div className='column'><h2>Temperature is : </h2></div>
            </div>
            <button className="button3" onClick={handleButtonClick}>Home</button>
      </div>
    </div>
  );
};
export default CstrSizingAnswer;
