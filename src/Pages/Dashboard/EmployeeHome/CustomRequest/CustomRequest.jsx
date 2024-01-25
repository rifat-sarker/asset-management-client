import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet";

const CustomRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const customInfo = {
      asset_name:data.asset_name,
      asset_image: data.asset_image,
      type: data.type,
      price: data.price,
      additional_info:data.additional_info,
      why_need_this: data.why_need_this,
      requester_email: user.email,
      requester_name: user.displayName,
    }

    const customReq = await axiosSecure.post("/custom", customInfo);
    console.log(customReq.data);
    if (customReq.data.insertedId) {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Custom request added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Asset Management System | Make a custom Request</title>
      </Helmet>
      <form className="w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Asset Name</span>
            </div>
            <input
              type="text"
              {...register("asset_name", { required: true })}
              placeholder="Asset Name"
              className="input input-bordered  w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Asset Image</span>
            </div>
            <input
              type="text"
              {...register("asset_image", { required: true })}
              placeholder="Asset image"
              className="input input-bordered  w-full"
            />
          </label>
        </div>
        <div className="flex gap-6">
          {/* type */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <select
              defaultValue="default"
              {...register("type", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Type
              </option>
              <option value="returnable">returnable</option>
              <option value="nonreturnable">non returnable</option>
            </select>
          </label>
          {/* price */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered  w-full"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Additional Information</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-16"
            {...register("additional_info")}
            placeholder="Additional Information"
          ></textarea>
        </label>
        <br />
        <label className="form-control">
          <div className="label">
            <span className="label-text">Why Need this</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-16"
            {...register("why_need_this")}
            placeholder="Why Need this"
          ></textarea>
        </label>{" "}
        <br />
        <button className="btn">Request</button>
      </form>
    </div>
  );
};

export default CustomRequest;
