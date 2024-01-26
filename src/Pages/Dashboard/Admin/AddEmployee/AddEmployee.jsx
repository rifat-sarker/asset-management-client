import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employees");
      return res.data;
    },
  });
  return (
    <div className="my-12">
      <h1 className="text-4xl text-center font-bold my-8">Add a Employee!</h1>
      <div className="flex gap-6 justify-center">
        <button className="btn">All user count : 0 </button>
        <div className="flex gap-6">
          <button className="btn">Package limit : 0 </button>
          <Link to='/dashboard/payment'><button className="btn">Increase limit</button></Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table my-12">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>#</th>
              <th>Member Image</th>
              <th>Member Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{idx+1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>Employee</td>
                <td><button className="btn">Add to the Team</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmployee;
