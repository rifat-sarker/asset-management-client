import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

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

  if (isLoading) {
    return <p>loading..</p>;
  }

  return (
    <div>
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
      </section>

      {/* My Monthly Request */}
      <section  className="text-center">
        <h1 className="text-4xl text-center my-8">My Monthly Request</h1>
        <h3>
          Show all requests made by the user in this month, show them in sorted
          order: recent one will be first
        </h3>
      </section>


      {/* Frequently requested items */}
      <section>
        <h1 className="text-4xl text-center my-8">Frequently requested items (max: 4 items)</h1>
      </section>
    </div>
  );
};

export default EmployeeHome;
