import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AssetList = () => {
  const axiosSecure = useAxiosSecure();
  const [searchProduct, setSearchProduct] = useState("");
  const [productType, setProductType] = useState("type");
  const [sortByQuantity, setSortByQuantity] = useState("");

  const { data: assetList = [] } = useQuery({
    queryKey: ["assetList"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      // console.log(res.data);
      return res.data;
    },
  });

  const filterProduct = assetList
    .filter((product) => productType === "type" || product.type === productType)
    .filter((product) =>
      product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
    )
    .sort((a, b) => {
      if (sortByQuantity === "asc") {
        return a.quantity - b.quantity;
      } else if (sortByQuantity === "desc") {
        return b.quantity - a.quantity;
      }
      return 0;
    });

  return (
    <div>
      <Helmet>
        <title>Asset Management System | AssetList</title>
      </Helmet>
      <h1 className="text-4xl text-center my-12">Asset List</h1>
      <div className="text-center justify-center items-center lg:flex gap-8 mb-12">
        {/* Search Product by name */}
        <div>
          <button className="btn mr-4 ">Search Product by name</button>
          <input
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            className=" py-3 rounded-lg px-2"
            type="text"
            name="product_name"
            id="name"
          />{" "}
        </div>
        <br /> <br />
        {/* Filter by type */}
        <div>
          <button className="btn mr-4">Filter by type </button>
          <select
            className="p-4 font-semibold rounded-lg"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="type">Type</option>
            <option value="returnable">returnable</option>
            <option value="nonreturnable">Nonreturnable</option>
          </select>
        </div>
        <br />
        <div>
          <button className="btn mr-4">Sort by quantity</button>
          <select
            className="p-4 font-semibold rounded-lg"
            value={sortByQuantity}
            onChange={(e) => setSortByQuantity(e.target.value)}
          >
            <option value="">Quantity</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
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
            {filterProduct.map((asset, idx) => (
              <tr key={asset._id}>
                <th>{idx + 1}</th>
                <td>{asset.product_name}</td>
                <td>{asset.type}</td>
                <td>{asset.quantity}</td>
                <td>{asset.date}</td>
                <td>
                  <button className="btn-lg btn-ghost rounded-lg">
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-lg">
                    <FaTrash className="text-red-600"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
