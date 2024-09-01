import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import WeightSubmit from "../components/WeightSubmit"
import WeightChart from "../components/WeightChart";

const Weights = () => {
  const [weights, setWeights] = useState([]);

  function getWeights() {
    axios.get("http://localhost:3001/weights").then((res) => {
        setWeights(res.data);
        console.log(res.data);
    });
}
  useEffect(() => {
    getWeights();
    console.log(weights);

  }, []);

  return (
    <div>
      <h1 className="text-center">Weights</h1>
      <br />
      <Table xs={1} md={2} className="g-4">
        {weights &&
          weights.map((weight, id) => (
            <tr key={id}>


                  <td>{weight.data.weight}</td>
                  <td>{weight.data.date}</td>
            </tr>
          ))}
      </Table>
    </div>
  );
};

export default Weights;