import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
        <h1 className='headprocess3'>Adiabatic Tubular Reactor</h1>
        </div>
        <h2>    </h2>
        <div className="row">
          <div className="column hchart">
          <LineChart width={300} height={300} data={[
    { x: 1, volume: 100 },
    { x: 2, volume: 150 },
    { x: 3, volume: 125 },
    // Add more data points as needed
]}>
    <XAxis dataKey="volume" tickSize={1} label={{ value: 'Volume', position: 'insideBottom', offset: -5 }} />
    <YAxis label={{ value: 'X(Conversion)', angle: -90, position: 'insideLeft' }} />
    <CartesianGrid stroke="#555" strokeDasharray="3 3" opacity={0.5} />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="x" stroke="#8884d8" strokeWidth={2} />
</LineChart>

          </div>
          <div className="column hchart">
          <LineChart width={300} height={300} data={[
    { temp: 1, volume: 100 },
    { temp: 2, volume: 150 },
    { temp: 3, volume: 125 },
    // Add more data points as needed
]}>
    <XAxis dataKey="temp" tickSize={1} label={{ value: 'Volume', position: 'insideBottom', offset: -5 }} />
    <YAxis label={{ value: 'Temperature', angle: -90, position: 'insideLeft' }} />
    <CartesianGrid stroke="#555" strokeDasharray="3 3" opacity={0.5} />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
</LineChart>
          </div>
        </div>
        <h2>Volume of Adiabatic Tubular Reactor is : </h2>
        <div className='row'><button className="button2" onClick={handleButtonClick}>Home</button></div>
            
      </div>
    </div>
  );
};
export default AdiabaticTubularAnswer;
