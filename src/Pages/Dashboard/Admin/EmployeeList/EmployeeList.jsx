import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: employees = [], refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employees");
      console.log(res.data);
      return res.data;
    },
  });


  const handleDeleteEmployee =(employee)=>{
    Swal.fire({
        title: "Remove from the team?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/employees/${employee._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Employee has been remove from the Team.",
                icon: "success",
              });
            }
          });
        }
      });
  }

  const handleMakeAdmin = (employee)=>{
    axiosSecure.patch(`/employees/${employee._id}`)
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",                      
          title: `${employee.name} is an admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }

  return (
    <div className="mt-12">
      <h1 className="text-4xl text-center my-12">My Employee List</h1>
      <div className="overflow-x-auto flex ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, idx) => (
              <tr key={employee._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={employee.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{employee.name}</td>
                <td>  {employee.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(employee)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <FaUsers className="text-white text-2xl"></FaUsers>
                    </button>
                  )} </td>
                <th>
                <button
                    onClick={() => handleDeleteEmployee(employee)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-600"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
