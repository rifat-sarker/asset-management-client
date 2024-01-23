import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CustomRequestList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: customReqList = [] } = useQuery({
    queryKey: ["customReqList"],
    queryFn: async () => {
      const res = await axiosSecure.get("/custom");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-4xl my-12 text-center">
        Custom Request List {customReqList.length}
      </h1>

      {customReqList.map((custom) => (
        <div key={custom._id} className="hero  min-h-screen ">
          <div className="lg:flex justify-center  items-center p-4 gap-12">
            <div>
              <img
                src={custom.asset_image}
                className="max-w-md rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{custom.asset_name}</h1>
              <p className="py-3">
                <span className="font-semibold text-primary">Why need </span>? {" "}
                <br />
                {custom.why_need_this}
              </p>
              <p className="py-3"><span className="font-semibold text-primary">Price </span>: {custom.price} Taka</p>
              <p className="py-3"><span className="font-semibold text-primary">Asset Type</span> : {custom.type}</p>
              <p className="py-3">
                <span className="font-semibold text-primary">Additional Info</span>: <br />
                {custom.additional_info}
              </p>
              <div className="flex mt-2 gap-8">
                <button className="btn btn-primary">Approve</button>
                <button className="btn btn-primary">Reject</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomRequestList;
