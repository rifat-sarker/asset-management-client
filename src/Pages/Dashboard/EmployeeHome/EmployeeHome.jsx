import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const EmployeeHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: customRequest = [] } = useQuery({
    queryKey: ["customRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/custom");
      console.log(res.data);
      return res.data;
    },
  });


  
  return (
    <div>
      <h1 className="text-4xl text-center my-12">My Custom Requests</h1>
      <div className="overflow-x-auto mx-auto w-3/4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Asset Name </th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {customRequest.map((customItem,idx) => (
              <tr key={customItem._id} >
                <th>{idx + 1}</th>
                <td>{customItem.asset_name}</td>
                <td>{customItem.price}</td>
                <td>{customItem.type}</td>
                <td>Pending</td>
                <td><Link to={`/employeeHome/${customItem._id}`} className="btn">Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeHome;
