import {
  AreaChart as Chart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { area_Chart_Data } from "../../data/charts/Area_Chart_Data";

const AreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <Chart width={500} height={400} data={area_Chart_Data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
        <Area dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      </Chart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
