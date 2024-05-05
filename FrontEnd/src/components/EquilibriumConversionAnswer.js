import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";
const EquilibriumConversionAnswer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state;
  const [responses, setResponse] = useState({ Xebs: [], Xes: [], T: [] });
  //console.log(formData);
  const handleButtonClick = () => {
    // Navigate to HeatExchanger component when the button is clicked
    navigate("/");
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/functions/equilibriumConversion", formData)
      .then((response) => {
        //console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = responses.T.map((item, index) => {
    return {
      temp1: item,
      x1: responses.Xebs[index],
      temp2: item,
      x2: responses.Xes[index],
    };
  });
  return (
    <div className="container">
      <div className="content">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row">
          <h1 className="headprocess">Equilibrium Conversion</h1>
        </div>
        <LineChart
          width={400}
          height={400}
          data={data
            // ,
            // { temp1: 150, x1: 70, temp2: 160, x2: 85 },
            // { temp1: 125, x1: 90, temp2: 130, x2: 75 },
            // Add more data points as needed
          }
        >
          <XAxis
            dataKey="temp1"
            tickSize={1}
            label={{
              value: "Temperature",
              position: "insideBottom",
              offset: 0,
            }}
          />
          <YAxis label={{ value: "X", angle: -90, position: "insideLeft" }} />
          <CartesianGrid stroke="#555" strokeDasharray="3 3" opacity={0.5} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="x1"
            name="Line 1"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="x2"
            name="Line 2"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>

        <h2>Conversion is : </h2>
        <button className="button3" onClick={handleButtonClick}>
          Home
        </button>
      </div>
    </div>
  );
};
export default EquilibriumConversionAnswer;
