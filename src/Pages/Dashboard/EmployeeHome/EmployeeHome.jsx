import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EmployeeHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: customRequest = [], isLoading } = useQuery({
    queryKey: ["customRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/custom");
      console.log(res.data);
      return res.data;
    },
  });

  const { data: monthlyRequest = [] } = useQuery({
    queryKey: ["monthlyRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requestAssets");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <p>loading..</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Asset Management System | Employee Home</title>
      </Helmet>
      {/* my custom request section */}
      <div className="my-12">
        <h1 className="text-4xl text-center mb-8">My Custom Requests</h1>
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
              {customRequest.map((customItem, idx) => (
                <tr key={customItem._id}>
                  <th>{idx + 1}</th>
                  <td>{customItem.asset_name}</td>
                  <td>{customItem.price}</td>
                  <td>{customItem.type}</td>
                  <td>Pending</td>
                  <td>
                    <Link
                      to={`/employeeHome/${customItem._id}`}
                      className="btn"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Pending request */}
      <section>
        <h1 className="text-4xl text-center my-8">My Pending Request</h1>
        <div className="overflow-x-auto mx-auto w-3/4">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>#</th>
                <th>Asset Name </th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {monthlyRequest.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.product_name}</td>
                  <td>{item.type}</td>
                  <td>Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* My Monthly Request */}
      <section  className="text-center my-20">
        <h1 className="text-4xl text-center my-8">My Monthly Request</h1>
        <div className="overflow-x-auto mx-auto w-3/4">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>#</th>
                <th>Asset Name </th>
                <th>Type</th>
                <th>Status</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
              {monthlyRequest.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.product_name}</td>
                  <td>{item.type}</td>
                  <td>{item.status}</td>
                  <td>{item.request_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      {/* Frequently requested items */}
      <section>
        <h1 className="text-4xl text-center my-8">TODO: Frequently requested items (max: 4 items)</h1>
      </section>
    </div>
  );
};

export default EmployeeHome;
