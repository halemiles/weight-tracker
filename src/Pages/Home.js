import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import WeightSubmit from "../components/WeightSubmit"
import WeightChart from "../components/WeightChart";

const Home = () => {
  const [weights, setWeights] = useState([]);

  function getWeights() {
    axios.get("/weights.json").then((res) => {
        setWeights(res.data.weights);
        console.log(res.data.wights);
    });
}
  useEffect(() => {
    getWeights();
    console.log(weights);

  }, []);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      <WeightSubmit />
      <WeightChart data={weights} />
      <br />
      <Row xs={1} md={2} className="g-4">
        {weights &&
          weights.map((book, id) => (
            <Col key={id}>

              <Card key={id}>

                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;