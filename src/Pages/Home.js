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

  const populateCards = (data) => {
    const weeklyLoss = getWeightLossSinceSunday(data);
        setWeeklyLoss(`${weeklyLoss?.weightLoss ?? 0} kg`);

        const totalLoss = getTotalWeightLoss(data);
        setTotalLoss(`${totalLoss?.totalWeightLoss ?? 0} kg`);
  }

  function getWeights() {
    axios.get(`${apiUrl}/weights?_sort=weight`).then((res) => {
        setWeights(res.data);
        populateCards(res.data);

    });
}
  useEffect(() => {
    console.log("api url",apiUrl);
    getWeights();
    console.log(weights);
    populateCards(weights);
  }, []);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      <Row md={3}>
        <Col><WeightSubmit dateOverride={Date.now()} /></Col>
        <Col><StatCard title={"Since Sunday"} value={weeklyLoss}/></Col>
        <Col><StatCard title={"Total loss"} value={totalLoss}/></Col>
      </Row>

      <WeightChart data={weights} />

    </div>
  );
};

export default Home;