import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet";

const RequestAsset = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [productName, setProductName] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [additionalNote, setAdditionalNote] = useState("");
  const [currentRequest, setCurrentRequest] = useState(null);
  // const [products, setProducts] = useState([]);

  const { data: requestAsset = [] } = useQuery({
    queryKey: ["requestAsset", productName, sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/products?productName=${productName}&sortBy=${sortBy}`
      );
      console.log(res.data);
      // setProducts(res.data);
      return res.data;
    },
  });

  const handleRequest = async () => {
    // e.preventDefault();
    // const additional_note = e.target.addInfo.value;
    // console.log(additionalNote, productName, type);

    if (currentRequest) {
      console.log(
        additionalNote,
        currentRequest.type,
        currentRequest.product_name,
        currentRequest.availability
      );
    }

    document.getElementById("my_modal_5").close();

    const addRequest = {
      additional_note: additionalNote,
      product_name: currentRequest.product_name,
      type: currentRequest.type,
      status: currentRequest.availability,
      requester_name: user.displayName,
      requester_email: user.email,
    };

    const res = await axiosSecure.post("/requestAssets", addRequest);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Request sent",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleTextAreaChange = (e) => {
    setAdditionalNote(e.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Asset Management System | Request for an Asset</title>
      </Helmet>
      <h1 className="text-4xl text-center my-12">
        Total Request an Asset {requestAsset.length}
      </h1>
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
          <select
            name=""
            className="p-2 rounded-lg"
            value={sortBy}
            onChange={handleSortChange}
            id=""
          >
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
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requestAsset.map((request, idx) => (
              <tr key={request._id}>
                <th>{idx + 1}</th>
                <td>{request.product_name}</td>
                <td>{request.type}</td>
                <td>{request.availability}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setCurrentRequest(request);
                      document.getElementById("my_modal_5").showModal();
                    }}
                    disabled={request.availability === "Out of Stock"}
                  >
                    Request
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleRequest();
                        }}
                      >
                        <label>Additional Notes</label>
                        <br /> <br />
                        <textarea
                          value={additionalNote}
                          onChange={handleTextAreaChange}
                          className="rounded-lg p-4"
                          name="addInfo"
                          id="addInfo"
                          cols="40"
                          rows="5"
                        ></textarea>{" "}
                        <br />
                        <button className="btn">Request</button>
                      </form>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAsset;
