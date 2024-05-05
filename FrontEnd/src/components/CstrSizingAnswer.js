import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { useState,useEffect } from 'react';
const CstrSizingAnswer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;
    const [responses,setResponse] = useState({Xebs:[],Xmbs:[],T:[]});
    
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
    { temp1: 100, x1: 80, temp2: 110, x2: 90 },
    { temp1: 150, x1: 70, temp2: 160, x2: 85 },
    { temp1: 125, x1: 90, temp2: 130, x2: 75 },
    // Add more data points as needed
]}>
    <XAxis dataKey="temp1" tickSize={1} label={{ value: 'Temperature', position: 'insideBottom', offset: -5 }} />
    <YAxis label={{ value: 'X(Conversion)', angle: -90, position: 'insideLeft' }} />
    <CartesianGrid stroke="#555" strokeDasharray="3 3" opacity={0.5} />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="x1" stroke="#8884d8" strokeWidth={2} />
    <Line type="monotone" dataKey="x2" stroke="#82ca9d" strokeWidth={2} />
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
