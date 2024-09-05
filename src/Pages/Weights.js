import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_JSON_SERVER_URL;

const Weights = () => {
  const [weights, setWeights] = useState([]);

  function getWeights() {
    axios.get(`${apiUrl}/weights?_sort=weight`).then((res) => {
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
        <thead>
        <th>Weight</th>
        <th>Date</th>
        <th></th>
        </thead>
        <tbody>
        {weights &&
          weights.map((weight, id) => (
            <tr key={id}>
              <td>{weight.weight}</td>
              <td>{weight.date}</td>
              <td><Link to={`/weights/${weight.id}`}>Edit</Link></td>
            </tr>
          ))}
          </tbody>
      </Table>
    </div>
  );
};

export default Weights;