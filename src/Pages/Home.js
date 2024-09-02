import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WeightSubmit from "../components/WeightSubmit"
import WeightChart from "../components/WeightChart";
import Header from '../components/Header'
import StatCard from '../components/StatCard'
const apiUrl = process.env.REACT_APP_JSON_SERVER_URL;

const Home = () => {
  const [weights, setWeights] = useState([]);

  function getWeights() {
    axios.get(`${apiUrl}/weights`).then((res) => {
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
      <h1 className="text-center">Home</h1>
      <Row md={3}>
        <Col><StatCard title={"Total Lost"} value={"3kg"}/></Col>
        <Col><StatCard title={"Lost this week"} value={"3kg"}/></Col>
        <Col><StatCard title={"Lost this week"} value={"3kg"}/></Col>
      </Row>
      <WeightChart data={weights} />
     
    </div>
  );
};

export default Home;