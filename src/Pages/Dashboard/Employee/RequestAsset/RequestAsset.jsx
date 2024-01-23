import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const RequestAsset = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
 
  const { data: requestAsset = [] } = useQuery({
    queryKey: ["requestAsset"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      console.log(res.data);
      return res.data;
    },
  });

 
  const handleRequest = async (e, product_name, type) => {
    e.preventDefault();
    const additional_note = e.target.addInfo.value;
    console.log(additional_note, product_name, type);
  
    const addRequest = {
     additional_notes: additional_note,
      product_name,
      type: type,
      requester_name:user.displayName,
      requester_email: user.email,
    }
    const res = await axiosSecure.post('/requestAssets', addRequest)
    console.log(res.data);
    return res.data;
  };

  return (
    <div>
      <h1 className="text-4xl text-center my-12">
        Total Request an Asset {requestAsset.length}
      </h1>
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
                    disabled={request.availability === 'Out of Stock'}
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
                          handleRequest(e, request.product_name, request.type)
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
