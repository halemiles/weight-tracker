import { LineChart, Line,XAxis,YAxis,ResponsiveContainer,Tooltip,CartesianGrid } from 'recharts';

const WeightChart = ({data}) => {


    return(
    <div>
        <ResponsiveContainer width="95%" height={400}>
            <LineChart  data={data} >
                <Line type="monotone" dataKey="weight" stroke="#8884d8"  strokeWidth={3}/>
                <XAxis dataKey="date"  />
                <YAxis type="number" domain={[130,155]} />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

export default WeightChart;