import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allRequest = [] } = useQuery({
    queryKey: ["allRequest"],
    queryFn: async () => {
      const res = await axiosSecure("/requestAssets");
      return res.data;
    },
  });

  const { data: customRequest = [] } = useQuery({
    queryKey: ["customRequest"],
    queryFn: async () => {
      const res = await axiosSecure("/custom");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-4xl text-center my-12">All Request</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Requester Email</th>
              <th>Requester Name</th>
              <th>Requester Date</th>
              <th>Additional Note</th>
              <th>Status</th>
              <th>Action</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {allRequest.map((request, idx) => (
              <tr key={request._id}>
                <th>{request.product_name}</th>
                <td>{request.type}</td>
                <td>{request.requester_email}</td>
                <td>{request.requester_name}</td>
                <td>{request.request_date}</td>
                <td>{request.additional_note}</td>
                <td>{request.status}</td>
                <td>
                  <button className="btn">Approve</button>
                </td>
                <td>
                  <button className="btn">Reject</button>
                </td>
              </tr>
            ))}
            {customRequest.map((custom, idx) => (
              <tr key={custom._id}>
                
                <td>{custom.asset_name}</td>
                <td>{custom.type}</td>
                <td>{custom.requester_email}</td>
                <td>{custom.requester_name}</td>
                <td>{custom.request_date}</td>
                <td>Not found</td>
                <td>Available</td>
                <td>
                  <button className="btn">Approve</button>
                </td>
                <td>
                  <button className="btn">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequest;
