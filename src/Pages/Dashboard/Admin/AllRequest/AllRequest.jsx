import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AllRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [searchProduct, setSearchProduct] = useState("");

  const { data: allRequest = [] } = useQuery({
    queryKey: ["allRequest"],
    queryFn: async () => {
      const res = await axiosSecure("/requestAssets");
      return res.data;
    },
  });

  const filterProduct = allRequest.filter((product) =>
    product.requester_name
      .toLowerCase()
      .includes(searchProduct.toLocaleLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Asset Management System | All Request</title>
      </Helmet>
      <h1 className="text-4xl text-center my-12">All Request</h1>
      {/* Search Product by requester  name */}
      <div className="text-center my-8">
        <button className="btn mr-4 ">Search Product by requester  name</button>
        <input
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className=" py-3 rounded-lg px-2"
          type="text"
          name="product_name"
          id="name"
        />{" "}
      </div>
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
            {filterProduct.map((request, idx) => (
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequest;
