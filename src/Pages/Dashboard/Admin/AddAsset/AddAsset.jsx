import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAsset = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosSecure= useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await axiosSecure.post('/products', data)
    console.log(res.data);
    if(res.data.insertedId){
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Asset added",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
    }
  };
  return (
    <div className="my-12">
      <h1 className="text-4xl text-center font-bold">Add an Asset</h1>
      <div>
        <form className="w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Product Name</span>
              </div>
              <input
                type="text"
                {...register("product_name", { required: true })}
                placeholder="Product Name"
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
                className="select  select-bordered w-full"
              >
                <option disabled value="default">
                  Type
                </option>
                <option value="returnable">returnable</option>
                <option value="nonreturnable">non returnable</option>
              </select>
            </label>
          </div>
          <div className="flex gap-6">
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <input
                type="number"
                {...register("quantity", { required: true })}
                placeholder="Quantity"
                className="input input-bordered  w-full"
              />
            </label>
          </div>
          <br />
          <div className="text-center">
            <button className="btn btn-secondary">Add Asset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
