import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet";

const MyAsset = () => {
  const axiosSecure = useAxiosSecure();
  const [productName, setProductName] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { data: myAssets = [] } = useQuery({
    queryKey: ["myAssets",productName, sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requestAssets?productName=${productName}&sortBy=${sortBy}`);
      // console.log(res.data);
      return res.data;
    },
  });

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div>
      <Helmet>
        <title>Asset Management System | My Asset</title>
      </Helmet>
      <h2 className="text-4xl text-center my-12">
        My Asset Page : {myAssets.length}
      </h2>
      <div className="flex my-12 items-center justify-center gap-8">
        <div>
          <input
            className="p-2 rounded-lg"
            type="text"
            name=""
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Search by Product Name"
            id=""
          />
        </div>
        <div>
          <select name="" className="p-2 rounded-lg" value={sortBy} onChange={handleSortChange} id="">
            <option value="">Sort by Type</option>
            <option value="returnable">Returnable</option>
            <option value="nonreturnable">Nonreturnable</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Request Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myAssets.map((asset,idx) => (
              <tr key={asset._id}>
                <th>{idx +1 }</th>
                <td>{asset.product_name}</td>
                <td>{asset.type}</td>
                <td>{asset.request_date}</td>
                <td>Approval Date</td>
                <td>Pending</td>
                <td><button className="btn">return</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAsset;
