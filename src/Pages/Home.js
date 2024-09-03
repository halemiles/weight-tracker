import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WeightSubmit from "../components/WeightSubmit"
import WeightChart from "../components/WeightChart";
import Header from '../components/Header'
import StatCard from '../components/StatCard'
import {getWeightLossSinceSunday} from '../logic/WeightCalculations'
import { getTotalWeightLoss } from "../logic/TotalWeightLossCalculation";
const apiUrl = process.env.REACT_APP_JSON_SERVER_URL;

const Home = () => {
  const [weights, setWeights] = useState([]);
  const [weeklyLoss,setWeeklyLoss] = useState("0 kg");
  const [totalLoss, setTotalLoss] = useState("0 kg");



  function getWeights() {
    axios.get(`${apiUrl}/weights`).then((res) => {
        setWeights(res.data);
    });
}
  useEffect(() => {
    getWeights();
    console.log(weights);
    setWeeklyLoss(`${getWeightLossSinceSunday(weights)?.weightLoss ?? 0} kg`);
    setTotalLoss(`${getTotalWeightLoss(weights)?.totalWeightLoss ?? 0} kg`);
  }, []);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      <Row md={3}>
        <Col><StatCard title={"Since Sunday"} value={weeklyLoss}/></Col>
        <Col><StatCard title={"Total loss"} value={totalLoss}/></Col>
        <Col><StatCard title={"Lost this week"} value={"3kg"}/></Col>
      </Row>
      <WeightChart data={weights} />

    </div>
  );
};

export default Home;