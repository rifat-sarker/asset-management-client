import { Helmet } from "react-helmet";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const {data:adminStats=[]} = useQuery({
    queryKey: ['adminStats'],
    queryFn: async()=>{
      const res = await axiosSecure.get('/requestAssets')
      return res.data
    }
  })



  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const pieChartData = adminStats.map(stats=>{
  return {name:stats.type, value:adminStats.length}
})
  return (
    <div className="mt-12">
      <Helmet>
        <title>Asset Management System | Admin Home</title>
      </Helmet>
      {/* TODO: */}

      <div>
      <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>















      <h1 className="text-4xl">Pending requests (max: 5 items)</h1>
      <h1 className="text-4xl">● Top most requested items (max: 4 items)</h1>
      <h1 className="text-4xl">
        ● Limited Stock items (Quantity less than 10)
      </h1>
      <h1 className="text-4xl">
        ● Make a pie chart for the total percentage of returnable items and
        non-returnable items requested by the employee.
      </h1>
      <h1 className="text-4xl">● Add 2 relevant extra section</h1>
    </div>
  );
};

export default AdminHome;
