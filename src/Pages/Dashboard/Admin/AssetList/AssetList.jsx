import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AssetList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: assetList = [] } = useQuery({
    queryKey: ["assetList"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-4xl text-center my-12">Asset List</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Product Name</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Added Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assetList.map((asset,idx) => (
              <tr key={asset._id}>
                <th>{idx+1}</th>
                <td>{asset.product_name}</td>
                <td>{asset.type}</td>
                <td>{asset.quantity}</td>
                <td>{asset.date}</td>
                <td>update</td>
                <td>Remove</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
