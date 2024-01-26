import { Helmet } from "react-helmet";
import { PieChart, Pie, Cell, Legend } from "recharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: result = [] } = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request-stats");
      console.log(res.data);
      return res.data;
    },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (result && result.length > 0) {
      setData(result[0]?.data || []);
    }
  }, [result]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="mt-12">
      <Helmet>
        <title>Asset Management System | Admin Home</title>
      </Helmet>
      <h1 className="text-2xl text-center my-8">
        The total percentage of returnable items and non-returnable items
        requested by the employee.
      </h1>
      <div className="flex justify-center my-12">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            nameKey="type"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  );
};

export default AdminHome;
