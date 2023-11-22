import {
  BarChart as Chart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { area_Chart_Data } from "../../data/charts/Area_Chart_Data";

const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <Chart width={500} height={300} data={area_Chart_Data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="sales"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="sales"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </Chart>
    </ResponsiveContainer>
  );
};

export default BarChart;
