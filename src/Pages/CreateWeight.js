import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_JSON_SERVER_URL;

const WeightCreate = () => {
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            data:{
                weight: parseFloat(weight),
            date: date
            }
        };

        axios.post(`${apiUrl}/weights`, newData).then((res) => {
            console.log("Weight created successfully:", res);
            navigate('/weights'); // Navigate to the weights list or another page after submission
        }).catch((err) => {
            console.error("Error creating weight:", err);
        });
    };

    return (
        <div>
            <h1>Create New Weight</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Weight:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={weight}
                        onChange={handleWeightChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default WeightCreate;
