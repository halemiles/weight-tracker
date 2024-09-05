import React, {useEffect,useState} from 'react';
import axios from 'axios';
import getTodayDate from '../logic/GetTodayDateFormatted';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const apiUrl = process.env.REACT_APP_JSON_SERVER_URL;
const WeightSubmit = ({id}) => {

  const [weight, setWeight] = useState([]);

  useEffect(() => {
    getWeight(id);
  },[])
  const [formData, setFormData] = useState({
    date: getTodayDate(),
    weight: 0
    });
    const getWeight = (weightId) => {
        console.log("Getting weight for ID:",weightId);
        if(weightId){
            axios.get(`${apiUrl}/weights/${weightId}`).then((res) => {
                console.log("Weight value",res);
                setFormData({
                    ...formData,
                    date: res.data.date,
                    weight: res.data.weight
                });
            });
        }
    }
    const submitWeight = (date, weight) => {
        console.log(date,weight);
        if(id){
            axios.put(`${apiUrl}/weights/${id}`, {
                weight: weight, date:date
               })
        }
        else
        {
            axios.post(`${apiUrl}/weights`, {
                weight: weight, date:date
               })
        }

    };
// Handle input changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Ensure weight is a number
    const weightNumber = parseFloat(formData.weight);
    if (isNaN(weightNumber)) {
        alert("Please enter a valid weight.");
        return;
    }

    console.log("Weight number:", weightNumber);
    // Call the writeWeight function with the form data
    submitWeight(formData.date, weightNumber);

    // Optionally, reset the form
    setFormData({
        date: '',
        weight: ''
    });
};

    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col>
                        <Form.Label htmlFor="date">Date:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Form.Label htmlFor="weight">Weight:</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                        step="0.1"
                    />
                </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
        </div>
    )
}

export default WeightSubmit;