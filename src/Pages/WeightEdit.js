import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WeightSubmit from '../components/WeightSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const apiUrl = process.env.REACT_APP_JSON_SERVER_URL;

const WeightEdit = () => {
    const { id } = useParams();
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getWeight();
    }, [id]);

    const getWeight = () => {
        axios.get(`${apiUrl}/weights/${id}`).then((res) => {
            setWeight(res.data.data.weight);
            setDate(res.data.data.date); // Assuming your API returns the date
        }).catch((err) => {
            console.error("Error fetching weight data:", err);
        });
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            data:{
                weight: parseFloat(weight),
            date: date
            }
        };

        axios.put(`${apiUrl}/weights/${id}`, updatedData).then((res) => {
            console.log("Weight updated successfully:", res);
            navigate(`/weights/${id}`); // Navigate back to the weight detail page or any other page after submission
        }).catch((err) => {
            console.error("Error updating weight:", err);
        });
    };

    return (
        <div>
            <h1>Edit Weight</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs md="4">
                        <div>ID: {id}</div>
                        <WeightSubmit id={id} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WeightEdit;
