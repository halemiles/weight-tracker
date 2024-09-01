import { LineChart, Line,XAxis } from 'recharts';

const WeightChart = ({data}) => {


    return(
    <div>
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="data.weight" stroke="#8884d8" />
            <XAxis
                dataKey="data.date"
                />

        </LineChart>
      </div>
    )
}

export default WeightChart;