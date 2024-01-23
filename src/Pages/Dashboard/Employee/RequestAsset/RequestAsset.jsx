import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const RequestAsset = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [productName, setProductName] = useState("");
  const [sortBy, setSortBy] = useState("");
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

  const handleRequest = async (e, productName, type, status) => {
    e.preventDefault();
    const additional_note = e.target.addInfo.value;
    console.log(additional_note, productName, type);

    const addRequest = {
      additional_note,
      productName,
      type: type,
      status:status,
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


  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
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
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
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
                        onSubmit={(e) =>
                          handleRequest(
                            e,
                            request.type,
                            request.product_name,
                            request.availability
                          )
                        }
                      >
                        <label>Additional Notes</label>
                        <br /> <br />
                        <textarea
                          className="rounded-lg p-4"
                          name="addInfo"
                          id="addInfo"
                          cols="40"
                          rows="5"
                        ></textarea>{" "}
                        <br />
                        <button className="btn">Request</button>
                        {/* onClick={(e)=>handleRequest(e,request._id,request.product_name)} */}
                      </form>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
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
