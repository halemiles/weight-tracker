import React, {useState} from 'react';
import axios from 'axios';

const WeightSubmit = () => {

  const [weights, setWeights] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    weight: ''
});
    const getWeights = () => {
        axios.get("/weights.json").then((res) => {
            setWeights(res.data.books);
        });
    }
    const submitWeight = (date, weight) => {
        console.log(date,weight);
       axios.post('http://localhost:3001/weights', {
        data: {weight: weight, date:date}
       })
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
            Submit form
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="weight">Weight:</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    step="0.1"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default WeightSubmit;